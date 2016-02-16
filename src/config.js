const {
  QUEUE_NAME,
  QUEUE_URL,
  EMAIL_FROM,
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
  EMAIL_SERVICE
} = process.env;

export default {
  queue: {
    name: QUEUE_NAME || 'mailer',
    url: QUEUE_URL || 'amqp://localhost'
  },
  email: {
    from: EMAIL_FROM ? `${EMAIL_FROM} <${EMAIL_ADDRESS}>` : EMAIL_ADDRESS,
    options: {
      service: EMAIL_SERVICE,
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD
      }
    }
  }
}
