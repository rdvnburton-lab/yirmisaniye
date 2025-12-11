# --- STAGE 1: Build ---
FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Copy package.json only to force fresh install (ignoring lockfile issues)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Build the application for production
RUN npm run build

# --- STAGE 2: Serve ---
FROM nginx:1.25-alpine

# Copy the built application from the 'build' stage to Nginx's web root
# Note: Adjust the source path if your angular.json output path is different
COPY --from=build /usr/src/app/www/browser/. /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf