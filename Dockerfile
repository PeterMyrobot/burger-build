FROM node:14

ENV PROJECT_NEW productions
ENV NODE_ENV production

RUN apt-get update && apt-get install -y nginx

COPY package*.json /app/

WORKDIR /app/

RUN npm install

COPY . /app

RUN npm run build

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]