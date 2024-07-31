FROM node:18

# Create and set the working directory
WORKDIR /opt/app

# Copy environment variables and application code to the container
COPY .env ./
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install
RUN npm install -g @nestjs/cli

# Expose the application port
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:dev"]
