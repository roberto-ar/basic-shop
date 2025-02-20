let productos = [];
const alertBox = document.getElementById("alert");

document.getElementById("add-product").addEventListener(("click"), () =>{
    event.preventDefault();
    const Product = {
        code : document.getElementById("code").value,
        stock : document.getElementById("stock").value,
        price : document.getElementById("price").value,
        brand : document.getElementById("brand").value,
        image : document.getElementById("image").value
    }

    const validatedProduct = ProductValidation(Product);

    if(validatedProduct.error){
        return showAlert(validatedProduct.error, "error");
    }
    productos.push(Product);
    document.getElementById("product-form").reset();
    showAlert(validatedProduct.success, "success")
})

function ProductValidation(newProduct){
    if(productos.some(producto => newProduct.code == producto.code)){
        return {
            error : "Error, producto repetido"
        }
    }
    return {
        success : "Producto agregado correctamente"
    }
}

function showAlert(message, type){
    console.log(message)
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
        alertBox.className = "hidden";
    }, 3000);
}

