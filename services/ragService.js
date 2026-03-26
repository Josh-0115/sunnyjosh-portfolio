// services/ragService.js

const API_URL = "http://127.0.0.1:8000/chat";

export const askRAG = async (question) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from backend");
    }

    const data = await response.json();

    return data.answer || "No response from AI.";
  } catch (error) {
    console.error("RAG Error:", error);
    return "⚠️ Server error. Please try again later.";
  }
};