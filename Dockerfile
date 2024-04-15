FROM node:16-aphine

WORKDIR /app

COPY package.jso yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD ['npm', 'dev']