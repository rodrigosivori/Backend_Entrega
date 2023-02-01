class ProductManager {
    constructor(){
        this.products = [];
    }
    
    static id = 0;

    addProducts(title, description, price, thumbnail, code, stock){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code ){      
                console.log("ERROR: Ya existe");
            }
        }
        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id = ProductManager.id + 1;
            this.products.push({
                ...newProduct,
                id: ProductManager.id});
        } else {
            console.log("Todos los campos son requeridos");
        }
    }

    
    getProducts(){
        return this.products;
    }
    
    exist(id) {
        return this.products.find((products) => products.id === id);
    }
    
    getProductsById(id){
        if(this.exist(id)){
            console.log(this.exist(id));
        } else {
            console.log('Not found');
        }
    }
    

    updateProducts(id, price){
        if(this.exist(id)){
            this.products.splice(2, 1, price)
            console.log("Se realizo correctamente el cambio")
        } else {
            console.log("No existe ID para actualizar");
        }
    }
    

    deleteProducts(id){
        if(this.exist(id)){
            return this.products.splice(0, 7),
                console.log("EL PRODUCTO SE BORRO CORRECTAMENTE");
        } else {
                console.log("No existe ID para eliminar");
            }
    }
    
}

let producto = new ProductManager([])

// 1
console.log("getProducts devuelve arreglo vacio: ");
console.log(producto.getProducts());   

// 2
producto.addProducts("Producto prueba", "Esto es un producto prueba", 200, "Sin imagen", "abc123", "vacio", 25); 

// 3
console.log("getProducts devuelve el nuevo producto: ");
console.log(producto.getProducts());

// 4
console.log("addProducts devuelve error porque ya existe: ");
producto.addProducts("Producto prueba", "Esto es un producto prueba", 200, "Sin imagen", "abc123", "vacio", 25); 

// 5
console.log("getProductsById devuelve el producto que coincida con el id: ");
producto.getProductsById(1);

// 6
console.log("getProductsById devuelve error si el id no esta: ");
producto.getProductsById(5);

// 7
console.log("updateProducts actualizara el valor PRICE por el que le pasemos (id, price)");
producto.updateProducts(2, 3)
producto.getProductsById(2);


// 8
console.log("deleteProduct devuelve si se borro el producto o si no hay producto a borrar; ");
producto.deleteProducts(1)
producto.getProductsById(1)

 



