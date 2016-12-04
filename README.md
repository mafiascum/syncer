## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``
## Setup

Run `docker-compose build`.

## Start

Run `docker-compose up` 

## API

`POST /publish/:jobId`

Will queue job with the given jobId, if it exists.
Valid params, body, headers varies per request.

##### Current valid jobIds:

**replaceAllUsers**: Mostly for testing, but theoretically takes the entire list of MafiaScum users and imports them into the rails db.  Should eventually be batched at a certain interval