const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51HfO7aFEbSKa9C2S7wnYkBXsaUWInXLvEZMvVMx9CByv1OZBbEVtFjYOUzMD7KQmBtAzGkNv4AuaaFjiElxW4VYC00HEOlLw9S"
);

  // API

  // - App config
    const app = express();
  // -  midldlewares
    app.use(cors({ origin: true }));
    app.use(express.json());
  // - API routes
    app.get('/', (request, response) => response.status(200).send('Hello world'))
    app.post('/payments/create', async (request, response) => {
        const total = request.query.total;
        console.log('Payment request received BOOM !!! for this amound >> ', total);
         
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // subunits of the currency
            currency: "usd"
        });

        // ok - created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })

    })
  // - Listen command
    exports.api = functions.https.onRequest(app);
    //Example endpoint
    //http://localhost:5001/fir-ba4c3/us-central1/api