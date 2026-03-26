from fastapi import FastAPI
from pydantic import BaseModel
from rag_pipeline import generate_answer

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str


@app.post("/chat")
def chat(query: Query):
    answer = generate_answer(query.question)
    return {"answer": answer}