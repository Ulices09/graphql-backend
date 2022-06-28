FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .

RUN yarn install
RUN npx prisma generate


EXPOSE 4000

CMD yarn start