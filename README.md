# AI Chatbot Assistant Using LLMs and RAG

## Overview
An AI-powered chatbot assistant built using React, FastAPI, LangChain, and Gemini/OpenAI APIs.

## Features
- AI Chatbot
- JWT Authentication
- Resume ATS Analyzer
- PDF Question Answering
- Chat History
- Responsive UI

## Tech Stack
- React.js
- FastAPI
- LangChain
- MongoDB
- Gemini/OpenAI APIs

## Installation

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Environment Variables
```env
OPENAI_API_KEY=
GEMINI_API_KEY=
MONGO_URI=
JWT_SECRET=
```

## Deployment
- Frontend: Vercel
- Backend: Render/Railway
