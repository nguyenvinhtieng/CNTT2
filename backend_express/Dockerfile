FROM node:14-alpine

WORKDIR /backend_express
COPY package.json .
RUN npm install --production
COPY . .
CMD npm start