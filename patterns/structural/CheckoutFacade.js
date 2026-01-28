import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        // TODO: Implement the Facade method.
        // This method should orchestrate the calls to the subsystem services
        // in the correct order to simplify the checkout process.
        // 1. Check if all products are in stock using `inventoryService.checkStock()`.
        // 2. If they are, process the payment using `paymentService.processPayment()`.
        // 3. If payment is successful, arrange shipping using `shippingService.arrangeShipping()`.
        // 4. Log the result of each step. If a step fails, log it and stop.
        if (!this.inventoryService.checkStock(orderDetails.productIds)) {
            console.log("Order failed: Product is out of stock.");
            return
        }

        if (!this.paymentService.processPayment(orderDetails.userId,orderDetails.amount)) {
            console.log("Order failed: Payment was declined.");
            return; 
        }

        if (!this.shippingService.arrangeShipping(orderDetails.userId,orderDetails.shippingInfo)) {
            console.log("Order failed: Could not arrange shipping (Invalid address or service unavailable).");
            return;
        }
    }
}

export { CheckoutFacade };
