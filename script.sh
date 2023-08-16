#!/bin/bash

# # Generar build en Docker
# docker build -t seminario_frontend .

# * Alternativa 1: Con artifact registry
docker tag seminario_frontend us-central1-docker.pkg.dev/my-devops-project-392822/seminario/frontend:latest
docker push us-central1-docker.pkg.dev/my-devops-project-392822/seminario/frontend:latest

# * Alternativa 2: Usando container registry (obsoleto)
# docker tag ticket_server gcr.io/my-devops-project-392822/ejemplo/server:latest
# docker push gcr.io/my-devops-project-392822/ejemplo/server:latest

