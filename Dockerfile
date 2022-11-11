FROM hub.lexoya.com/cache/library/node:16.18.1-alpine3.14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules && npm install
COPY . .
RUN npm run build

FROM hub.lexoya.com/cache/library/nginx:1.22.1-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html