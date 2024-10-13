class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product) {
        const ProductList = document.getElementById('Product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong>: ${product.name}
                <strong>Product Price</strong>: ${product.price}
                <strong>Product Year</strong>: ${product.year}
                <a href="class="btn btn-danger" name="delete" >Delete</a>
            </div>
            </div>
        `;
    ProductList.appendChild(element);

}


resetform(){
    document.getElementById('Product-form').reset();
}


deleteProduct() {
    if(element.name === 'delete'){
        element.parentElement.parentElement.parentElement.remove();
        this.showMessage(' Product Delete', 'danger', 'info');
    }
}

showMessage(message, cssClass){
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-3`;
    div.appendChild(document.createTextNode(message));
    //Showing in DOM
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}
}

// DOM Events
document.getElementById('Product-form')
    .addEventListener('submit',function(e){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;

   

   const product = new Product(name, price, year);

    const ui = new UI();

if(name === '' || price === '' || year === ''){
    return ui.showMessage('Please fill in all fields', 'danger', 'info');
}

    ui.addProduct(product);
    ui.resetform();
    ui.showMessage('Product Added!', 'success');

   e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target.name);
})