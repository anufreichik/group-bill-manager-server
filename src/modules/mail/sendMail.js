import nodemailer from 'nodemailer';
//import creds from '../../../config'

export default function sendMail(req, res){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'test@test.com',//creds.USER,
            pass: 'pasv', //creds.PASS
        }
    })

    const mailOptions = {
        to: `${req.body.email}`,
        from: 'test@test.com',//creds.USER,
        subject: `${req.body.name}`,
        text: `${req.body.message}`,
       // replyTo: `${req.body.email}`
    }
    transporter.sendMail(mailOptions, function(err, mailRes) {
        if (err) {
            console.error('there was an error: ', err);
            res.status(400).json('error happened while sending email');
        } else {
            console.log('here is the res: ', mailRes);
            res.status(200).json('Email Sent');
        }
    })

}

