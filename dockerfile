FROM node:18.15 as node

WORKDIR /app

COPY . /app

RUN npm ci

RUN npm run build:prod

FROM nginx

COPY --from=node /app/dist/temp-mail /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

