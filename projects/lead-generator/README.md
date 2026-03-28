# Automated Lead Generation Tool

## Overview
A lightweight CLI tool designed to collect business leads based on keywords and reduce manual research time.

## Features
- Keyword-based data extraction
- Structured output (emails, websites, contacts)
- Data cleaning and formatting
- Save results as CSV

## Tech Stack
- Backend: Node.js
- Frontend: N/A
- Database: N/A

## Architecture
- CLI parses input keyword + options
- Data source can be:
  - mock dataset (fast)
  - local HTML file parsing (cheerio)
  - URL fetch + parse (axios + cheerio)
- Normalization pipeline → CSV writer

## Setup Instructions

1. Clone the repo
2. Install dependencies:
   npm install

3. Run the tool:
   npm run leads -- --keyword "restaurants in dhaka" --out leads.csv

## Usage

- Mock dataset (default):
  node src/index.js --keyword "restaurants in dhaka"

- Parse the included sample HTML:
  node src/index.js --keyword "restaurants in dhaka" --source sample

- Parse a local HTML file:
  node src/index.js --keyword "restaurants in dhaka" --source "file:./sample.html"

- Fetch + parse a URL:
  node src/index.js --keyword "restaurants in dhaka" --source "url:https://example.com"

## Output
Console table + a CSV file.

## Screenshots
(Add images here)

## Future Improvements
- Add X feature
- Improve scalability

## Author
Nazmus Sakib Raiyan
