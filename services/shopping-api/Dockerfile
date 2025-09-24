# Use official lightweight Node image
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source files
COPY tsconfig.json ./
COPY src/ ./src

# Build TypeScript -> JavaScript
RUN npm run build

# ---- Production image ----
FROM node:22-alpine AS prod

WORKDIR /app

# Copy only built files and dependencies
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Run compiled JS instead of ts-node
CMD ["node", "dist/index.js"]
