import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_secret) {
      return NextResponse.json(
        { error: 'Razorpay credentials not configured' },
        { status: 500 }
      );
    }

    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Signature mismatch' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
    });
  } catch (error: any) {
    console.error('Error verifying Razorpay payment:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
