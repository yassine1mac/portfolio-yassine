# Cheating Detection System

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![OpenCV](https://img.shields.io/badge/OpenCV-4.8+-green.svg)
![MLflow](https://img.shields.io/badge/MLflow-Tracking-orange.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

An AI-powered proctoring solution that monitors exam sessions in real-time using computer vision and machine learning. Detects suspicious behavior patterns to maintain exam integrity.

![Cheating Detection Demo](demo.gif)

## Features

- **Real-time Pose Estimation** - Track body pose at 30 FPS using MediaPipe
- **Head Orientation Detection** - Monitor where the examinee is looking
- **Behavior Analysis** - XGBoost classifier for suspicious activity detection
- **Low False Positive Rate** - Less than 5% false alerts
- **MLflow Integration** - Complete experiment tracking and model versioning
- **Configurable Sensitivity** - Adjust detection thresholds per exam

## Tech Stack

| Technology | Purpose |
|------------|---------|
| MediaPipe | Pose Estimation |
| OpenCV | Video Processing |
| XGBoost | Behavior Classification |
| MLflow | Experiment Tracking |
| Python | Backend |

## Quick Start

### Prerequisites

- Python 3.9+
- Webcam (for live detection)

### Installation

```bash
# Clone the repository
git clone https://github.com/YassineChmirrou/Cheating-Detection.git
cd Cheating-Detection

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### Running the System

```bash
# Run with webcam
python main.py --source webcam

# Run with video file
python main.py --source path/to/exam_video.mp4

# Start MLflow UI
mlflow ui --port 5000
```

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Video Stream                             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  MediaPipe BlazePose                         │
│              (33 Body Landmarks + Face)                      │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  Feature Extraction                          │
│  • Head orientation angles                                   │
│  • Eye gaze direction                                        │
│  • Hand position relative to body                            │
│  • Movement velocity                                         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                 XGBoost Classifier                           │
│           (Normal / Warning / Alert)                         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   Event Logger                               │
│          (Timestamped with confidence)                       │
└─────────────────────────────────────────────────────────────┘
```

## Detection Categories

| Status | Description | Triggers |
|--------|-------------|----------|
| **Normal** | Expected exam behavior | Looking at screen, minimal movement |
| **Warning** | Potential concern | Brief looks away, fidgeting |
| **Alert** | Likely cheating | Looking at phone, talking, extended distraction |

## Model Training

```python
# Custom features extracted from pose landmarks
features = [
    'head_pitch',           # Looking up/down
    'head_yaw',             # Looking left/right
    'head_roll',            # Head tilt
    'eye_gaze_x',           # Eye direction
    'eye_gaze_y',
    'hand_distance_face',   # Hand near face
    'movement_velocity',    # Overall movement
    'posture_angle',        # Sitting posture
]

# XGBoost with optimized hyperparameters
model = XGBClassifier(
    n_estimators=200,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8
)
```

## MLflow Experiments

All training runs are tracked with MLflow:

```bash
# View experiment results
mlflow ui

# Access at http://localhost:5000
```

Tracked metrics:
- Accuracy
- Precision/Recall
- F1-Score
- Confusion Matrix
- Feature Importance

## Configuration

```yaml
# config.yaml
detection:
  sensitivity: medium  # low, medium, high
  alert_threshold: 0.85
  warning_threshold: 0.65

video:
  fps: 30
  resolution: [640, 480]

logging:
  save_events: true
  output_path: ./logs/
```

## Results

| Metric | Value |
|--------|-------|
| Accuracy | 94.2% |
| Precision | 91.8% |
| Recall | 93.5% |
| F1-Score | 92.6% |
| False Positive Rate | 4.8% |

## Project Structure

```
├── main.py                 # Main application
├── detector/
│   ├── pose.py             # MediaPipe pose estimation
│   ├── features.py         # Feature extraction
│   └── classifier.py       # XGBoost model
├── training/
│   ├── train.py            # Model training
│   ├── evaluate.py         # Evaluation metrics
│   └── data_prep.py        # Dataset preparation
├── utils/
│   ├── visualization.py    # Drawing utilities
│   └── logger.py           # Event logging
├── models/
│   └── xgb_cheating.pkl    # Trained model
├── config.yaml             # Configuration
├── requirements.txt
└── README.md
```

## Ethical Considerations

This system is designed for legitimate proctoring use cases:
- **Transparency**: Examinees should be informed about monitoring
- **Privacy**: No video/audio recording, only behavioral analysis
- **Appeals**: Human review for flagged incidents
- **Accessibility**: Accommodations for different needs

## Future Improvements

- [ ] Multi-person tracking for group exams
- [ ] Audio analysis for verbal cues
- [ ] Browser activity monitoring integration
- [ ] Mobile app for proctors
- [ ] Real-time dashboard

## License

MIT License - see [LICENSE](LICENSE) file.

## Author

**Yassine Chmirrou**
- GitHub: [@YassineChmirrou](https://github.com/YassineChmirrou)
- LinkedIn: [Yassine Chmirrou](https://linkedin.com/in/yassinechmirrou)
