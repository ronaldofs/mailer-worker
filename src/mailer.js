import { createTransport } from 'nodemailer';

export const createMailer = (config) => {
  const sender = createTransport(config.options);

  return {
    send(options) {
      const { to, subject, text, html } = options;

      return sender.sendMail({
        to,
        subject,
        text,
        html,
        from: config.from
      });
    }
  };
}
