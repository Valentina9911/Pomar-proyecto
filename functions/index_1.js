
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template;

sgMail.setApiKey(SENDGRID_API_KEY)

exports.date = functions.https.onRequest((req, res) => {
    
    let email = req.query.email;
    let name = req.query.name;

    const msgOne = {
        to: email,
        from: 'pcp@promotoraconvivienda.com',
        subject: 'Bienvenido a Pomar',
        dynamic_template_data: {
            name: name,
        },
        templateId: TEMPLATE_ID
    }

    return sgMail
        .send(msgOne)
        .then(() => {
            // Celebrate
            return res.status(200).json({
                message: 'Mensaje enviado'
            })
        })
        .catch(error => {
            // Log friendly error
            console.error(error);
            if (error.response) {
            // Extract error msg
                const {message, code, response} = error;
                // Extract response msg
                const {headers, body} = response;

                console.error(body);

                return res.status(500).json({
                    message: 'Error'
                })
            }
        });
});