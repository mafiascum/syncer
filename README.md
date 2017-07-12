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

## Testing
Run `docker-compose -f docker-compose.test.yml up --abort-on-container-exit`

## API

### `POST /jobs/:jobType`

Will queue job with the given jobType, if it exists.
Valid params, body, headers varies per request.
returns: `{jobId: <job id>}`

### `GET /jobs/:jobId`

Retrives job status and result, if applicable
returns: job object

#### valid job types:

**createThread**: creates a phpbb thread with the given parameters.  Required fields:
* userId: id of user under which to post the thread
* forumId: forum in which to create the topic
* subject: thread title
* message: body of first post in thread

