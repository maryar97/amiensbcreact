import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';



const PUBLIC_KEY = "pk_test_51OGrEOEp0nRmZ5Z0Yk27t7agEXQ5Wir3psM3bayyfsWqRPoI2vX9lfZrXsqMgeMz4w3calMbG3pl8qZNkBPEfQUS00JU4qEJPx";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ()=>{
    return(
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm/>
        </Elements>
    );
};

export default Stripe;