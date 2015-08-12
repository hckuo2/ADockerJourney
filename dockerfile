FROM node:latest
RUN mkdir -p /webapp
COPY . /src
RUN cd /src; npm install
EXPOSE 8080
CMD ["node", "/src/index.js"]

