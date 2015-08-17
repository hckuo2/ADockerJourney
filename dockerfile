FROM node:latest
RUN mkdir -p /webapp
COPY . /webapp
RUN cd /webapp; npm install
EXPOSE 8080
CMD ["node", "/webapp/index.js"]

