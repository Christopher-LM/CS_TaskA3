FROM node:alpine

COPY ./server/server.js /var/www/server.js
COPY ./server/index.html /var/www/index.html


CMD ["node", "var/www/server.js"]