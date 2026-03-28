import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config({ path: path.join(process.cwd(), '.env') })

function getRequiredEnv(name) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

function parseBool(v) {
  if (v === undefined) return false
  return String(v).toLowerCase() === 'true'
}

async function loadRecipients() {
  const raw = await fs.readFile(path.join(process.cwd(), 'emails.txt'), 'utf8')
  return raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
}

async function main() {
  const host = getRequiredEnv('SMTP_HOST')
  const port = Number(getRequiredEnv('SMTP_PORT'))
  const secure = parseBool(process.env.SMTP_SECURE)
  const user = getRequiredEnv('SMTP_USER')
  const pass = getRequiredEnv('SMTP_PASS')

  const from = getRequiredEnv('MAIL_FROM')
  const subject = process.env.MAIL_SUBJECT || 'Hello'

  const recipients = await loadRecipients()
  const html = await fs.readFile(path.join(process.cwd(), 'src', 'template.html'), 'utf8')

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  console.log(`Recipients: ${recipients.length}`)
  for (const to of recipients) {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    })
    console.log(`Sent to ${to}: ${info.messageId}`)
  }
}

main().catch((err) => {
  console.error('Email tool failed:', err?.message || err)
  process.exitCode = 1
})
