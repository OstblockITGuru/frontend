# Create our build image
# Build-push-action issue #1071 is specific to linux/arm/v7; KCApp builds only
# linux/arm64, so use the supported Node 22 runtime for dependency installation.
FROM node:22-alpine@sha256:0a7108bf6c7bf5de370ffb1a3ed6be93d405b43ff159f681a8d18c0e2bc2e402 AS build_image

# Add git and curl
RUN apk update && apk add --no-cache git curl

# Create kcapp source directory
WORKDIR /usr/src/kcapp

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Write version info into version.json
RUN node bin/write-version.js

# Create actual image
FROM node:22-alpine@sha256:0a7108bf6c7bf5de370ffb1a3ed6be93d405b43ff159f681a8d18c0e2bc2e402

WORKDIR /usr/src/kcapp

# Copy required files from build image
COPY --from=build_image /usr/src/kcapp /usr/src/kcapp

EXPOSE 3000
CMD [ "npm", "run", "docker" ]
