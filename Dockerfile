FROM node:12

WORKDIR /var/www/trivia-game

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]