# rag_pipeline.py

import os
from dotenv import load_dotenv
import google.generativeai as genai

from vector_store import vector_store

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


def load_resume():
    with open("resume_data.txt", "r", encoding="utf-8") as f:
        return f.read()


def chunk_text(text, chunk_size=500, overlap=100):
    return [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]


def setup_rag():
    if  vector_store.count() == 0:
        return

    text = load_resume()
    chunks = chunk_text(text)

    vector_store.add_documents(chunks)
print("Documents in DB:", vector_store.count())


def retrieve_context(query):
    if "project" in query.lower():
        query += " projects work applications built"
    
    docs = vector_store.similarity_search(query)
    return " ".join(docs)


def generate_answer(query):
    context = retrieve_context(query)

    print("\n--- DEBUG ---")
    print("QUERY:", query)
    print("CONTEXT:", context)
    print("-------------\n")

    prompt = f"""
You are an AI assistant for Sunny Josh's portfolio.

Answer ONLY from the context below.
If answer is not in context, say "I don't have that information."

Context:
{context}

Question:
{query}
"""

    model = genai.GenerativeModel("models/gemini-2.5-flash")
    response = model.generate_content(prompt)

    return response.text