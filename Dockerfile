# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]