const nodemailer = require('nodemailer');

const trasnportador = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true para 465, false para outras
    auth: {
        user: '', // your email
        pass: '' // password generator for google apps
    }
});

trasnportador.sendMail({
    from: '', // from send email
    to: '', // to email
    subject: '', 
    html: '' // html code
})
.then((Response) => console.log('enviado'))
.catch((error) => console.log('erro', error));