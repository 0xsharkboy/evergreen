FROM node:lts

RUN mkdir -p /app
WORKDIR /app

COPY . /app/

RUN npm i

CMD [ "npm", "run", "start" ]