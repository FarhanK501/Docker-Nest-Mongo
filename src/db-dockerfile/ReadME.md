# Running MongoDB with Docker (Hands-on Example)

This guide walks you through creating a simple Dockerfile to run a MongoDB instance within a Docker container. While Docker Compose is recommended for managing complex deployments, this example provides a hands-on experience with Docker itself.

Prerequisites

    Node.js and npm (or yarn) installed on your system.
    Docker installed on your system. Refer to the Docker documentation for installation instructions: https://docs.docker.com/engine/install/

Creating the Dockerfile

    Create a new folder named db in your project directory.
    Inside the db folder, create a file named Dockerfile with the following content:

Dockerfile

# Use the official MongoDB image from the Docker Hub
FROM mongo:latest

- Set environment variables (optional, not recommended in production)
- ENV MONGO_INITDB_ROOT_USERNAME=your_username
- ENV MONGO_INITDB_ROOT_PASSWORD=your_password

- Expose the default MongoDB port
EXPOSE 27017

- Use the default entrypoint for MongoDB
CMD ["mongod"]

Explanation:

    This Dockerfile uses the mongo:latest image from Docker Hub, which includes the MongoDB server.
    The commented-out lines (ENV ...) demonstrate how to set environment variables for the MongoDB root user credentials. However, storing sensitive information like passwords directly in the Dockerfile is not recommended for production environments. Consider using a .env file or secrets management tools for secure configurations.
    The EXPOSE 27017 instruction exposes the default MongoDB port (27017) within the container.
    The CMD ["mongod"] instruction sets the default entrypoint for the container, which is the mongod command to run the MongoDB server.

Building and Running the Container

    Navigate to the db folder in your terminal.

    Build the Docker image using the following command:

    docker build -t my-mongo-image .


This command creates a Docker image named my-mongo-image based on the Dockerfile you created.

Run the container in detached mode:

docker run -d --name my-mongo-container my-mongo-image

    This command runs the built image, creates a detached container named my-mongo-container, and assigns it the my-mongo-image.

Accessing MongoDB

You can now connect to your MongoDB instance from other components within your application using the container's IP address or hostname as the host in your connection string.

Also, we should be able to add the user now in DB.

First lets exec -it into the container and then log in using monogsh --username ....
and then add a user
```
db.createUser({
  user: "your-user-name",
  pwd: "your-password",
  roles: [{ role: "readWrite", db: "demo-docker-db" }]
});
```

Important Note:

This is a basic example for learning purposes. Using Docker Compose is highly recommended for managing complex deployments where you might have multiple services (like your NestJS application and MongoDB) working together. Docker Compose simplifies service discovery, configuration, and orchestration.

Moving On to Docker Compose

For a more practical and production-ready approach, explore using Docker Compose. It allows you to define a multi-container application with services and their configurations in a single YAML file, simplifying the deployment and management of your NestJS application alongside MongoDB.