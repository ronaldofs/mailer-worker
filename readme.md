# Mailer worker

Email sending service worker listening on a queue.
Uses pm2 to run the app in production.

## Requirements

- Node.js and npm;
- AMQP server;

Required environment variables:
```
  QUEUE_NAME="email-queue"
  QUEUE_URL="amqp://user:password@localhost"
  EMAIL_FROM="Your name"
  EMAIL_ADDRESS="some_email@example.com"
  EMAIL_PASSWORD="password"
  EMAIL_SERVICE="Gmail"
```

## Running

Run with `npm start` on development and `npm run production` for production.

## Running with docker

Add to your docker-compose.yml:

```
mailer:
  build: .
  environment:
    - NODE_ENV: production
    - QUEUE_NAME: email-queue
    - QUEUE_URL: amqp://user:password@localhost
    - EMAIL_FROM: Your name
    - EMAIL_ADDRESS: some_email@example.com
    - EMAIL_PASSWORD: password
    - EMAIL_SERVICE: Gmail
```

Run your docker-compose file:
```
$ docker-compose build mailer && docker-compose up -d mailer
```
