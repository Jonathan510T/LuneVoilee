// app/api/create-payment-intent/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();             // expect [{ price, quantity }]
    const amount = cart.reduce(
      (t: number, i: any) => t + i.price * i.quantity,
      0,
    );

    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err) {
    console.error('create-payment-intent failed', err);
    return NextResponse.json(
      { error: 'Internal issue creating payment intent' },
      { status: 500 },
    );
  }
}
