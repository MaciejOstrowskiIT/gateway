FROM node:18 AS base

RUN mkdir -p /workspace/
RUN mkdir -p /workspace/gateway

WORKDIR /workspace/gateway

FROM base AS build_gateway

WORKDIR /workspace/gateway

COPY ./gateway/package.json /workspace/gateway/
COPY ./gateway/package-lock.json /workspace/gateway/
RUN npm install

COPY ./gateway /workspace/gateway/
RUN npm run build
# Copy source code
USER node
# Start the application
COPY --from=build /workspace/gateway/dist ./dist

CMD ["dist/index.js"]
# CMD ["npm", "run", "server"]
