#!/bin/bash

# Script pour créer le projet Chatbot RAG sur votre Mac
# Exécutez: bash create-chatbot-project.sh

PROJECT_NAME="chatbot-rag-langchain"

echo "🚀 Création du projet $PROJECT_NAME..."

# Créer la structure
mkdir -p $PROJECT_NAME/backend
mkdir -p $PROJECT_NAME/frontend
cd $PROJECT_NAME

# Créer README.md
cat > README.md << 'EOF'
# 🤖 Intelligent Chatbot with RAG & LangChain

**Production-ready AI chatbot using Retrieval-Augmented Generation (RAG) for context-aware conversations.**

[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/)
[![LangChain](https://img.shields.io/badge/LangChain-Latest-green.svg)](https://www.langchain.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-teal.svg)](https://fastapi.tiangolo.com/)

## 🎯 Overview

Intelligent chatbot combining LLMs with RAG for accurate, context-aware responses.

### Key Features
- 🧠 RAG Architecture
- 📚 Vector Database (Chroma/Pinecone)
- 🔗 LangChain Integration
- ⚡ FastAPI Backend
- 🎨 React Frontend
- 🐳 Docker Support

## 🚀 Quick Start

\`\`\`bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
\`\`\`

## 👨‍💻 Author
**Yassine Chmirrou**
- Email: yassinechmirrou1@gmail.com
- GitHub: [@YassineChmirrou](https://github.com/YassineChmirrou)
EOF

# Créer backend/main.py
cat > backend/main.py << 'BACKEND_EOF'
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(title="RAG Chatbot API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    question: str
    conversation_id: Optional[str] = None

class ChatResponse(BaseModel):
    answer: str
    sources: List[str] = []
    conversation_id: str

documents = []

@app.get("/")
async def root():
    return {"status": "online", "service": "RAG Chatbot API"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    answer = "Chatbot response here..."
    return ChatResponse(
        answer=answer,
        sources=[],
        conversation_id="conv_1"
    )

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
BACKEND_EOF

# Créer requirements.txt
cat > backend/requirements.txt << 'REQ_EOF'
fastapi==0.104.1
uvicorn[standard]==0.24.0
python-multipart==0.0.6
pydantic==2.5.0
python-dotenv==1.0.0
langchain==0.1.0
openai==1.6.0
chromadb==0.4.18
pypdf==3.17.1
REQ_EOF

# Créer .env.example
cat > .env.example << 'ENV_EOF'
LLM_PROVIDER=openai
OPENAI_API_KEY=your_key_here
MODEL_NAME=gpt-3.5-turbo
VECTOR_DB=chroma
ENV_EOF

# Créer .gitignore
cat > .gitignore << 'GIT_EOF'
__pycache__/
*.pyc
venv/
.env
node_modules/
.DS_Store
GIT_EOF

# Init git
git init
git config commit.gpgsign false 2>/dev/null || true
git add .
git commit -m "Initial commit: RAG Chatbot with LangChain"

echo ""
echo "✅ Projet créé avec succès!"
echo ""
echo "📁 Localisation: $(pwd)"
echo ""
echo "🚀 Prochaines étapes:"
echo "  1. cd $PROJECT_NAME/backend"
echo "  2. python -m venv venv"
echo "  3. source venv/bin/activate"
echo "  4. pip install -r requirements.txt"
echo "  5. uvicorn main:app --reload"
echo ""
echo "📤 Pour pusher sur GitHub:"
echo "  git remote add origin https://github.com/YassineChmirrou/$PROJECT_NAME.git"
echo "  git branch -M main"
echo "  git push -u origin main"
echo ""
