FROM node:8.11.2-alpine as node

# set working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm install -g @angular/cli@1.7.1

# add app
COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/titan /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf