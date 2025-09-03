# Use official Bun image
FROM oven/bun:latest

WORKDIR /app

# Copy files
COPY package.json .
COPY server.ts .

# Expose port
EXPOSE 3000

# Run the Bun server
CMD ["bun", "run", "server.ts"]
