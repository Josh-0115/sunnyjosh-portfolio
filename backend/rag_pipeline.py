# rag_pipeline.py

import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


def load_resume():
    with open("resume_data.txt", "r", encoding="utf-8") as f:
        return f.read()


def generate_answer(query):
    context = load_resume()

    prompt = f"""
You are an AI assistant for Sunny Josh's portfolio.

Answer the question based ONLY on the resume below.

Resume:
{context}

Question:
{query}

Answer:
"""

    model = genai.GenerativeModel("models/gemini-2.5-flash")
    response = model.generate_content(prompt)

    return getattr(response, "text", "No response")