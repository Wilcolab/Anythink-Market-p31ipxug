# Node.js Express Server

This project is a simple Node.js Express server that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
node-server
├── src
│   ├── app.js            # Entry point of the application
│   ├── routes
│   │   └── index.js      # Route definitions
│   └── middleware
│       └── logger.js      # Logging middleware
├── package.json           # Project dependencies and scripts
├── yarn.lock              # Dependency version lock file
├── nodemon.json           # Nodemon configuration
├── Dockerfile             # Dockerfile for building the image
├── .dockerignore          # Files to ignore when building the Docker image
├── .gitignore             # Files to ignore in version control
└── README.md              # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd node-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

The server will start and listen on `http://localhost:8001`.

## Docker

To build and run the server using Docker, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t node-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.