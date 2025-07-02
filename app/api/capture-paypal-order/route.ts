// app/api/capture-paypal-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';

const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID!,
  process.env.PAYPAL_CLIENT_SECRET!,
);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: NextRequest) {
  const { orderID } = await req.json();

  // build the capture request (no body required)
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  //  └─ remove   request.requestBody({...})

  const capture = await client.execute(request);

  return NextResponse.json({ status: capture.result.status });
}
