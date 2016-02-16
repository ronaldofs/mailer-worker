import { createContext } from 'rabbit.js';
import config from './config';
import { createMailer } from './mailer';

const ctx = createContext(config.queue.url);
const mailer = createMailer(config.email);
const log = (msg, ...data) => console.log.apply(console, [`[mailer] ${msg}`, ...data]);
const exit = () => ctx.close() && process.exit(0);

ctx.on('ready', () => {
  const worker = ctx.socket('WORKER', { persistent: true });

  worker.connect(config.queue.name, () => {
    log('Connected to queue.');

    worker.on('data', data => {
      const options = JSON.parse(data);

      mailer.send(options).then(info => {
        const { to, subject } = options;
        log('Email sent.', { to, subject }, info.response);

        worker.ack();
      }, err => {
        log('Error sending email.', err);
      });
    });
  });
});

process
  .on('SIGINT', exit)
  .on('SIGTERM', exit);

log('Started!');
