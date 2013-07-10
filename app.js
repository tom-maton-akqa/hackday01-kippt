var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "owain.llew@gmail.com",
       pass: "7321SK8on7321-"
   }
});

smtpTransport.sendMail({
   from: "<me@example.com>", // sender address
   to: "owain.llew@gmail.com", // comma separated list of receivers
   subject: "Node SMTP Server", // Subject line
   text: "If you guys are receieving this then I have successfully created a node SMTP Server! :)" // plaintext body
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
});
