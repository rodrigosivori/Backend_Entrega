class ProductManager {
    constructor(products){
        this.products = products;
    }
    
    addProducts(title, description, price, thumbnail, code, stock){
        if(this.products.some(products => products.code === code )){       
            console.log("ERROR: Ya existe");
        }else{
            this.products.push({title, description, price, thumbnail, code, stock, id: Math.floor(Math.random() * 2 )}); //Para probar getPorductById el 999 se puede poner en 2 para reducir el azar del numero.
        }
    }
    
    getProducts(product){
        console.log(product);
    }
    
    
    getProductsById(id){
        if(this.products.some(products => products.id === id )){
            let filterProduct = this.products.filter(products => products.id === id)
            console.log(filterProduct);
        } else {
            console.log('Not found');
        }
    }
    
    
    
}

let producto = new ProductManager([])

producto.addProducts("Producto prueba", "Esto es un producto prueba", 200, "Sin imagen", "abc123", "vacio", 25)
console.log(producto.getProducts(producto));
producto.addProducts("Producto prueba", "Esto es un producto prueba", 200, "Sin imagen", "abc123", "vacio", 25)
console.log(producto.getProducts(producto));
console.log(producto.getProductsById(1));
