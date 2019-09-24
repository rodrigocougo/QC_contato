'use strict';
var createError = require('http-errors');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//source release general
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.send('Hello World! X');
})

app.post('/api/contact', (req, res) => {
    //res.send('Hello World xxx!');

    /* async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
         let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'rodrigo.cougo@quanticcompany.com', // generated ethereal user
                pass: 'quantic@2020*' // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Quantic Company" <contato@quanticcompany.com>', // sender address
            to: 'rodrigocougo@gmail.com', // list of receivers
            subject: 'Teste Titulo', // Subject line
            text: 'Teste corpo', // plain text body
            html: '<b>Hello world?</b>' // html body
        });
        
    }

    main().catch(console.error); */

    nodemailer.createTestAccount((err, account) => {

        const emailsTo = 'alisson.martinho@quanticcompany.com, ' + 
            'rodrigo.cougo@quanticcompany.com, ' + 
            'tiago.weber@quanticcompany.com, ' + 
            'tieres.bronzatto@quanticcompany.com'

        const htmlEmail = 
            '<br/>' + 
            '<b>*** CONTATO DA PAGINA OFICIAL ***</b>' + 
            '<br/><br/>' + 
            '<b>NOME: </b>'  + req.body.name + '<br/>' +
            '<b>E-MAIL: </b>'  + req.body.email + '<br/>' +
            '<b>ASSUNTO: </b>'  + req.body.subject + '<br/>' +
            '<b>DESCRIÇÃO: </b>'  + req.body.description

        let transporter = nodemailer.createTransport({
            host: 'smtp.umbler.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'contato@quanticcompany.com', // generated ethereal user
                pass: 'Qcode123*' // generated ethereal password
            }
        });
        

        let mailOptions = {
            from: '"Quantic Company" <contato@quanticcompany.com>', // sender address
            to: emailsTo, // list of receivers
            subject: 'CONTATO QC - ' + req.body.name + " - " + req.body.company, // Subject line
            text: '', // plain text body
            html: htmlEmail // html body
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                res.send(err);
                return console.log(err);
            }
            res.send(info.message);
            res.send(nodemailer.getTestMessageUrl(info));
            console.log(info.message);
            console.log(nodemailer.getTestMessageUrl(info));
        });
    });
});

//const PORT = process.env.PORT || 3001

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

/* app.listen(3000, () => {
    console.log('Server port')
}) */