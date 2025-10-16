# JavaScript Express Server

This project is a simple Express server application that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes               # Directory for route definitions
│   │   └── index.js         # Currently no routes defined
│   ├── controllers          # Directory for controller functions
│   │   └── index.js         # Currently no controllers defined
│   └── middleware           # Directory for middleware functions
│       └── index.js         # Currently no middleware defined
├── package.json             # Project configuration and dependencies
├── yarn.lock                # Dependency version lock file
├── nodemon.json             # Nodemon configuration settings
├── Dockerfile               # Instructions to build the Docker image
├── .dockerignore            # Files to ignore when building the Docker image
├── .gitignore               # Files to ignore in Git
└── README.md                # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the server:**
   ```
   yarn start
   ```

   The server will start and listen on port 8001.

## Docker

To build and run the application in a Docker container, use the following commands:

1. **Build the Docker image:**
   ```
   docker build -t js-express-server .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 js-express-server
   ```

The application will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.