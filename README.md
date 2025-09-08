<div align="center">
  <img src="https://raw.githubusercontent.com/naman254/workhub/main/frontend/public/logo.png" alt="WorkHub Logo" width="120" />
  <h1>WorkHub</h1>
  <p>A modern, real-time collaboration platform with chat and video calls, built with the MERN stack, Stream, and Clerk.</p>
  
  <p>
    <a href="https://work-hub-frontend.vercel.app/" target="_blank">
      <strong>🚀 View Live Demo</strong>
    </a>
  </p>
</div>

---

## ✨ About The Project
WorkHub is a full-stack collaboration platform inspired by **Slack**.  
It offers **real-time chat, video calls, and direct messaging**, with secure authentication powered by **Clerk**.  
Users can create **public or private channels**, invite members, and pin important messages.

The app follows a **decoupled architecture**:
- **Frontend**: React  
- **Backend**: Node.js/Express.js  
- **Asynchronous tasks**: Inngest  

---

## 🛠️ Tech Stack
**Frontend:** React, Vite, Tailwind CSS, Stream (Chat & Video), Clerk, React Query, Axios  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, Stream, Clerk, Inngest  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)  
- npm  
- MongoDB database URI  

### Installation & Setup

Clone the repository:
```bash
git clone https://github.com/your-username/WorkHub.git
cd WorkHub
```

### Backend Setup
```
cd backend
npm install
cp .env.example .env
```
Then, fill in your credentials inside backend/.env.

### Frontend Setup
```
cd ../frontend
npm install
cp .env.local.example .env.local
```
Then, fill in your credentials inside frontend/.env.local.

---
## Running the Application
Start the backend server:
```
# From the /backend directory
npm run dev
```
Start the frontend server (in a new terminal):
```
# From the /frontend directory
npm run dev
```

---
## 🌐 Deployment
This application is deployed on Vercel.

---
## 📄 License
This project is licensed under the [MIT License](./LICENSE).




