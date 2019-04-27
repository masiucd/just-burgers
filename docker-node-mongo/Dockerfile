FROM node:10

WORKDIR /the/src/app

COPY package*.json ./

RUN npm install

COPY  . .

EXPOSE 3000

CMD [ "npm", "start" ]