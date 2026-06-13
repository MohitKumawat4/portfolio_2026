# Mini Projects Showcase

A collection of micro-apps and tools built to solve real user problems. Each project is designed to be functional, deployable, and demonstrates modern development skills.

---

## Project Catalog

### Category: Quick Utilities (Weekend Builds)

#### 1. YouTube Playlist Duration Calculator
- **Problem**: Users can't easily see total watch time for courses/playlists
- **Solution**: Paste a playlist URL → get total duration with playback speed adjustments (1x, 1.25x, 1.5x, 2x)
- **Tech Stack**: Next.js, YouTube Data API, Tailwind CSS
- **Features**:
  - Paste any YouTube playlist URL
  - Calculate total duration instantly
  - Adjust for different playback speeds
  - Show individual video durations
  - Export summary as text
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 2. QR Code Generator with Analytics
- **Problem**: Enterprise QR tools are overkill; individuals need simple generation with basic tracking
- **Solution**: Generate QR codes with built-in scan tracking via smart redirects
- **Tech Stack**: Next.js, Vercel Edge Functions, Vercel KV/Postgres
- **Features**:
  - Generate QR codes instantly
  - Track scan counts and timestamps
  - Custom redirect URLs
  - Download in multiple formats (PNG, SVG)
  - Basic analytics dashboard
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 3. AI Commit Message Generator
- **Problem**: Writing good commit messages following conventional commit standards is tedious
- **Solution**: CLI/Web tool that analyzes git diff and suggests properly formatted commit messages
- **Tech Stack**: Next.js, Claude API, Git diff parsing
- **Features**:
  - Analyze staged changes
  - Generate conventional commit messages
  - Support multiple commit styles
  - VS Code extension option
  - Copy to clipboard
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 4. Screenshot Beautifier
- **Problem**: Raw screenshots look unprofessional for social media, docs, and presentations
- **Solution**: Upload screenshot → add device frames, backgrounds, gradients, and shadows
- **Tech Stack**: Next.js, Canvas API, Tailwind CSS
- **Features**:
  - Multiple device frames (iPhone, MacBook, Browser)
  - Customizable backgrounds and gradients
  - Shadow and padding controls
  - Export for Twitter, LinkedIn, Product Hunt sizes
  - Drag and drop upload
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 5. Team Availability Dashboard
- **Problem**: Hybrid teams can't easily see who's working from home, in office, or on vacation
- **Solution**: Simple dashboard where team members mark their weekly status
- **Tech Stack**: Next.js, Supabase, Tailwind CSS
- **Features**:
  - Weekly status board
  - WFH / Office / OOO indicators
  - Team overview at a glance
  - Slack integration (optional)
  - Calendar sync
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

### Category: Full-Stack Portfolio Pieces

#### 6. Personal CRM for Freelancers
- **Problem**: Enterprise CRMs like Salesforce are overkill; freelancers need simple contact tracking
- **Solution**: Lightweight contact tracker with interaction history and follow-up reminders
- **Tech Stack**: Next.js, Supabase, Tailwind CSS, Resend
- **Features**:
  - Contact management with tags
  - Interaction history timeline
  - Follow-up reminders via email
  - Notes and relationship scoring
  - Import from CSV/LinkedIn
- **Validation**: mogulnetworking.com ~$650/mo
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 7. Receipt Scanner to Bookkeeping
- **Problem**: Physical receipts pile up; manual entry into accounting software is tedious
- **Solution**: Mobile-friendly app that scans receipts via OCR/AI and exports structured data
- **Tech Stack**: Next.js, Claude Vision API, Supabase, PWA
- **Features**:
  - Camera capture or image upload
  - AI-powered data extraction
  - Categorization and tagging
  - Export to CSV, JSON, or accounting formats
  - Monthly expense summaries
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 8. Tech Stack Detector CLI & Web
- **Problem**: Developers want to know what technologies a website uses without paid tools
- **Solution**: Open-source tool that identifies frameworks, CDNs, analytics, and CMS from any URL
- **Tech Stack**: Next.js, Puppeteer/Playwright, Pattern matching
- **Features**:
  - Detect 100+ technologies
  - CLI and web interface
  - JSON/Markdown output
  - Batch URL scanning
  - API endpoint for integrations
- **Validation**: Wappalyzer makes $85K/mo
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 9. DNS Change Audit Trail
- **Problem**: IT consultants struggle when clients accidentally break DNS records
- **Solution**: Monitor DNS records for changes, keep version history, alert on unexpected changes
- **Tech Stack**: Next.js, Vercel Cron, Supabase, Resend
- **Features**:
  - Add domains to monitor
  - Automatic daily/hourly checks
  - Full change history with diffs
  - Email alerts on changes
  - One-click comparison
- **Validation**: zonewatcher.com ~$500/mo
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 10. Contract/PDF Plain-Language Summarizer
- **Problem**: Legal contracts are dense and intimidating for non-lawyers
- **Solution**: Upload a PDF → get bullet-point summary in plain language with key terms highlighted
- **Tech Stack**: Next.js, Claude API, PDF.js
- **Features**:
  - PDF upload and parsing
  - AI-powered summarization
  - Key terms extraction
  - Risk flagging
  - Export summary as PDF
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 11. Multi-Currency Budget Tracker
- **Problem**: Digital nomads and travelers struggle to track expenses across multiple currencies
- **Solution**: Simple budgeting app with automatic currency conversion and category totals
- **Tech Stack**: Next.js, Exchange Rate API, Supabase, PWA
- **Features**:
  - Add expenses in any currency
  - Auto-convert to home currency
  - Category-based tracking
  - Monthly/weekly summaries
  - Offline support (PWA)
- **Validation**: Lunch Money at $34K MRR
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 12. Send-to-Kindle Article Collector
- **Problem**: People want to reduce screen time but still consume long-form content
- **Solution**: Browser extension/web app that sends articles to Kindle, stripped of ads
- **Tech Stack**: Next.js, Readability.js, Kindle Email API
- **Features**:
  - Bookmarklet or browser extension
  - Clean article extraction
  - Queue multiple articles
  - Format for e-ink reading
  - Send via Kindle email
- **Validation**: ktool.io ~$620/mo MRR
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

### Category: AI-Powered Tools

#### 13. AI Filler Word Remover
- **Problem**: Podcasters and creators spend hours manually editing "um", "uh", "like" from recordings
- **Solution**: Upload audio → automatically detect and remove filler words while preserving flow
- **Tech Stack**: Next.js, Whisper API, FFmpeg, Web Audio API
- **Features**:
  - Audio/video file upload
  - AI filler word detection
  - Preview before/after
  - Adjustable sensitivity
  - Download cleaned file
- **Validation**: HN "erm" tool got 169 points
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 14. Screenshot-to-Knowledge-Base
- **Problem**: Saved screenshots (recipes, tips, product info) become unsearchable digital clutter
- **Solution**: OCR screenshots, extract structured data, make everything searchable with AI
- **Tech Stack**: Next.js, Claude Vision, Pinecone/Supabase pgvector
- **Features**:
  - Bulk screenshot upload
  - AI-powered text extraction
  - Natural language search
  - Auto-categorization
  - Tag and organize
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 15. AI API Cost Guardian
- **Problem**: Developers accidentally run up huge API bills with AI coding agents
- **Solution**: Browser extension/dashboard that monitors API calls, sets limits, and alerts
- **Tech Stack**: Next.js, Browser Extension API, Supabase
- **Features**:
  - Real-time cost tracking
  - Budget limits and alerts
  - Usage analytics
  - Per-project tracking
  - Daily/weekly reports
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 16. Multi-Model AI Comparator
- **Problem**: Users want to compare Claude, GPT-4, Gemini responses without multiple tabs
- **Solution**: Single interface that sends prompts to multiple models and shows side-by-side results
- **Tech Stack**: Next.js, Multiple AI APIs, Vercel AI SDK
- **Features**:
  - Support for 5+ models
  - Side-by-side comparison
  - Response time tracking
  - Cost per query display
  - Save comparison history
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 17. Privacy-First Local AI Chat
- **Problem**: Users want ChatGPT-like assistance without sending sensitive data to cloud
- **Solution**: Desktop/web app that runs local LLMs with a polished interface
- **Tech Stack**: Next.js, Ollama, WebLLM, Electron (optional)
- **Features**:
  - Run Llama, Mistral locally
  - ChatGPT-like interface
  - Conversation history
  - Model switching
  - No data leaves device
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

### Category: B2B/Niche Tools

#### 18. Cookie Consent Auditor
- **Problem**: Developers struggle to verify GDPR/CCPA compliance implementation
- **Solution**: CLI/Web tool that scans URLs and reports on consent compliance
- **Tech Stack**: Next.js, Puppeteer, Compliance rule engine
- **Features**:
  - Scan any URL
  - Detect consent banners
  - List third-party trackers
  - Compliance checklist
  - PDF report generation
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 19. Documentation Freshness Checker
- **Problem**: README files and docs drift from actual code reality over time
- **Solution**: Tool that scans docs for code examples and flags outdated ones
- **Tech Stack**: Next.js, AST parsing, GitHub API
- **Features**:
  - Connect GitHub repos
  - Scan markdown for code blocks
  - Verify code still compiles
  - Flag API mismatches
  - Auto-create issues for fixes
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 20. Simple Booking Widget
- **Problem**: Small businesses have outdated websites with no online booking
- **Solution**: Embeddable booking widget for niche services (tutors, pet groomers, etc.)
- **Tech Stack**: Next.js, Supabase, Stripe, Embeddable iframe
- **Features**:
  - Easy embed code
  - Calendar availability
  - Email confirmations
  - Payment collection (optional)
  - Admin dashboard
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

#### 21. API Response Time Monitor
- **Problem**: Third-party API latency issues are hard to diagnose in production
- **Solution**: Lightweight service that monitors API endpoints and alerts on degradation
- **Tech Stack**: Next.js, Vercel Cron, Supabase, Resend
- **Features**:
  - Add endpoints to monitor
  - Configurable check intervals
  - Response time graphs
  - Downtime alerts
  - Status page generation
- **Status**: 🔲 Not Started
- **Live URL**: TBD
- **GitHub**: TBD

---

## Development Roadmap

### Phase 1: Quick Wins (Week 1-2)
- [ ] YouTube Playlist Duration Calculator
- [ ] QR Code Generator with Analytics
- [ ] Screenshot Beautifier

### Phase 2: Portfolio Builders (Week 3-4)
- [ ] Personal CRM for Freelancers
- [ ] Tech Stack Detector
- [ ] Multi-Currency Budget Tracker

### Phase 3: AI Showcase (Week 5-6)
- [ ] AI Commit Message Generator
- [ ] Contract/PDF Summarizer
- [ ] Screenshot-to-Knowledge-Base

### Phase 4: Advanced Tools (Week 7-8)
- [ ] AI Filler Word Remover
- [ ] Multi-Model AI Comparator
- [ ] API Response Time Monitor

---

## Tech Stack Overview

| Technology | Usage |
|------------|-------|
| **Next.js 15** | Primary framework for all projects |
| **Tailwind CSS** | Styling and UI components |
| **shadcn/ui** | Component library |
| **Supabase** | Database, Auth, Storage |
| **Vercel** | Hosting and serverless functions |
| **Claude API** | AI-powered features |
| **Vercel AI SDK** | AI integrations |

---

## Contributing

Each project is open source. Contributions welcome!

---

*Last Updated: June 13, 2026*
