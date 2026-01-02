# MERN Contact Management App

A simple **Contact Management Web App** built using the **MERN stack**. This project demonstrates **full-stack development** fundamentals, including React.js frontend, Node.js + Express.js backend, and MongoDB database integration. The app allows users to submit contact forms and view a list of submitted contacts in real-time.

---

## 🌟 Features

- **Contact Form**
  - Fields: Name (required), Email (valid), Phone (required), Message (optional)
  - Client-side validation with error messages
  - Submit button disabled if form is invalid
- **Backend API**
  - `POST /api/contacts` → Save a new contact
  - `GET /api/contacts` → Fetch all contacts
- **Database**
  - MongoDB stores all submitted contacts
  - Schema includes Name, Email, Phone, Message, Date
- **Display Contacts**
  - Real-time display of submitted contacts in a table/list
- **Responsive UI**
  - Clean, mobile-friendly layout with Tailwind CSS
- **Optional / Bonus Features**
  - Delete contact
  - Success messages
  - Reusable components
  - Basic sorting

---

## 💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Tailwind CSS, Axios |
| Backend | Node.js, Express.js, Cors, dotenv |
| Database | MongoDB Atlas (Cloud) |
| Deployment | Vercel (Frontend), Render (Backend) |

---
