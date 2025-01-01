# Stage 1: Build the application
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install build dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Run any build steps (e.g., transpile or bundle the code)
RUN npm run build  # Adjust this according to your build command

# Stage 2: Production image
FROM node:16-slim AS production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Install production dependencies (optional, if you want to prune dev dependencies)
RUN npm ci --only=production

# Expose the port your app will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "generate-sitemap.js"]
