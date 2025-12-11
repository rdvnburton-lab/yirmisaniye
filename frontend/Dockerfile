# --- STAGE 1: Build ---
# Use a specific Node.js version based on your project's requirements.
# Alpine is a good choice for smaller images.
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock, etc.)
COPY package.json package-lock.json* ./

# Install dependencies. This is done in a separate step to leverage Docker's layer caching.
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Build the application for production
RUN npm run build

# --- STAGE 2: Serve ---
# Use a lightweight Nginx server to serve the static files
FROM nginx:1.25-alpine

# Copy the built application from the 'build' stage to Nginx's web root
COPY --from=build /usr/src/app/www/browser/. /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf