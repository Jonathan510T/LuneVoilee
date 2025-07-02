// app/api/create-checkout-session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();

    // build line_items from cart …
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: cart.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/checkout`,
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (err) {
    console.error('checkout-session error →', err);
    return NextResponse.json({ error: 'internal error' }, { status: 500 });
  }
}
