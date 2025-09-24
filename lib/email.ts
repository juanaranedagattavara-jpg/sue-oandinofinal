// Configuración para integración con SMTP/Sendgrid
// Descomenta y configura según tu proveedor de email

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail({ name, email, message }: EmailData) {
  // Opción 1: Sendgrid
  /*
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  
  const msg = {
    to: process.env.CONTACT_EMAIL!,
    from: process.env.FROM_EMAIL!,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  }
  
  await sgMail.send(msg)
  */

  // Opción 2: Nodemailer con SMTP
  /*
  const nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  
  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  })
  */

  // Por ahora solo log para desarrollo
  console.log('Email enviado:', { name, email, message })
}
