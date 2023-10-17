FROM node:18-alpine3.18

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4000
CMD [ "pm2-runtime", "start", "npm", "--", "start", "-p", "4000" ]
