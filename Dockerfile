FROM node:16

RUN mkdir /app
WORKDIR /app
COPY ./app/package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]
