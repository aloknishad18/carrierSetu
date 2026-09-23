# CareerSetu (SIH26044) — Bridging Skills with Opportunities

> **Smart India Hackathon 2026 Project (SIH26044)**  
> **Tagline:** Bridging Skills with Opportunities. | **Hindi:** कौशल से अवसर तक।

CareerSetu is a modern Bharat career ecosystem that bridges students, academia, institutions, and industry through real-time skill mapping, skill-gap analysis, career roadmaps, resume intelligence, and role-based portal access.

---

## 🚀 Key Features

- **Public Marketing Website**: Interactive presentation storytelling, ecosystem metrics, and SIH 2026 project presentation.
- **Password Authentication System**: Secure login and registration with server-side password hashing (salted SHA-256) and session cookies.
- **Role-Based Portals**:
  - 🎓 **Student Portal**: Skill gap analysis, skill assessments, verified badges, career roadmaps, job opportunities, applications tracker, and digital portfolio.
  - 💼 **Industry & Recruiter Portal**: Posting verified roles, candidate discovery, and applicant pipeline tracking.
  - 🏫 **Academia & Faculty Portal**: Curriculum alignment, student progress tracking, and industry tie-ups.
  - 🏢 **Institution Admin Portal**: Campus readiness analytics and accreditation metrics.
  - 🏛️ **Platform Governance Portal**: Platform moderation, institution verification, and audit logs.
- **SIH26044 Demo Access**: Quick-fill demo credentials for Student, Industry, Academia, Institution, and Governance stakeholders.
- **Theme & Language Engine**:
  - Full application-wide support for **Light**, **Dark**, and **System** themes.
  - Bilingual support (**English** / **हिन्दी**).
- **Settings & Support Center**: Dedicated account settings management, FAQ knowledgebase, and support desk.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, React Router DOM, Lucide React Icons, Vanilla CSS Design System.
- **Backend API**: Express.js, Cookie Parser, Cors, Zod schema validation.
- **Database Layer**: Lowdb / JSON server-side persistent database with salted SHA-256 password security.
- **Deployment**: Vercel-ready with serverless function rewrite integration (`api/index.js` & `vercel.json`).

---

## 💻 Local Development Setup

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aloknishad18/carrierSetu.git
   cd carrierSetu
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Express backend and Vite frontend**:
   ```bash
   # Terminal 1: Start Express API server (Port 3001)
   node server/index.js

   # Terminal 2: Start Vite Dev Server (Port 5173)
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## ⚡ SIH Demo Credentials

For quick evaluation during SIH demonstration:

| Role | Email | Password | Dashboard Route |
| :--- | :--- | :--- | :--- |
| **Student** | `student@careersetuu.demo` | `Student@123` | `/portal/student/dashboard` |
| **Industry** | `industry@careersetuu.demo` | `Industry@123` | `/portal/industry/dashboard` |
| **Academia** | `academia@careersetuu.demo` | `Academia@123` | `/portal/academia/dashboard` |
| **Institution** | `institution@careersetuu.demo` | `Institution@123` | `/portal/institution/dashboard` |
| **Governance** | `governance@careersetuu.demo` | `Governance@123` | `/portal/governance/dashboard` |

---

## 📦 Build for Production

```bash
npm run build
```

The output will be generated in the `dist/` directory.

---

## 📜 License

Project developed for Smart India Hackathon 2026 (SIH26044). All rights reserved.
