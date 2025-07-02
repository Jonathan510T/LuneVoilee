// lib/stripe.ts
import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY!;
if (!secretKey) throw new Error('STRIPE_SECRET_KEY missing');

export const stripe = new Stripe(secretKey);  // SDK uses your account’s default
