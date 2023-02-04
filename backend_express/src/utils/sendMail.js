const nodemailer = require("nodemailer");
let url = "http://localhost:3000/reset-password/"
async function sendMail(receiver, token) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "vinntieeng@gmail.com",
            pass: "xvlfyluaeqcpqbqf",
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    let contentHTML = `Please visit link below to reset password: <a href="${url}${token}">${url}${token}</a>`
    let subject = "RESET PASSWORD";
    let content = `Send Email By Nodemailer`;
    let mainOptions = {
        from: "System",
        to: receiver,
        subject: subject,
        text: content,
        html: contentHTML,
    };
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log("Message sent: " + info.response);
        }
    });
}
module.exports = sendMail
