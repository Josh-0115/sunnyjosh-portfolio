# vector_store.py

import chromadb
from chromadb.config import Settings

from embeddings import embedding_instance


class VectorStore:
    def __init__(self):
        self.client = chromadb.Client(
            Settings(persist_directory="./db")
        )

        self.collection = self.client.get_or_create_collection(
            name="resume_collection"
        )

    def add_documents(self, documents: list[str]):
        embeddings = embedding_instance.embed_batch(documents)

        ids = [str(i) for i in range(len(documents))]

        self.collection.add(
            documents=documents,
            embeddings=embeddings,
            ids=ids
        )

    def similarity_search(self, query: str, k: int = 10):
        query_embedding = embedding_instance.embed_text(query)

        results = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=k
        )

        return results['documents'][0]

    def count(self):
        return self.collection.count()


# Singleton instance
vector_store = VectorStore()