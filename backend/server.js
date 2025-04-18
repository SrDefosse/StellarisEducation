const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Habilitar CORS para permitir peticiones desde el frontend
app.use(bodyParser.json()); // Parsear bodies de request JSON

// Configuración de Nodemailer para AWS SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true para puerto 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Funciones de sanitización
const sanitizeFunctions = {
  // Sanitiza texto general (nombre, asunto, mensaje)
  sanitizeText: (text, maxLength) => {
    if (!text) return '';
    // Convertir a string, remover tags HTML y caracteres especiales
    const sanitized = String(text)
      .replace(/<[^>]*>/g, '') // Remover HTML tags
      .replace(/[^\w\s.,!?@-]/g, '') // Solo permitir caracteres seguros
      .trim() // Remover espacios al inicio y final
      .replace(/\s+/g, ' '); // Reemplazar múltiples espacios con uno solo
    
    return sanitized.substring(0, maxLength); // Limitar longitud
  },

  // Sanitiza y valida email
  sanitizeEmail: (email) => {
    if (!email) return '';
    // Convertir a string, remover espacios y validar formato básico de email
    const sanitized = String(email)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '');
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(sanitized) ? sanitized : '';
  },

  // Sanitiza número de teléfono
  sanitizePhone: (phone) => {
    if (!phone) return '';
    // Mantener solo dígitos, paréntesis, guiones y espacios
    return String(phone)
      .replace(/[^\d\s()-]/g, '')
      .trim()
      .substring(0, 20); // Limitar a 20 caracteres
  }
};

// Validación completa de los datos del formulario
const validateFormData = (data) => {
  const { name, email, phone, subject, message } = data;
  const errors = [];

  // Sanitizar todos los campos
  const sanitizedData = {
    name: sanitizeFunctions.sanitizeText(name, 100),
    email: sanitizeFunctions.sanitizeEmail(email),
    phone: sanitizeFunctions.sanitizePhone(phone),
    subject: sanitizeFunctions.sanitizeText(subject, 200),
    message: sanitizeFunctions.sanitizeText(message, 1000)
  };

  // Validar campos requeridos
  if (!sanitizedData.name) errors.push('Name is required and must be valid');
  if (!sanitizedData.email) errors.push('Valid email is required');
  if (!sanitizedData.subject) errors.push('Subject is required');
  if (!sanitizedData.message) errors.push('Message is required');

  return {
    isValid: errors.length === 0,
    errors: errors,
    sanitizedData
  };
};

// Ruta para manejar el envío del formulario
app.post('/api/contact', (req, res) => {
  console.log('Received contact form submission:', req.body);

  // Validar y sanitizar datos
  const validation = validateFormData(req.body);
  
  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed: ' + validation.errors.join(', ')
    });
  }

  const { name, email, phone, subject, message } = validation.sanitizedData;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Contact Message: ${subject}`,
    html: `
      <h2>New Contact Message from stellariseducation.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    }
    console.log('Email sent successfully:', info.response);
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will contact you soon.'
    });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});