
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def home():
    return {"message": "AI Chatbot Backend Running"}

@app.post("/chat")
def chat(req: ChatRequest):
    user_message = req.message

    # Placeholder AI response
    response = f"AI Response to: {user_message}"

    return {
        "user_message": user_message,
        "ai_response": response
    }

@app.get("/health")
def health():
    return {"status": "healthy"}
