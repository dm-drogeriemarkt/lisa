FROM node:10 AS builder
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
RUN . /app/.env.production && npm run build

FROM nginx:alpine AS server
COPY --from=builder /app/build /usr/share/nginx/html