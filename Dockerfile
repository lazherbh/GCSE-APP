### STAGE 1: Définir le répertoire de travail ###
FROM node:18.18.0-alpine as angular-jobs
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: ###
FROM nginx:1.17.1-alpine

COPY --from=angular-jobs /usr/src/app/dist/ /usr/share/nginx/html

EXPOSE 80