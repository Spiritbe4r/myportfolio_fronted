FROM node:14

RUN mkdir /myportfolio_frontend

WORKDIR /myportfolio_frontend

COPY ./package.json /myportfolio_frontend

RUN npm install

COPY . /myportfolio_frontend

RUN npm run build

CMD ["npm", "start"]