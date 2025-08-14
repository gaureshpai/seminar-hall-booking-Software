FROM node:24-alpine3.21 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:24-alpine3.21 

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public  ./public
COPY --from=builder /usr/src/app/start.sh ./start.sh

RUN chmod +x start.sh

ENV NODE_ENV=production

EXPOSE 3000

CMD ["./start.sh"]