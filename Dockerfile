FROM node:argon

RUN mkdir -p /src
WORKDIR /src

COPY package.json /src

# Install app dependencies
RUN npm install supervisor -g
RUN npm install knex -g
RUN npm install

# Bundle app source
COPY . /src

#Exposed port
EXPOSE 10101

CMD [ "npm","start" ]