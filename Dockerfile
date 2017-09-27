
FROM node:8.2.1


# This image provides a Node.JS environment you can use to run your Node.JS
# applications.

MAINTAINER Alicia de Dios Fuente <adediosf@cern.ch>

RUN mkdir -p /opt/nile/sessions; chown node /opt/nile/sessions
COPY ./package.json /opt/nile/

# Create app directory
WORKDIR /opt/nile


RUN npm install && npm i @angular/cli && npm cache clean --force && npm run build
ENV PATH="/usr/src/app/node_modules/.bin:${PATH}"

RUN chown node:node /opt/nile && chmod 0777 -R /opt/nile

USER node
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
