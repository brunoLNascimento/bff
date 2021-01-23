FROM node:12-alpine

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003:3003

CMD ["npm", "start"]