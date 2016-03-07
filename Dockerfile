FROM  phusion/passenger-full

#we have to force-confdef due to nginx-common prompt issue http://debian-handbook.info/browse/wheezy/sect.automatic-upgrades.html
RUN yes '' | apt-get -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" -y update && yes '' | apt-get -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" -y upgrade 
RUN apt-get -y update && apt-get -y upgrade 
RUN sudo apt-get install phantomjs

RUN sudo apt-get -y install python
RUN curl https://install.meteor.com/ | sh

ENV HOME /root
#SSL
ADD ssl/fullchain.pem /etc/nginx/cert/fullchain.pem
ADD ssl/privkey.pem /etc/nginx/cert/privkey.pem
ADD ssl/dhparam.pem /etc/nginx/cert/dhparam.pem

#bundle meteor app
ADD src /src
RUN cd /src && meteor build --directory /meteor-build && meteor build --directory /meteor-build;

RUN chown -R app:app /meteor-build

WORKDIR /meteor-build/bundle/programs/server/
RUN npm install

#NGINX
RUN rm -f /etc/service/nginx/down
RUN rm -f /etc/nginx/sites-enabled/default
ADD nginx.conf /etc/nginx/sites-enabled/nginx.conf
ADD settings.json /settings.json

# Run app
EXPOSE  80
EXPOSE  443
ENV LOAD_FIXTURES true;
# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Clean up APT when done.
RUN sudo rm -R ./npm/npm-bcrypt/node_modules/bcrypt; sudo npm install bcrypt
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /meteor/src
