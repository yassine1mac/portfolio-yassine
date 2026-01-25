# Hotel Review NLP Analysis

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![BERT](https://img.shields.io/badge/BERT-Sentiment-yellow.svg)
![LDA](https://img.shields.io/badge/LDA-Topics-green.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A comprehensive NLP pipeline for analyzing hotel reviews at scale. Combines BERT for sentiment classification with LDA topic modeling to extract actionable insights from customer feedback.

![NLP Dashboard](demo.png)

## Features

- **BERT Sentiment Analysis** - State-of-the-art sentiment classification (92% accuracy)
- **LDA Topic Modeling** - Automatic discovery of 15 key topics
- **Web Scraping** - Automated collection from Booking.com, TripAdvisor
- **Aspect-Based Analysis** - Sentiment per category (service, cleanliness, location)
- **Multilingual Support** - Handles English, French, Spanish reviews
- **Interactive Dashboard** - Visualize trends and insights

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Transformers | BERT Implementation |
| Gensim | LDA Topic Modeling |
| Selenium | Web Scraping |
| Pandas | Data Processing |
| Plotly | Visualizations |

## Quick Start

### Prerequisites

- Python 3.9+
- Chrome/Firefox browser (for scraping)

### Installation

```bash
# Clone the repository
git clone https://github.com/YassineChmirrou/Hotel-Review-NLP.git
cd Hotel-Review-NLP

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Download BERT model
python -c "from transformers import AutoModel; AutoModel.from_pretrained('bert-base-multilingual-cased')"
```

### Running the Pipeline

```bash
# 1. Scrape reviews (optional - sample data included)
python scraper/scrape_reviews.py --hotel "Hotel Name" --source booking

# 2. Run sentiment analysis
python analysis/sentiment.py --input data/reviews.csv

# 3. Run topic modeling
python analysis/topics.py --input data/reviews.csv --n_topics 15

# 4. Generate report
python analysis/report.py --output reports/
```

## Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Data Collection                           │
│     ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│     │  Booking    │  │ TripAdvisor │  │   Google    │       │
│     │   .com      │  │             │  │   Reviews   │       │
│     └──────┬──────┘  └──────┬──────┘  └──────┬──────┘       │
│            └────────────────┼────────────────┘              │
│                             ▼                                │
│                    Selenium Scraper                          │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                    Preprocessing                              │
│  • Text cleaning & normalization                              │
│  • Language detection                                         │
│  • Tokenization                                               │
└──────────────────────────────┬───────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
┌──────────────────────────┐    ┌──────────────────────────────┐
│    Sentiment Analysis    │    │      Topic Modeling          │
│  ┌────────────────────┐  │    │  ┌────────────────────────┐  │
│  │   mBERT Encoder    │  │    │  │    TF-IDF Vectors      │  │
│  └─────────┬──────────┘  │    │  └──────────┬─────────────┘  │
│            ▼             │    │             ▼                │
│  ┌────────────────────┐  │    │  ┌────────────────────────┐  │
│  │  Classification    │  │    │  │   LDA (15 Topics)      │  │
│  │  Head (3 classes)  │  │    │  │   + Coherence Score    │  │
│  └────────────────────┘  │    │  └────────────────────────┘  │
└──────────────────────────┘    └──────────────────────────────┘
               │                               │
               └───────────────┬───────────────┘
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                  Analytics & Visualization                    │
│  • Sentiment distribution                                     │
│  • Topic word clouds                                          │
│  • Trend analysis over time                                   │
│  • Aspect-based sentiment heatmaps                            │
└──────────────────────────────────────────────────────────────┘
```

## Sentiment Analysis

```python
from analysis import SentimentAnalyzer

analyzer = SentimentAnalyzer()

# Analyze single review
result = analyzer.predict(
    "The hotel was amazing! Great location and friendly staff."
)

print(result)
# {
#     'sentiment': 'positive',
#     'confidence': 0.94,
#     'aspects': {
#         'location': 'positive',
#         'staff': 'positive',
#         'overall': 'positive'
#     }
# }
```

## Topic Modeling

Discovered topics include:

| Topic | Top Words | Category |
|-------|-----------|----------|
| 0 | room, clean, bed, bathroom | Cleanliness |
| 1 | staff, friendly, helpful, reception | Service |
| 2 | location, walk, center, metro | Location |
| 3 | breakfast, food, restaurant, coffee | Food & Dining |
| 4 | price, value, expensive, worth | Value |
| 5 | pool, spa, gym, facilities | Amenities |

## Results

### Sentiment Classification

| Metric | Value |
|--------|-------|
| Accuracy | 92.3% |
| F1-Score (Positive) | 94.1% |
| F1-Score (Negative) | 89.7% |
| F1-Score (Neutral) | 85.2% |

### Topic Coherence

| Model | Coherence (C_v) |
|-------|-----------------|
| LDA (15 topics) | 0.58 |
| LDA (20 topics) | 0.52 |
| LDA (10 topics) | 0.55 |

## Project Structure

```
├── scraper/
│   ├── scrape_reviews.py     # Main scraper
│   ├── booking_scraper.py    # Booking.com specific
│   └── tripadvisor_scraper.py
├── analysis/
│   ├── sentiment.py          # BERT sentiment
│   ├── topics.py             # LDA modeling
│   ├── aspects.py            # Aspect extraction
│   └── report.py             # Report generation
├── preprocessing/
│   ├── cleaner.py            # Text cleaning
│   └── tokenizer.py          # Custom tokenization
├── visualization/
│   ├── dashboard.py          # Plotly dashboard
│   └── wordcloud.py          # Topic word clouds
├── data/
│   └── sample_reviews.csv    # Sample dataset
├── models/
│   ├── sentiment_model/      # Saved BERT model
│   └── lda_model.pkl         # Trained LDA
├── requirements.txt
└── README.md
```

## Configuration

```yaml
# config.yaml
scraping:
  delay: 2  # seconds between requests
  max_reviews: 1000
  languages: ["en", "fr", "es"]

sentiment:
  model: "bert-base-multilingual-cased"
  batch_size: 32
  max_length: 512

topics:
  n_topics: 15
  min_df: 5
  max_df: 0.9
```

## Future Improvements

- [ ] Summarization of review highlights
- [ ] Competitor comparison analysis
- [ ] Real-time monitoring dashboard
- [ ] API for integration with hotel systems
- [ ] Recommendation generation

## License

MIT License - see [LICENSE](LICENSE) file.

## Author

**Yassine Chmirrou**
- GitHub: [@YassineChmirrou](https://github.com/YassineChmirrou)
- LinkedIn: [Yassine Chmirrou](https://linkedin.com/in/yassinechmirrou)
- Portfolio: [yassine1mac.github.io/portfolio-yassine](https://yassine1mac.github.io/portfolio-yassine/)

## Acknowledgments

- [Hugging Face Transformers](https://huggingface.co/transformers/)
- [Gensim LDA Tutorial](https://radimrehurek.com/gensim/auto_examples/tutorials/run_lda.html)
