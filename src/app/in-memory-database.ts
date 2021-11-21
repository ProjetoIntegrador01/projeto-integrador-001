import { InMemoryDbService } from "angular-in-memory-web-api";

import { Product } from "./components/product/product.model";

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                id: 1, name: 'Alface', price: 4.50, quantity: 10
            },
            {
                id: 2, name: 'Tomate', price: 4.00, quantity: 20
            },
            {
                id: 3, name: 'Couve', price: 5.00, quantity: 5
            },
            {
                id: 4, name: 'Pepino', price: 2.50, quantity: 8
            }
        ]

        return { products }
    }
}