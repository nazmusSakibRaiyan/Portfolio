# Email Outreach Automation Tool

## Overview
A script-based system to send bulk, structured emails for outreach and communication.

## Features
- Reads emails from file
- Template-driven messaging
- Batch sending functionality

## Tech Stack
- Backend: Node.js
- Frontend: N/A
- Database: N/A

## Architecture
- Load environment variables for SMTP
- Read recipients from a text file
- Read email body from an HTML template
- Loop through recipients and send via Nodemailer

## Setup Instructions

1. Clone the repo
2. Install dependencies:
   npm install

3. Configure environment:
   Copy `.env.example` → `.env` and fill in SMTP values.

4. Run:
   npm run send

## API Endpoints (if applicable)
- (N/A)

## Screenshots
(Add images here)

## Future Improvements
- Add X feature
- Improve scalability

## Author
Nazmus Sakib Raiyan
