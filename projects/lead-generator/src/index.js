import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import axios from 'axios'
import * as cheerio from 'cheerio'
import minimist from 'minimist'

const mockLeads = [
  { name: 'Green Leaf Restaurant', email: 'hello@greenleaf.example', website: 'https://greenleaf.example' },
  { name: 'Dhaka Bites', email: 'contact@dhakabites.example', website: 'https://dhakabites.example' },
  { name: 'River View Cafe', email: 'info@riverview.example', website: 'https://riverview.example' },
]

function toCsvRow(values) {
  return values
    .map((v) => {
      const s = String(v ?? '')
      const needsQuotes = /[",\n\r]/.test(s)
      const escaped = s.replaceAll('"', '""')
      return needsQuotes ? `"${escaped}"` : escaped
    })
    .join(',')
}

function normalizeLead(lead) {
  return {
    name: (lead.name ?? '').toString().trim(),
    email: (lead.email ?? '').toString().trim(),
    website: (lead.website ?? '').toString().trim(),
  }
}

function parseHtmlToLeads(html) {
  const $ = cheerio.load(html)

  // Flexible selectors for quick demos.
  const cards = $('.card')
  if (cards.length) {
    return cards
      .map((_, el) => {
        const name = $(el).find('.name').first().text().trim()
        const website = $(el).find('.website').first().attr('href') || $(el).find('a').first().attr('href')
        const email = $(el).find('.email').first().text().trim()
        return normalizeLead({ name, email, website })
      })
      .get()
      .filter((l) => l.name || l.email || l.website)
  }

  // Fallback: try to read simple tables or lists.
  const rows = $('tr')
  if (rows.length) {
    const parsed = []
    rows.each((_, el) => {
      const cells = $(el).find('td')
      if (cells.length >= 3) {
        parsed.push(
          normalizeLead({
            name: $(cells[0]).text(),
            email: $(cells[1]).text(),
            website: $(cells[2]).text(),
          }),
        )
      }
    })
    return parsed.filter((l) => l.name || l.email || l.website)
  }

  return []
}

async function loadLeads({ source }) {
  if (!source || source === 'mock') return mockLeads.map(normalizeLead)

  if (source === 'sample') {
    const samplePath = path.join(process.cwd(), 'sample.html')
    const html = await fs.readFile(samplePath, 'utf8')
    const leads = parseHtmlToLeads(html)
    return leads.length ? leads : mockLeads.map(normalizeLead)
  }

  if (source.startsWith('file:')) {
    const filePath = source.slice('file:'.length)
    const html = await fs.readFile(filePath, 'utf8')
    const leads = parseHtmlToLeads(html)
    return leads.length ? leads : mockLeads.map(normalizeLead)
  }

  if (source.startsWith('url:')) {
    const url = source.slice('url:'.length)
    const res = await axios.get(url, {
      timeout: 15000,
      headers: { 'User-Agent': 'lead-generator-cli/0.1' },
    })
    const leads = parseHtmlToLeads(res.data)
    return leads.length ? leads : mockLeads.map(normalizeLead)
  }

  return mockLeads.map(normalizeLead)
}

function printTable(leads) {
  const rows = leads.map((l) => ({ Name: l.name, Email: l.email, Website: l.website }))
  console.table(rows)
}

async function main() {
  const args = minimist(process.argv.slice(2))
  const keyword = (args.keyword || args.k || '').toString().trim()
  const out = (args.out || args.o || 'leads.csv').toString()
  const source = (args.source || args.s || 'mock').toString()

  if (!keyword) {
    console.log('Enter keyword: example: "restaurants in dhaka"')
    console.log('Usage: node src/index.js --keyword "restaurants in dhaka" [--out leads.csv] [--source mock|sample|file:PATH|url:URL]')
    process.exitCode = 1
    return
  }

  const leads = await loadLeads({ source })

  console.log(`Keyword: ${keyword}`)
  printTable(leads)

  const csv = [toCsvRow(['Name', 'Email', 'Website']), ...leads.map((l) => toCsvRow([l.name, l.email, l.website]))].join('\n')
  await fs.writeFile(out, csv, 'utf8')

  console.log(`Saved CSV: ${out}`)
}

main().catch((err) => {
  console.error('Lead generator failed:', err?.message || err)
  process.exitCode = 1
})
