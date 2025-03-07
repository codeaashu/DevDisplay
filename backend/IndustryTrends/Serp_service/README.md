
# Serp Service - Backend for Industry Trend Data utilising Google Trends Data

## Overview

The **Serp Service** is a backend service that fetches, stores, and provides trending data related to **Robotics** and **Machine Learning & Artificial Intelligence**. The data is collected through **SERP APIs** and stored in **MongoDB**, where it can be queried to gather relevant insights. The service is built with **Node.js**, leveraging **Express.js** for API management and **MongoDB** for data persistence. 

Additionally, the service has been integrated with **Prometheus**, **Grafana**, and **Winston-Loki** for monitoring, logging, and metrics collection to ensure smooth operation and transparency.

## Key Features

- Collects **Trending Data** related to technology categories such as **Robotics** and **Machine Learning & AI** using **SERP APIs**.
- Stores the collected data in a **MongoDB** database.
- Periodically updates the data using **cron jobs** running every 24 hours.
- Integrates with **Prometheus** for metrics collection, **Grafana** for data visualization, and **Winston-Loki** for logging.

**Note:**  
The "Serp_service" currently provides trends for only two categories: "Robotics" and "Machine Learning & Artificial Intelligence," due to the limitations of the API used for scraping Google Trends data, which allows only 100 requests per month for "FREE TIER" users. The service can be expanded to include additional categories and tags in the future by upgrading to a "PAID TIER," depending on demand.
## Tech Stack

- **Backend Framework**: **Express.js** in **Node.js**
- **Database**: **MongoDB**
- **APIs**: **SERP API** for trending data collection
- **Monitoring and Logging**:
  - **Prometheus**: For collecting server metrics
  - **Grafana**: For visualizing the metrics
  - **Winston-Loki**: For logging server activities and events

## Project Structure

```plaintext
backend/
│
├── IndustryTrends/
│   ├── Gateway/
│   │   ├── docker-compose.yml
│   │   ├── prometheus-config.yml
│   │   └── ...
│   ├── Serp_service/
│   │   ├── controllers/
│   │   │   ├── category.controllers.js
│   │   │   ├── healthcheck.controllers.js
│   │   │   ├── interest.controllers.js
│   │   │   ├── relatedQuery.controllers.js
│   │   │   ├── relatedTopic.controllers.js
│   │   ├── cron/
│   │   │   ├── apiCall.jobs.js
│   │   │   └── index.js
│   │   ├── db/
│   │   │   └── index.js
│   │   ├── middlewares/
│   │   ├── models/
│   │   │   ├── categories.models.js
│   │   │   ├── interest_over_time.models.js
│   │   │   ├── related_queries.models.js
│   │   │   └── related_topics.models.js
│   │   ├── routes/
│   │   │   ├── category.routes.js
│   │   │   ├── healcheck.routes.js
│   │   │   ├── interest.routes.js
│   │   │   ├── relatedQuery.routes.js
│   │   │   └── relatedTopics.routes.js
│   │   ├── utils/
│   │   │   ├── ApiError.js
│   │   │   ├── ApiResponse.js
│   │   │   └── AsyncHandler.js
│   │   ├── .env.sample
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── loki-config.js
│   │   ├── package.json
│   │   └── prom-config.js
│   └── ...
└── ...
```

## Key Components

### `controllers/`
Contains the logic for handling API requests for different technology categories (e.g., Robotics, Machine Learning, AI) and related queries.

### `cron/`
Contains the cron job configurations, including the jobs for periodic data fetching and updating from the SERP API.

### `db/`
Responsible for managing database connections and configurations related to MongoDB.

### `middlewares/`
Holds any middleware functions for request processing and error handling.

### `models/`
Contains the Mongoose models for the data entities (e.g., categories, related queries, etc.).

### `routes/`
Defines the routes for different API endpoints corresponding to various controllers.

### `utils/`
Utility functions for common tasks like error handling, API response formatting, and async handling.

## Monitoring and Logging Configuration

- **`loki-config.js`**: Configures **Winston-Loki** for centralized logging.
- **`prom-config.js`**: Configuration for **Prometheus** metrics collection.

## Gateway/

Contains **Docker** and **Prometheus** configuration files for setting up the service in a containerized environment and integrating it with monitoring systems.


# Setup Instructions

Follow the steps below to set up and run the **Serp Service** locally:

## 0. Add "categories" collection in your DB

make sure before running the service that the collection "categories" exists in your DB and has the following content:

```json
{
  "_id":{"$oid":"67c7ed76b31e2ffa2e6f3ce2"},
  "category":"Machine Learning & Artificial Intelligence",
  "index":{"$numberInt":"1299"}
}
{
  "_id":{"$oid":"67c7edaeb31e2ffa2e6f3ce3"},
  "category":"Robotics",
  "index":{"$numberInt":"1141"}
}
```

note that the category and index values MUST BE THE SAME AS SHOWN ABOVE.
"_id" is generated automatically by mongodb and need not be same.

## 1. Install Dependencies

Navigate to the `Serp_service` directory and install the required dependencies:

```bash
cd backend/IndustryTrends/Serp_service
npm install
```

## 2. Configure Environment Variables

Copy the  `.env.sample`  file to create a new  `.env`  file:

```bash
cp .env.sample .env
```

### Edit  `.env`  file

Open the  `.env`  file and update the following values:

-   **`PORT`**: Your desired port number for the application.
-   **`DB_NAME`**: Name of your MongoDB database.
-   **`DB_URI`**: MongoDB connection URI.
-   **`SERP_API_KEY`**: Your API key from  **SERP API**.
-   **`CORS_POLICY`**: Set your CORS policy (e.g.,  `*`  for all domains or specify allowed origins).

## 3. Generate  `SERP_API_KEY`

To generate your  **SERP API Key**, follow these steps:

1.  Visit  https://serpapi.com/.
2.  Register or log in to your account.
3.  Go to the  **API Key**  section.
4.  Copy your API key.
5.  Paste the API key into the  `SERP_API_KEY`  field in your  `.env`  file.

## 4. Run the Application

To start the development server, run the following command:
```bash
npm run dev
```

**Note:**  
The steps for setting up Prometheus, Grafana, and Winston-Loki are intended solely for creating a detailed and descriptive dashboard to facilitate efficient and comprehensive monitoring of the server. These services will function perfectly fine even without the custom dashboards. You can skip the steps for creating the custom dashboards if you prefer, as they are optional for basic functionality.


# Setting up Prometheus, Grafana, and Winston-Loki for Metrics Collection, Visualization, and Logging

## 1. Prometheus Server

### Step 1: Create Prometheus Configuration

Create a file named `prometheus-config.yml` and paste the following configuration. Be sure to replace `<NODEJS_SERVER_ADDRESS>` with the actual address of your Node.js server.

```yaml
global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ["<NODEJS_SERVER_ADDRESS>"]
 ```

### Step 2: Start Prometheus Server with Docker Compose

In your project directory, create a  `docker-compose.yml`  file with the following content to start Prometheus:

```yaml
version:  "3"  
services:  
	prom-server:  
		image:  prom/prometheus  
		ports:  -  9090:9090  
		volumes:  -  ./prometheus-config.yml:/etc/prometheus/prometheus.yml 
```
### Step 3: Run Docker Compose

Once your  `docker-compose.yml`  and  `prometheus-config.yml`  files are ready, run the following command to start the Prometheus server:

```bash
docker-compose up
```


## 2. Set up Grafana for Metrics Visualization

Grafana is a powerful tool for visualizing and analyzing metrics collected by Prometheus. Follow these steps to set up and configure Grafana for visualizing metrics from your Node.js application.

### Step 1: Pull the Grafana Docker Image

Start by pulling and running the Grafana Docker container using the following command:

```bash
docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss` 
```

-   `-d`: Run the container in detached mode.
-   `-p 3000:3000`: Expose Grafana on port  `3000`.
-   `--name=grafana`: Name the container  `grafana`.
-   `grafana/grafana-oss`: Official open-source Grafana Docker image.

Once the command is executed, Grafana will be running on your local machine and accessible via port  `3000`.

### Step 2: Access Grafana Dashboard

To access the Grafana UI, open your browser and go to the following URL:

`http://<your_ip_address>:3000` 

-   Replace  `<your_ip_address>`  with the actual IP address of the server or  `localhost`  if running locally.

### Step 3: Login to Grafana

When you first access Grafana, you'll be prompted to log in using the default credentials:

-   **Username**:  `admin`
-   **Password**:  `admin`

You’ll be asked to change the password on your first login. After changing the password, you’ll be directed to the Grafana dashboard.

### Step 4: Set up Prometheus as a Data Source

Once logged in, follow these steps to add  **Prometheus**  as a data source:

1.  Click on the  **gear icon**  (⚙️) in the left sidebar to go to the  **Configuration**  section.
2.  Select  **Data Sources**.
3.  Click on  **Add data source**.
4.  In the search bar, type "Prometheus" and select it from the list.
5.  In the  **HTTP URL**  field, enter the address of your Prometheus server (e.g.,  `http://<prometheus_server_ip>:9090`).
6.  Click on  **Save & Test**  to verify the connection to Prometheus.

Grafana will now be connected to Prometheus and ready to display your metrics.

### Step 5: Create a New Dashboard

1.  In the left sidebar, click on the  **plus icon**  (➕) and select  **Dashboard**.
2.  Click on  **Add new panel**.
3.  In the  **Query**  section, select  **Prometheus**  as the data source.
4.  Enter the desired Prometheus query in the  **Metric**  field to fetch the data you want to visualize (e.g.,  `nodejs_http_requests_total`  for Node.js HTTP requests).

Grafana will automatically start fetching the data from Prometheus and display the visualization (e.g., a time series graph) for that query.

### Step 6: Use the Node.js Dashboard

To get started with a pre-built Node.js dashboard, follow these steps:

1.  In the  **Grafana**  dashboard, click on the  **"+"**  icon in the left sidebar and select  **Import**.
2.  In the  **Import via grafana.com**  field, you can paste the  **Node.js dashboard ID**  from  Grafana Dashboards. For example:
    -   Node.js Overview Dashboard ID:  `1860`  (This is a commonly used dashboard for Node.js metrics).
3.  Enter the dashboard ID and click  **Load**.
4.  Grafana will automatically import the Node.js dashboard, pre-configured with Prometheus as the data source.

Once imported, you will see a variety of visualizations related to your Node.js application, such as memory usage, HTTP requests, CPU usage, etc.

You can also customize the panels, modify queries, or adjust visualizations to better fit your needs.

## 3. Winston-Loki

### Step 1: Setup Loki Server
```bash
docker run -d --name=loki -p 3100:3100 grafana/loki
```
### Step 2: Integrate Loki with Grafana

To visualize the logs collected by Loki in  **Grafana**, follow these steps:

1.  **Login to Grafana**:
    
    Open your Grafana dashboard by navigating to  `http://<grafana_ip>:3000`. Log in with your  **admin**  credentials (default: username  `admin`, password  `admin`).
    
2.  **Add Loki as a Data Source**:
    
    To add Loki as a data source in Grafana:
    
    -   Click the  **gear icon**  (⚙️) in the left sidebar to go to  **Configuration**.
    -   Select  **Data Sources**.
    -   Click on  **Add data source**.
    -   In the search bar, type "Loki" and select it from the list.
    -   In the  **URL**  field, enter the address of your Loki server (e.g.,  `http://localhost:3100`).
    -   Click  **Save & Test**  to verify the connection.
3.  **Create a Dashboard for Logs**:
    
    -   In the left sidebar, click the  **"+"**  icon and select  **Dashboard**.
    -   Click on  **Add new panel**.
    -   In the panel editor, select  **Loki**  as the data source.
    -   In the  **Log field**, type  `{job="nodejs-service"}`  to query logs from your Node.js application.
    -   You can further refine the query using  **LogQL**, Loki's query language, to filter logs based on severity (`level="info"`  or  `level="error"`) or specific log messages.
4.  **Visualize Logs**:
    
    Once your logs are set up, you will see them displayed in real-time within Grafana. You can customize the panel, add filters, or set up alerts based on log data.
    

### Step 3: View Logs in Grafana

After following the above steps, you will now have a  **Loki**  data source set up in  **Grafana**, and your application logs will be visualized in real time.

You can use Grafana's  **Explore**  feature to query logs and explore different log levels, timestamps, and metadata such as  `job`,  `level`, or  `message`. This feature is extremely helpful for troubleshooting and monitoring the health of your application.



