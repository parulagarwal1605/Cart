

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:17-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
# Install dependencies 
RUN npm install
#Copy
COPY . .
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npm", "start"]