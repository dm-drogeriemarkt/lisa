FROM node:20 AS builder
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS server
COPY --from=builder /app/build /usr/share/nginx/html
