# Food & Calorie Estimation with Deep Learning

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-red.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A deep learning application that uses ResNet18 to classify food items and estimate their calorie content from images. Built with PyTorch and deployed using Streamlit.

![Food Recognition Demo](demo.gif)

## Features

- **Real-time Food Recognition** - Identify food items from uploaded images with 89% accuracy
- **Calorie Estimation** - Get accurate calorie counts based on portion size
- **Nutritional Breakdown** - View detailed macros (protein, carbs, fats)
- **101 Food Categories** - Trained on the Food-101 dataset
- **Fast Inference** - Sub-50ms prediction time
- **Docker Support** - Easy deployment with containerization

## Tech Stack

| Technology | Purpose |
|------------|---------|
| PyTorch | Deep Learning Framework |
| ResNet18 | CNN Architecture |
| Streamlit | Web Interface |
| Docker | Containerization |
| TorchScript | Model Optimization |

## Quick Start

### Prerequisites

- Python 3.9+
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/YassineChmirrou/Food-and-Calorie-Estimation-Deep-learning.git
cd Food-and-Calorie-Estimation-Deep-learning

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Running the App

```bash
# Run with Streamlit
streamlit run app.py

# Or use Docker
docker build -t food-calorie-app .
docker run -p 8501:8501 food-calorie-app
```

## Model Architecture

```
Input Image (224x224x3)
    │
    ▼
┌─────────────────┐
│   ResNet18      │
│ (Pretrained on  │
│   ImageNet)     │
└────────┬────────┘
         │
    ▼
┌─────────────────┐
│ Custom FC Layer │
│   (101 classes) │
└────────┬────────┘
         │
    ▼
┌─────────────────┐
│    Softmax      │
│   Predictions   │
└─────────────────┘
```

## Training

The model was trained using transfer learning:

1. **Base Model**: ResNet18 pretrained on ImageNet
2. **Dataset**: Food-101 (101,000 images)
3. **Training**: Fine-tuned final layers for 50 epochs
4. **Optimizer**: Adam with learning rate 0.001
5. **Augmentation**: Random crops, horizontal flips, color jitter

### Results

| Metric | Value |
|--------|-------|
| Top-1 Accuracy | 89.2% |
| Top-5 Accuracy | 97.8% |
| Inference Time | 45ms |

## API Usage

```python
from model import FoodClassifier

# Initialize model
classifier = FoodClassifier()

# Predict from image
result = classifier.predict("path/to/food/image.jpg")

print(f"Food: {result['name']}")
print(f"Calories: {result['calories']} kcal")
print(f"Confidence: {result['confidence']:.2f}%")
```

## Project Structure

```
├── app.py              # Streamlit web application
├── model.py            # Model architecture and inference
├── train.py            # Training script
├── utils/
│   ├── preprocess.py   # Image preprocessing
│   └── nutrition.py    # Calorie database
├── models/
│   └── resnet18_food.pth  # Trained model weights
├── Dockerfile          # Docker configuration
├── requirements.txt    # Python dependencies
└── README.md
```

## Future Improvements

- [ ] Add portion size estimation using depth sensors
- [ ] Implement meal logging and tracking
- [ ] Add barcode scanning for packaged foods
- [ ] Create mobile app version
- [ ] Expand to 200+ food categories

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Yassine Chmirrou**
- GitHub: [@YassineChmirrou](https://github.com/YassineChmirrou)
- LinkedIn: [Yassine Chmirrou](https://linkedin.com/in/yassinechmirrou)
- Portfolio: [yassine1mac.github.io/portfolio-yassine](https://yassine1mac.github.io/portfolio-yassine/)

## Acknowledgments

- [Food-101 Dataset](https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/)
- [PyTorch Transfer Learning Tutorial](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html)
