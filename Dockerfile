FROM node:14 AS builder
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
RUN . /app/.env.production && npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS server
COPY --from=builder /app/build /usr/share/nginx/html
