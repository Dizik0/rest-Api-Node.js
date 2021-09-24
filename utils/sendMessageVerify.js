const sgMail = require('@sendgrid/mail')

const sendMessageVerify = async (data) => {
  const { SENDGRID_API_KEY } = process.env

  sgMail.setApiKey(SENDGRID_API_KEY)

  const mail = { to: 'denisggwp77@gmail.com', ...data }

  console.log(mail)

  await sgMail.send(mail)
}

module.exports = sendMessageVerify
