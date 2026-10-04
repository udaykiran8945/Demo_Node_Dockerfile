FROM node
WORKDIR /apps
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 80
MAINTAINER Uday Kiran
LABEL This is react/node project
ENTRYPOINT ["npm"]
CMD ["start"]
