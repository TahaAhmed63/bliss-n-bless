"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // Changed import to next/navigation
import { CheckCircle, ShoppingBag, XCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import Link from 'next/link';

const OrderConfirmation = ({searchParams }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const { clearCart } = useCart();
  const router = useRouter();

  const { session_id } = searchParams;// Use useParams hook to get session_id from params
console.log(session_id)
  useEffect(() => {
    const verifyPayment = async () => {
      if (!session_id) {
        toast.error("Payment information missing");
        router.push('/checkout');
        return;
      }
      
      try {
        setIsLoading(true);
        const response = await fetch(`/api/verify-payment?session_id=${session_id}`);
        const data = await response.json();
        
        if (data.success) {
          const orderDetails = JSON.parse(localStorage.getItem('currentOrderDetails') || '{}');
          localStorage.removeItem('currentOrderDetails');
          
          await fetch('/api/placeorder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...orderDetails,
              paymentMethod: 'card',
              paymentId: data.paymentId,
            }),
          });
          
          setOrderConfirmed(true);
          clearCart();
          toast.success("Order placed successfully!");
        } else {
          toast.error("Payment was not completed successfully");
          router.push('/checkout');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        toast.error("There was a problem verifying your payment");
      } finally {
        setIsLoading(false);
      }
    };
    
    if (session_id) {
      verifyPayment();
    }
  }, [clearCart, router, session_id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 bg-luxury-black">
        <div className="luxury-container py-16 text-center">
          <div className="animate-pulse">
            <div className="h-16 w-16 rounded-full bg-luxury-gray mx-auto mb-4"></div>
            <div className="h-8 w-64 bg-luxury-gray mx-auto mb-4"></div>
            <div className="h-4 w-80 bg-luxury-gray mx-auto"></div>
          </div>
          <p className="text-gray-400 mt-8">Verifying your payment...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 bg-luxury-black">
      <div className="luxury-container py-16 text-center">
        {orderConfirmed ? (
          <>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-cormorant font-bold mb-4">Thank You For Your Order</h1>
            <p className="text-gray-400 mb-8">Your order has been placed successfully.</p>
            <p className="text-gray-300 mb-8">
              A confirmation email has been sent to your email address with all the details.
            </p>
            <Link 
              href="/"
              className="btn-gold rounded-md px-6 py-3 inline-flex items-center"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </>
        ) : (
          <>
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-cormorant font-bold mb-4">Something Went Wrong</h1>
            <p className="text-gray-400 mb-8">We couldn't process your order.</p>
            <Link 
              href="/checkout"
              className="btn-gold rounded-md px-6 py-3 inline-flex items-center"
            >
              Return to Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
