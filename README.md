# Docker-Nest-Mongo

This repository contains the code for a simple CRUD application built with NestJS and MongoDB, deployed using Docker and Kubernetes.

## Table of Contents

- [Docker-Nest-Mongo](#docker-nest-mongo)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
  - [Setup](#setup)
    - [Clone the Repository](#clone-the-repository)
    - [Environment Variables](#environment-variables)
  - [Running Locally with Docker](#running-locally-with-docker)
  - [Kubernetes Deployment](#kubernetes-deployment)
    - [Setup Kubernetes Cluster](#setup-kubernetes-cluster)
    - [Deploying the Application](#deploying-the-application)
  - [Accessing the Application](#accessing-the-application)
  - [Monitoring](#monitoring)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

- Docker
- Kubernetes
- kubectl
- Node.js (for local development)

## Project Structure

- `Dockerfile`: Docker configuration for building the NestJS application image.
- `docker-compose.yml`: Docker Compose configuration for local development.
- `kubernetes.yml`: Kubernetes manifests for deploying the application and MongoDB.
- `src/`: Source code of the NestJS application.

## Setup

### Clone the Repository

```bash
git clone https://github.com/FarhanK501/Docker-Nest-Mongo.git
cd Docker-Nest-Mongo
```

### Environment Variables

Create a `.env` file in the root directory with the following content:

```plaintext
DB_PORT=27017
DATABASE_URL=mongodb://nest:nest@mongodb:27017/nestjsDB?authSource=admin
APP_PORT=3000
MONGO_INITDB_ROOT_USERNAME=nest
MONGO_INITDB_ROOT_PASSWORD=nest
```

## Running Locally with Docker

1. Build the Docker image:

    ```bash
    docker build -t your-dockerhub-username/backend:latest .
    ```

2. Run the application using Docker Compose:

    ```bash
    docker-compose up
    ```

    The application should now be running at `http://localhost:3000`.

## Kubernetes Deployment

### Setup Kubernetes Cluster

Ensure you have a Kubernetes cluster running and `kubectl` configured to interact with it.

### Deploying the Application

1. Create the necessary directories on your nodes (for PersistentVolume):

    ```bash
    # Replace <node-name> with your actual node name
    ssh <node-name> "sudo mkdir -p /mnt/data"
    ```

2. Apply the Kubernetes manifests:

    ```bash
    kubectl apply -f kubernetes.yml
    ```

3. Check the status of your pods:

    ```bash
    kubectl get pods
    ```

4. Ensure all the pods are in the `Running` state.

## Accessing the Application

To access the application, you can use the NodePort or ClusterIP service as defined in the `kubernetes.yml` file.

For example, if using NodePort, access it at:

```
http://<node-ip>:30081
```

## Monitoring

To monitor logs and requests:

```bash
kubectl logs -f <pod-name>
```

For real-time monitoring and other advanced features, consider using tools like Prometheus, Grafana, or ELK stack.

## Troubleshooting

If you encounter issues, try the following:

- Check pod logs:

    ```bash
    kubectl logs <pod-name>
    ```

- Describe pods and services for more details:

    ```bash
    kubectl describe pod <pod-name>
    kubectl describe svc <service-name>
    ```

- Ensure the environment variables are correctly set in your deployment files.

## Contributing

Feel free to open issues or submit pull requests if you find bugs or have improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
