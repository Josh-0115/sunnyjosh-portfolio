from fastapi import FastAPI
from pydantic import BaseModel
from rag_pipeline import setup_rag, generate_answer

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize RAG once
setup_rag()

class Query(BaseModel):
    question: str

@app.post("/chat")
def chat(query: Query):
    try:
        answer = generate_answer(query.question)
        return {"answer": answer}
    except Exception as e:
        print("ERROR:", str(e))  # 👈 shows real error in terminal
        return {"error": str(e)}