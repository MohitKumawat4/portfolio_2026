import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, currency = 'INR', receipt = `receipt_${Date.now()}` } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Amount is required and must be at least 100 paise' },
        { status: 400 }
      );
    }

    const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      return NextResponse.json(
        { error: 'Razorpay credentials not configured' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    if (error.statusCode === 401) {
      return NextResponse.json(
        { error: 'Razorpay authentication failed' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
