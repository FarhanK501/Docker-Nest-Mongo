FROM node:18

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY .env /opt/app

COPY . /opt/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
