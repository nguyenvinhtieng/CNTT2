FROM node:16-alpine
WORKDIR /techforum-fe
COPY package.json .
RUN npm install --omit=dev
COPY . .
RUN npm run build
CMD npm start
# RUN npm install pm2 --location=global
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# CMD ["pm2-runtime", "node", "--", "server.js"]