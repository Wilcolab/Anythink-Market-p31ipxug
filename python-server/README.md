# Node.js Tasks Server

This folder contains a small Express-based HTTP API converted from a previous FastAPI implementation. It provides simple endpoints to list and add tasks.

## Endpoints
- GET / -> returns "Hello World"
- GET /tasks -> returns JSON { tasks: string[] }
- POST /tasks -> accepts JSON { text: string } and adds it to the in-memory tasks list

## Run locally

Install dependencies and start the server:

```bash
cd python-server
npm install
npm start
```

Development (auto-reload):

```bash
npm run dev
```

The server listens on port 8000 by default. Use `PORT` environment variable to change it.

## Docker

Build and run the Docker image:

```bash
docker build -t time-tasks-server -f python-server/Dockerfile python-server
docker run -p 8000:8000 time-tasks-server
```

## Notes
- The app stores tasks in memory and is not persistent across restarts.
- The Python FastAPI sources were replaced by this Node implementation. If you need the original Python version preserved, let me know and I can add it back under a separate folder.
