export const projects = [
  {
    slug: 'sos-alert-system',
    title: 'Emergency SOS Alert System',
    subtitle: 'Full-Stack • Real-time • Socket.IO',
    summary:
      'A real-time emergency response platform designed to broadcast distress signals and notify predefined contacts instantly.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'OTP', 'Socket.IO', 'Nodemailer'],
    role: 'Full-Stack Developer',
    features: [
      'OTP-based authentication with JWT session management',
      'Real-time alert broadcasting using Socket.IO',
      'Contact management system for emergency notifications',
      'Email-based alert delivery using Nodemailer',
      'User blacklist and moderation controls',
    ],
    highlights: [
      'Designed RESTful API architecture with modular routing',
      'Implemented secure authentication and session handling',
      'Integrated real-time communication layer for instant updates',
      'Structured MongoDB schema for scalability and flexibility',
    ],
    outcome:
      'Built a production-style backend system simulating real-world emergency communication workflows, focusing on reliability and responsiveness.',
    repoPathHint: 'projects/sos-system',
  },
  {
    slug: 'real-time-chat-go',
    title: 'Real-Time Chat Application',
    subtitle: 'Go • WebSocket • Concurrency',
    summary:
      'A scalable real-time messaging system supporting multiple users and persistent communication.',
    tags: ['Go', 'WebSocket', 'Concurrency', 'Auth', 'Persistence'],
    role: 'Backend Developer',
    features: [
      'WebSocket-based real-time messaging',
      'Multi-room chat architecture',
      'User authentication and session handling',
      'Message persistence for chat history',
    ],
    highlights: [
      'Implemented concurrent connection handling using goroutines',
      'Designed event-driven messaging pipeline',
      'Optimized message broadcasting for multiple clients',
    ],
    outcome:
      'Demonstrates strong understanding of real-time systems, concurrency, and scalable backend architecture.',
    repoPathHint: 'projects/chat-app',
  },
  {
    slug: 'lead-generation-cli',
    title: 'Automated Lead Generation Tool',
    subtitle: 'CLI • Parsing • CSV output',
    summary:
      'A lightweight CLI tool designed to collect business leads based on keywords and reduce manual research time.',
    tags: ['Node.js', 'CLI', 'Parsing', 'CSV'],
    role: 'Developer',
    features: [
      'Keyword-based data extraction',
      'Structured output (emails, websites, contacts)',
      'Data cleaning and formatting',
      'CSV export for outreach workflows',
    ],
    highlights: [
      'Built reusable parsing and data processing pipeline',
      'Kept implementation fast, simple, and practical',
    ],
    outcome:
      'Automates repetitive research tasks and improves productivity for outreach workflows.',
    repoPathHint: 'projects/lead-generator',
  },
  {
    slug: 'email-outreach-automation',
    title: 'Email Outreach Automation Tool',
    subtitle: 'Nodemailer • Templates • Batch send',
    summary:
      'A script-based system to send bulk, structured emails for outreach and communication.',
    tags: ['Node.js', 'Nodemailer', 'SMTP', 'Templates'],
    role: 'Developer',
    features: [
      'Reads recipients from file',
      'Template-driven messaging',
      'Batch sending functionality',
      'Async-safe sending flow',
    ],
    highlights: [
      'Integrated SMTP delivery with Nodemailer',
      'Designed reusable message templates',
      'Handled asynchronous sending operations cleanly',
    ],
    outcome:
      'Simulates real-world outreach systems used in sales and marketing pipelines.',
    repoPathHint: 'projects/email-tool',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
