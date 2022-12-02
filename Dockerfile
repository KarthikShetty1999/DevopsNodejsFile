FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

# CMD ["npm","start"]
EXPOSE 3000

CMD ["npm", "run", "dev"]