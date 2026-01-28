export class PaymentService {
  processPayment(userId, amount) {
    console.log(`[Payment] Processing payment of $${amount} for user ${userId}...`);
    // In a real app, this would connect to a payment gateway.
    console.log('[Payment] Payment successful.');
    return true;
  }
}
