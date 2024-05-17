import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gitEvakOrunn@gmail.com',
        password: 'mjhn xcdu xafp rufp'
    },
});

export const sendeMail = async (recipient, subject, content) => {
    try {
        const mailOptions = {
            from: 'Remitente <gitEvakOrunn@gmail.com>',
            to: recipient,
            subject: subject,
            text: content
        };
    
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
    } catch (error) {
        console.log('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo')
    }
}
