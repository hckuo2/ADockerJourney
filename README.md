# ADockerJourney
Let's start a docker journey!
## Demo commands
* docker build -t "auszone/myserver" -f dockerfile  .
* docker run --name demodb -e MYSQL_ROOT_PASSWORD=austinishandsome -d mysql/mysql-server:latest
* docker run --name server --link demodb:mysql -d -p 8080:8080 auszone/myserver
