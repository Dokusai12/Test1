# Learnr Clone – Driving Instructor Booking Platform

This project is a full-stack web application inspired by [Learnr](https://www.mylearnr.co.uk/). It enables students to search for driving instructors, view instructor profiles, request bookings, and leave reviews, while instructors can manage their profiles, availability, and bookings. Includes an admin panel for moderation and analytics.

## Tech Stack

- **Frontend:** Next.js (React) + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT-based login (can be swapped for Firebase Auth)
- **Calendar Management:** FullCalendar (frontend)
- **Deployment:** Vercel/Netlify (frontend), Render/Railway (backend)

---

## Monorepo Structure

```
/
├── frontend/            # Next.js + Tailwind CSS
└── backend/             # Node.js + Express + MongoDB
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Features

### Students
- Account sign-up/login
- Search instructors by location & transmission type
- View instructor profiles, pricing, calendar & reviews
- Book lessons, track status, leave reviews

### Instructors
- Account sign-up/login
- Create/edit profile (bio, car, calendar, pricing)
- Manage bookings, respond to requests
- View student reviews

### Admin
- Approve/ban instructors
- View all bookings
- Basic analytics

---

## Environment Variables

### Backend

- `MONGODB_URI` – MongoDB connection string
- `JWT_SECRET` – Secret for signing JWT tokens

### Frontend

- `NEXT_PUBLIC_API_URL` – Backend API endpoint

---

## License

MIT