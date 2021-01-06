FROM node:12.10-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.17-alpine
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /usr/src/app/build /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]