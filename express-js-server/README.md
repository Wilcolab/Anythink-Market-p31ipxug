# Express JS Server

This project is a simple Express server scaffolded to listen on port 8001. It uses Nodemon for automatic code reloading during development.

## Project Structure

```
express-js-server
├── src
│   └── index.js          # Entry point of the application
├── package.json          # NPM configuration file
├── nodemon.json          # Nodemon configuration file
├── Dockerfile            # Dockerfile for building the application image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-js-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use:

```
yarn start
```

The server will be running on [http://localhost:8001](http://localhost:8001).

### Docker

To build and run the application in a Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-js-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-js-server
   ```

### License

This project is licensed under the MIT License.