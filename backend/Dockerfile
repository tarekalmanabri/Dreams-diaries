# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

RUN npm install -g nodemon

# install app dependencies
RUN npm install

# start app
CMD ["npm", "start"]
