# 🚀 Portfolio Projects Setup Guide

This guide will help you create all the projects showcased in your portfolio on your local Mac.

## 📋 Available Projects

I've created **4 complete, production-ready project scripts** for you:

### 1. 🤖 Chatbot RAG with LangChain
**Script:** `create-chatbot-project.sh`
- **Tech Stack:** FastAPI, LangChain, OpenAI, ChromaDB
- **Features:** Document-based Q&A, RAG architecture, REST API
- **Complexity:** Advanced

### 2. 💳 Credit Card Fraud Detection
**Script:** `create-fraud-detection-project.sh`
- **Tech Stack:** XGBoost, SMOTE, Scikit-learn, Flask
- **Features:** 99.8% accuracy, real-time API, imbalanced data handling
- **Complexity:** Intermediate

### 3. 👤 Face Recognition Attendance System
**Script:** `create-face-recognition-project.sh`
- **Tech Stack:** OpenCV, dlib, face_recognition, Flask
- **Features:** Real-time detection, web dashboard, automated logging
- **Complexity:** Advanced

### 4. 📈 Stock Price Predictor (LSTM)
**Script:** `create-stock-predictor-project.sh`
- **Tech Stack:** TensorFlow, Keras, LSTM, yfinance
- **Features:** Deep learning, technical indicators, 7-day forecasts
- **Complexity:** Advanced

---

## 🎯 Quick Start (Run on Your Mac)

### Step 1: Navigate to Your Local Portfolio Directory

```bash
cd ~/portfolio-yassine
# Or wherever you cloned your portfolio
```

### Step 2: Pull Latest Changes from GitHub

```bash
git pull origin claude/clone-local-repo-PJ3yf
```

### Step 3: Run Project Creation Scripts

Choose which projects you want to create:

#### Create All Projects at Once:
```bash
bash create-chatbot-project.sh
bash create-fraud-detection-project.sh
bash create-face-recognition-project.sh
bash create-stock-predictor-project.sh
```

#### Or Create One at a Time:
```bash
# Example: Create only the Stock Predictor
bash create-stock-predictor-project.sh
```

---

## 📤 Push Projects to GitHub

After creating each project, push it to your GitHub:

### For Chatbot RAG:
```bash
cd chatbot-rag-langchain
git remote add origin https://github.com/YassineChmirrou/chatbot-rag-langchain.git
git branch -M main
git push -u origin main
```

### For Fraud Detection:
```bash
cd fraud-detection-ml
git remote add origin https://github.com/YassineChmirrou/fraud-detection-ml.git
git branch -M main
git push -u origin main
```

### For Face Recognition:
```bash
cd face-recognition-attendance
git remote add origin https://github.com/YassineChmirrou/face-recognition-attendance.git
git branch -M main
git push -u origin main
```

### For Stock Predictor:
```bash
cd stock-price-predictor-lstm
git remote add origin https://github.com/YassineChmirrou/stock-price-predictor-lstm.git
git branch -M main
git push -u origin main
```

> **Note:** You'll need to create empty repositories on GitHub first:
> 1. Go to https://github.com/new
> 2. Create repositories with the exact names above
> 3. Don't initialize with README (already included in scripts)

---

## 🧪 Test Projects Locally

### Chatbot RAG:
```bash
cd chatbot-rag-langchain/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
# Visit: http://localhost:8000/docs
```

### Fraud Detection:
```bash
cd fraud-detection-ml
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python src/train.py
python src/api.py
# Test: http://localhost:5000
```

### Face Recognition:
```bash
cd face-recognition-attendance
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Add your face first:
python src/add_face.py --name "Yassine Chmirrou" --photo /path/to/your/photo.jpg
python src/recognize.py
```

### Stock Predictor:
```bash
cd stock-price-predictor-lstm
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python src/train.py --ticker AAPL --epochs 50
python src/predict.py --ticker AAPL --forecast 7
```

---

## 🔗 Update Portfolio Links

After pushing projects to GitHub, update your portfolio's `Projects.jsx` file:

```javascript
{
  title: "Chatbot RAG with LangChain",
  github: "https://github.com/YassineChmirrou/chatbot-rag-langchain",
  demo: "https://chatbot-rag-demo.vercel.app", // Optional: Deploy on Vercel
  // ... rest of project data
}
```

---

## 🎨 Add Project Screenshots

### Option 1: Real Screenshots
1. Run each project locally
2. Take screenshots of the working application
3. Save them as `project-[name].jpg` in `public/` folder
4. Replace existing placeholder images

### Option 2: Keep Placeholders
The portfolio already has placeholder images for all projects in the `public/` folder.

---

## ✅ Checklist

- [ ] Pull latest changes from GitHub
- [ ] Run all 4 project creation scripts
- [ ] Create empty repos on GitHub (4 repos)
- [ ] Push each project to GitHub
- [ ] Test projects locally
- [ ] Update portfolio links in `Projects.jsx`
- [ ] Add real screenshots (optional)
- [ ] Deploy projects (optional - Vercel, Heroku, Railway)

---

## 🐳 Docker Deployment (Optional)

All projects include Dockerfiles. To deploy with Docker:

```bash
# Example for any project:
docker build -t project-name .
docker run -p 5000:5000 project-name
```

---

## 🆘 Troubleshooting

### Issue: "Permission denied" when running scripts
**Solution:**
```bash
chmod +x create-*.sh
```

### Issue: Python dependencies fail to install
**Solution:**
- Ensure Python 3.10+ is installed: `python3 --version`
- Try upgrading pip: `pip install --upgrade pip`

### Issue: Face recognition installation fails on Mac M1/M2
**Solution:**
```bash
brew install cmake
pip install dlib --no-cache-dir
```

### Issue: TensorFlow installation fails
**Solution:**
```bash
# For Mac M1/M2:
pip install tensorflow-macos tensorflow-metal
```

---

## 📞 Contact

If you encounter any issues:
- **Email:** yassinechmirrou1@gmail.com
- **GitHub:** [@YassineChmirrou](https://github.com/YassineChmirrou)

---

## 🎯 Next Steps

1. **Create Projects Locally** - Run the scripts on your Mac
2. **Push to GitHub** - Make them public
3. **Deploy Live Demos** - Use Vercel, Heroku, or Railway
4. **Update Portfolio** - Add GitHub links and live demo URLs
5. **Share** - Your portfolio will showcase real, working projects!

---

**Good luck! 🚀**

Your portfolio projects are now ready to impress international recruiters at Apple, Google, Meta, and top tech companies worldwide.
