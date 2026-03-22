# Build stage
FROM node:22-alpine AS build

WORKDIR /app

ARG DEFAULT_THEME=lufthansa
ARG NPM_AUTH_TOKEN

COPY package*.json .npmrc ./
RUN npm ci --ignore-scripts && chmod -R +x node_modules/.bin

COPY . .

ENV DEFAULT_THEME=${DEFAULT_THEME}
RUN npm run build

# Serve stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
