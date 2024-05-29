const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

    let  transport= nodemailer.createTransport({
        host:"mail.developernimul.com",
        port:25,
        secure:false,
        auth:{user:"hello@developernimul.com",pass:"NahiD!@1251@!"},
        tls:{rejectUnauthorized:false}
    })


    let mailOption={
        from:'MERN Ecommerce Solution <hello@developernimul.com>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transport.sendMail(mailOption)
}

module.exports=EmailSend;