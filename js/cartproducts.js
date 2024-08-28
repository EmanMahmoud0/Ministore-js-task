let productsInCart = localStorage.getItem("productsInCart");
let allProducts = document.querySelector(".products");
let item = JSON.parse(productsInCart);
if (productsInCart) {
    addCartProducts(item);
}

function addCartProducts (products) {
    let x = products.map(
        (item) => {
            return `
            <div class="card shadow" style="width: 18rem;">
                <img src=${item.ImageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="product-action d-flex justify-content-between">
                        <a href="#" class="btn btn-dark" onclick ="removeFromCart(${item.id})">Remove from Cart</a>
                    </div>
                </div>
            </div>
            `
        }
    );
    allProducts.innerHTML = x ;
};
////////////////////////////////////////
function removeFromCart(id) {
    // item.splice(id,1);
    item = item.filter((item) => item.id !== id );
    localStorage.productsInCart = JSON.stringify(item)
    addCartProducts(item);
}