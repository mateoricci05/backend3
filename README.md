# Backend Final - Dockerizado

## Ejecutar con Docker

### Build
docker build -t backend-final .

### Run
docker run -p 3000:3000 backend-final

## Endpoints
- GET /api/users
- GET /api/adoptions
- POST /api/adoptions/:id

## Swagger
http://localhost:3000/api/docs

## DockerHub
Subir con:
docker tag backend-final TUUSUARIO/backend-final
docker push TUUSUARIO/backend-final
