# CareBridge Khulna

**An AI-Powered Healthcare Assistance Platform for Elderly People**

CSE 4104: Software Development III | Team **CSE4104-7B-T01** | Section **7B**

---

## Project Description

Many elderly people in Khulna cannot go to the doctor alone, and their children often live in other cities or abroad. CareBridge Khulna is a web application that helps families take care of their parents' medical needs from anywhere.

Families can find the right specialist doctor, book a verified university student to take the patient to the hospital and back home, and get updates at every step of the visit. AI helps to suggest the right specialist from symptoms, explain prescriptions in simple Bangla, and create a clear visit report for the family.

## Team Information

| Name | Student ID | Role |
|---|---|---|
| M Sajjad Hossain (Team Leader) | 11230121108 | Database, AI Integration, Documentation |
| Nahid Hasan Sabbir | 11250122021 | Backend, Authentication |
| Md Sohanujjaman Sheikh | 11230321265 | Frontend, UI/UX Design |

## Proposed Features

**For Family Members**
- Sign up and log in
- Add elderly parent's profile
- Search doctors by specialty and area
- AI Specialist Finder (describe the problem in Bangla or English)
- Bangla voice search
- Pin the patient's home on a map
- Book hospital assistance
- See visit status step by step
- Read AI prescription summary and visit report
- Rate and review the student assistant

**For Student Assistants**
- Register with university ID and NID
- Accept assigned visits
- Update visit status step by step
- Upload prescription photo and short notes

**For Admin**
- Verify student assistants
- Manage doctor information
- Assign students to bookings
- Monitor bookings and reviews

**AI Features**
- AI Specialist Finder
- AI Prescription Summary
- AI Visit Report
- Emergency Alert (shows 999 for emergency signs)

## Technology Stack

| Part | Technology |
|---|---|
| Frontend | React.js + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | PostgreSQL |
| Authentication | JWT + bcrypt |
| AI Integration | Gemini API |
| Voice Assistant | Web Speech API |
| Image Storage | Cloudinary |
| Map | Leaflet + OpenStreetMap, OpenRouteService |
| Deployment | Vercel, Render, Supabase |
| Tools | GitHub, Figma, Postman, Draw.io |

## Project Structure

```
carebridge-khulna/
├── frontend/          React + Tailwind CSS app
│   └── src/
├── backend/           Node.js + Express.js API
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── middleware/
│       └── services/
└── docs/              Proposal and other documents
```

## Getting Started

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**Backend**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The API health check runs at `http://localhost:5000/api/health`.

## Deployment Link

Coming soon.

## Screenshots

Coming soon.
