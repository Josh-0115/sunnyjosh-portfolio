# embeddings.py

from sentence_transformers import SentenceTransformer

class EmbeddingModel:
    def __init__(self):
        # Lightweight + fast model
        self.model = SentenceTransformer('all-MiniLM-L6-v2')

    def embed_text(self, text: str):
        return self.model.encode(text).tolist()

    def embed_batch(self, texts: list[str]):
        return self.model.encode(texts).tolist()


# Singleton instance (reuse across app)
embedding_instance = EmbeddingModel()