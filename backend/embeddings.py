# embeddings.py

import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


class EmbeddingModel:
    def embed_text(self, text: str):
        response = genai.embed_content(
            model="models/embedding-001",
            content=text
        )
        return response["embedding"]

    def embed_batch(self, texts: list[str]):
        return [self.embed_text(t) for t in texts]


# Singleton instance
embedding_instance = EmbeddingModel()