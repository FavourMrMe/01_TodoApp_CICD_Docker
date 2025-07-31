
FROM node:16
WORKDIR /app
COPY app ./app
COPY package*.json ./
RUN npm install
CMD ["node", "app/server.js"]
EXPOSE 3000
