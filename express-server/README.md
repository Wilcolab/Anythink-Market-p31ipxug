# Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
express-server
├── src
│   └── app.js          # Entry point of the application
├── package.json        # NPM configuration file
├── .nodemon.json       # Nodemon configuration file
├── Dockerfile          # Dockerfile for building the application image
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore in Git
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker (if you want to run the server in a container)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server using Nodemon, run:
```
yarn start
```

The server will listen on `http://localhost:8001`.

### Running with Docker

To build and run the server using Docker, execute the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.