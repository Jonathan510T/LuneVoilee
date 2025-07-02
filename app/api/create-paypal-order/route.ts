import { NextRequest, NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';

const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID!,
  process.env.PAYPAL_CLIENT_SECRET!,
);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: NextRequest) {
  const { cart } = await req.json();             // [{ name, price, quantity }, …]

  // Convert cart to purchase_units
  const total = cart.reduce(
    (sum: number, i: any) => sum + i.price * i.quantity,
    0,
  );

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: total.toFixed(2),
        },
      },
    ],
  });

  const order = await client.execute(request);
  return NextResponse.json({ id: order.result.id });
}
