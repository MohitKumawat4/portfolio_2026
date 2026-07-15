'use client';

import React, { useState } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayCheckoutProps {
  amount: number; // Amount in paise (e.g., 50000 for ₹500)
  buttonText?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function RazorpayCheckout({
  amount,
  buttonText = 'Pay Now',
  prefill,
  onSuccess,
  onError,
}: RazorpayCheckoutProps) {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await loadRazorpayScript();

      if (!res) {
        const errorMsg = 'Razorpay SDK failed to load. Are you online?';
        if (onError) onError(errorMsg);
        else alert(errorMsg);
        setLoading(false);
        return;
      }

      // Step 1: Create Order
      const result = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const orderData = await result.json();

      if (!result.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Step 2: Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Standard Checkout',
        description: 'Test Transaction',
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            // Step 3: Verify Payment Signature
            const verifyResult = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResult.json();

            if (verifyResult.ok) {
              if (onSuccess) onSuccess(verifyData);
              else alert('Payment verified successfully!');
            } else {
              throw new Error(verifyData.error || 'Payment verification failed');
            }
          } catch (err: any) {
            if (onError) onError(err.message || 'Payment verification failed');
            else alert(err.message || 'Payment verification failed');
          }
        },
        prefill: prefill || {},
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      
      paymentObject.on('payment.failed', function (response: any) {
        if (onError) {
          onError(response.error.description || 'Payment failed');
        } else {
          alert(`Payment failed: ${response.error.description}`);
        }
      });
      
      paymentObject.open();
    } catch (err: any) {
      if (onError) onError(err.message || 'An error occurred during payment');
      else alert(err.message || 'An error occurred during payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
    >
      {loading ? 'Processing...' : buttonText}
    </button>
  );
}
