// TODO: Implement the Singleton pattern.
// 1. Create a variable `instance` to hold the single instance of the class.
// 2. In the constructor, check if `instance` already exists.
// 3. If it exists, return `instance`.
// 4. If it does not exist, initialize the class properties (like `this.products`)
//    and assign the new instance to `instance`.
// 5. Export the class.

class CartService {
    constructor() {
        // ... your implementation here ...
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    }

    getProducts() {
        return this.products;
    }
}

export { CartService };
