# Use the official Node.js image with Alpine Linux
FROM node:20.10.0-alpine3.18

# Set working directory in the container
WORKDIR /app

# Copy project files into working directory
COPY . .

# Install dependencies
RUN npm install

# Build application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000
# Use the official Node.js image with Alpine Linux
FROM node:20.10.0-alpine3.18

# Set working directory in the container
WORKDIR /app

# Copy project files into working directory
COPY . .

# Install dependencies
RUN npm install

# Build application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Execute command to run the apllication
CMD ["npm", "start"]

# Execute command to run the apllication
CMD ["npm", "start"]
