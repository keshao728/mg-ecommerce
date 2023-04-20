import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  'pk_test_51MyVNvAOU2X4jYwWGbrdJkzZhQifsqQbw1xaRDiWpusK0ys7i4mGdRURGEn5yBxXv36agutbXaEeDkLMjeDaEK2g00BFdJnGdE'
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
        <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);
