FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package manifests and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy application source
COPY . .

# Expose port
EXPOSE 8000

# Start the server
CMD ["node", "src/index.js"]