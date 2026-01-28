// The Invoker class
class CommandInvoker {
    constructor() {
        this.history = [];
    }

    executeCommand(command) {
        command.execute();
        this.history.push(command);
    }

    undoLastCommand() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

// The Command interface (conceptual in JS)
class Command {
    execute() {
        throw new Error("Execute method must be implemented.");
    }
    undo() {
        throw new Error("Undo method must be implemented.");
    }
}

// Concrete Command for adding a product to the cart
class AddToCartCommand extends Command {
    constructor(cartService, product) {
        super();
        this.cartService = cartService;
        this.product = product;
    }

    execute() {
        // TODO: Implement the execute method.
        // It should call the `addProduct` method of the `cartService`.
        this.cartService.addProduct(this.product);
    }

    undo() {
        // TODO: Implement the undo method.
        // It should call the `removeProduct` method of the `cartService`,
        // using the product's ID.
        this.cartService.removeProduct(this.product.id);
    }
}

export { CommandInvoker, AddToCartCommand };
