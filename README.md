# 🚀 Sunny Josh – AI Portfolio (RAG-powered)

An interactive **AI-powered portfolio website** built using **React + FastAPI**, where visitors can ask questions about my resume and get intelligent answers in real time.

---

## 🌟 Features

* 🤖 AI Chat Assistant (Gemini-powered)
* 📄 Answers based on my resume
* ⚡ FastAPI backend for secure AI handling
* ⚛️ React (Vite) frontend
* 🌐 Fully deployed (Vercel + Render)
* 🎨 Dark/Light theme support

---

## 🧠 How It Works

1. User asks a question in the chat UI
2. Frontend sends request to FastAPI backend
3. Backend injects resume as context
4. Gemini AI generates a relevant answer
5. Response is displayed in UI

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* JavaScript

### Backend

* FastAPI
* Uvicorn
* Google Gemini API

---

## 📁 Project Structure

```
sunnyjosh/
├── frontend/
│   ├── components/
│   ├── services/
│   └── App.jsx
│
├── backend/
│   ├── main.py
│   ├── rag_pipeline.py
│   ├── resume_data.txt
│   └── requirements.txt
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/sunnyjosh-portfolio.git
cd sunnyjosh-portfolio
```

---

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create `.env` file:

```
GOOGLE_API_KEY=your_api_key_here
```

Run server:

```bash
python -m uvicorn main:app --reload
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

### Backend (Render)

* Runtime: Python
* Start Command:

```bash
uvicorn main:app --host 0.0.0.0 --port 10000
```

### Frontend (Vercel)

* Build Command:

```bash
npm run build
```

* Output Directory:

```
dist
```

---

## 🔐 Environment Variables

Backend `.env`:

```
GOOGLE_API_KEY=your_api_key
```

---

## 💡 Key Highlights

* Built a **full-stack AI application**
* Implemented **context-based response system**
* Migrated AI logic from frontend → backend (security + scalability)
* Optimized system by removing heavy ML dependencies

---

## 📌 Future Improvements

* Streaming responses (typing effect)
* Chat memory (multi-turn conversation)
* Better formatting (Markdown support)
* Custom domain

---

## 👨‍💻 Author

**Sunny Josh**

* GitHub: https://github.com/Josh-0115
* Portfolio: https://sunnyjosh-portfolio.vercel.app

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
