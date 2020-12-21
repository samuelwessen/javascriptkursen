class Product {
    constructor(name, desc, price) {
        this.name = name
        this.desc = desc
        this.price = price
    }

    inStock = true

    inclVat() {
        return this.price * 1.25
    }

}

let product = new Product('Product 1', 'desc for product', 100)
console.log(product)
console.log(product.inStock)
console.log(product.inclVat)