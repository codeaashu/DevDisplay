# 🚀 DevDisplay API: Your Gateway to Developer Trends

## 🌟 Project Overview

DevDisplay API is a powerful backend service that aggregates and serves trending developer content from GitHub and Dev.to. It provides developers and tech enthusiasts with scraped insights into the most exciting developments in the tech world.

## ✨ Key Features

- **Trending Insights**: Discover top developers, repositories, and posts
- **Regularly scraped data**: Latest data scraped from authentic sources
- **Flexible Time Frames**: Choose from daily, weekly, or monthly trending data
- **Multi-Source Aggregation**: Pulls data from GitHub and Dev.to
- **Newsletter Subscription**: Stay updated with the latest tech trends

## 🛠 Tech Stack

- **Backend**: Node.js & Express.js
- **Database**: MongoDB with Mongoose ORM
- **Data Sources**: GitHub.com, Dev.to

## 📂 Project Structure

```
DevDisplay-API/
│
├── controllers/
│   ├── dev.controllers.js
│   ├── github.controllers.js
│   └── subscribers.controllers.js
│
├── db/
│   └── index.js
|
├── cron/
│   └── dev.cron.js
│   └── github.cron.js
│   └── test.cron.js
│
├── models/
│   ├── developers.models.js
│   ├── post.models.js
│   ├── repositories.models.js
│   └── subscribers.models.js
│
├── routes/
│   ├── dev.routes.js
│   ├── github.routes.js
│   └── subscribers.routes.js
│
└── utils/
    ├── randomPeriod.utils.js
    ├── response.utils.js
    └── urlBuilder.utils.js

```

## 🌐 API Endpoints

### Dev.to Endpoints

- `GET /devdisplay/v1/trending/dev/posts/:since`
- `GET /devdisplay/v1/trending/dev/getRandomPost`

### GitHub Endpoints

- `GET /devdisplay/v1/trending/github/repositories/:since`
- `GET /devdisplay/v1/trending/github/developers/:since`
- `GET /devdisplay/v1/trending/github/getRandomDev`
- `GET /devdisplay/v1/trending/github/getRandomRepo`

### Subscription Endpoints

- `POST /devdisplay/v1/subscribers`

## 🚀 Quick Start Guide

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation Steps

1.  Clone the repository

```bash
git clone https://github.com/Thakar-Advait/DevDisplay-API.git
cd DevDisplay-API

```

2.  Install Dependencies

```bash
npm install

```

3.  Configure Environment Variables Create a `.env` file with the following variables:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
DB_NAME=devdisplay

```

4.  Prepare MongoDB Collections Ensure your MongoDB database has these collections:

- `daily_trending_devs`
- `daily_trending_posts`
- `daily_trending_repos`
- `weekly_trending_devs`
- `weekly_trending_posts`
- `weekly_trending_repos`
- `monthly_trending_devs`
- `monthly_trending_posts`
- `monthly_trending_repos`
- `tests`

5.  Start the Server

```bash
npm run dev

```

## 🔒 Environment Configuration

Refer to `.env.sample` for detailed environment variable setup.

## 📄 License

[Insert Your License Here]

## 🙌 Acknowledgments

Special thanks to GitHub and Dev.to for providing the incredible developer data that powers this API.

---

**Built with ❤️ by Developers, for Developers**
