# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install

COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]