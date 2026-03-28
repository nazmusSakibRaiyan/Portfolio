# Emergency SOS Alert System

## Overview
A real-time emergency response platform designed to broadcast distress signals and notify predefined contacts instantly.

## Features
- OTP-based authentication with JWT session management
- Real-time alert broadcasting using Socket.IO
- Contact management system for emergency notifications
- Email-based alert delivery using Nodemailer
- User blacklist and moderation controls

## Tech Stack
- Backend: Node.js, Express.js
- Frontend: (N/A for this repo folder — see portfolio project write-up)
- Database: MongoDB

## Architecture
- RESTful API with modular routing
- Auth flow: OTP verification → JWT session
- Real-time channel: Socket.IO for instant alert propagation
- Notifications: Nodemailer for email delivery
- Data layer: MongoDB collections for users, contacts, alerts, and moderation

## Setup Instructions

1. Clone the repo
2. Install dependencies:
   npm install

3. Run the server:
   npm run dev

## API Endpoints (if applicable)
- POST /api/auth/login
- GET /api/user

## Screenshots
(Add images here)

## Future Improvements
- Add X feature
- Improve scalability

## Author
Nazmus Sakib Raiyan
