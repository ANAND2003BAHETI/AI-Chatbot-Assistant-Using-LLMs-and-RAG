from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Chatbot Assistant API Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}
