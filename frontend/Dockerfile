# Use a Node.js base image
FROM node:20.12.1

# Set the working directory
WORKDIR /app

# Copy package.json 
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

#Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN ng build

# Expose port (if serving with a static server like nginx)
EXPOSE 80

# Start the app using a static file server
CMD ["npx", "serve", "-s", "build"]
