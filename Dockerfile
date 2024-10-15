FROM node:latest

# Create app directory
WORKDIR /node

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the rest of your application code
COPY . .

# Expose port
EXPOSE 3000

# Command to start your application in production
CMD ["npm", "run", "start-prod"]
