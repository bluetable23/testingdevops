# Use a Node.js base image
FROM node:20.12.1

# Set the working directory
WORKDIR /app

# Copy package.json 
COPY package*.json ./

#Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (if serving with a static server like nginx)
EXPOSE 3000

# Start the app using a static file server
CMD ["npm", "start"]