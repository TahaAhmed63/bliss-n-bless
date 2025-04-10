import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { session_id } = await req.json();
    
    if (!session_id) {
      return NextResponse.json({ error: 'Missing session ID' }, { status: 400 });
    }
    
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51OnMG5D3dsM4GvDNJzN9tvy8SVVQld50y4TkZzJprrEihsu6RRUf4VCQJpBYZp3hHlZwXAh3fysJPJMbfdXAoChD00iLEjBSvk');
    
    // Retrieve session to check payment status
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    if (session.payment_status === 'paid') {
      return NextResponse.json({ 
        success: true, 
        customer: session.customer_details,
        paymentId: session.payment_intent,
        paymentStatus: session.payment_status
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        paymentStatus: session.payment_status 
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
