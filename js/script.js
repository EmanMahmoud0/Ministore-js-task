let user = document.getElementById("user");
let userName = document.getElementById("user-info");

if ( localStorage.getItem("email") ) {
    user.remove()
    userName.innerHTML = `${localStorage.getItem("firstName")} <a href="login.html">  Logout</a>`;
}
//////////////////////////////////////////////////////////////
let mobilesProducts = document.getElementById("mobiles");
let watchesProducts = document.getElementById("watches");
let products = [
    {
        id : 1,
        category : "phone",
        title : "Iphone-11",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item1.jpg"
    },
    {
        id : 2,
        category : "phone",
        title : "Iphone-10",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item2.jpg"
    },
    {
        id : 3,
        category : "phone",
        title : "Iphone-8",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item3.jpg"
    },
    {
        id : 4,
        category : "phone",
        title : "Iphone-13",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item4.jpg"
    },
    {
        id : 5,
        category : "watch",
        title : "Pink watch",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item6.jpg"
    },
    {
        id : 6,
        category : "watch",
        title : "Heavy watch",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item7.jpg"
    },
    {
        id : 7,
        category : "watch",
        title : "Spotted watch",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item8.jpg"
    },
    {
        id : 8,
        category : "watch",
        title : "Black watch",
        description : "Here we can write some features about the product.",
        ImageUrl : "imgs/product-item9.jpg"
    },
    
];
function addProducts () {
    let x = products.map(
        (item) => {
            return `
            <div class="card shadow" style="width: 18rem;">
                <img src=${item.ImageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="product-action d-flex justify-content-between">
                        <a href="#" class="btn btn-dark" onclick ="addToCart(${item.id})">add to Cart</a>
                        <a href="#" class="btn btn-dark" onclick="addToFav(${item.id})"><i class="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
            `
        }
    );
    products.forEach((item, index) => {
        if( item.category === "phone" ) {
            mobilesProducts.innerHTML += x[index];
        } else if ( item.category === "watch" ) {
            watchesProducts.innerHTML += x[index];
        }
    });                   
}
addProducts()
///////////////////////////////////////////////////////////////////
let cartProducts = document.querySelector(".cart-products");
let choosenProduct = document.querySelector(".choosen-product");
let count = document.querySelector(".count");
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if (addedItem) {
    addedItem.map((item) => {
        choosenProduct.innerHTML += `<p>${item.title}</p>`;
        count.innerHTML = addedItem.length;
    })
}
if (localStorage.getItem = ("email")){
    function addToCart(id) {
        let y = products.find((item) => item.id === id );
        choosenProduct.innerHTML += `<p>${y.title}</p>`;
        addedItem =[...addedItem , y];
        localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
        let cartProductsLength = document.querySelectorAll(".cart-products .choosen-product p");
        count.innerHTML = cartProductsLength.length;
    }
} else {
    window.location = "login.html";
}
////////////////////////////////////////////////////////////////////

let  shoppingCartIcon = document.querySelector(".shopping-cart");
function opencart (){
    if ( choosenProduct.innerHTML !== "" ){
        if ( cartProducts.style.display == "block") {
            cartProducts.style.display = "none"
        } else {
            cartProducts.style.display = "block"
        }
    } else {
        choosenProduct.innerHTML = `shopping cart is empty go to add products <hr>`
    }
}
///////////////////////////////////////////////////////////////////////
let favItem = document.querySelector(".fav-items")
if (localStorage.getItem = ("email")){
    function addToFav (id) {
        let y = products.find((item) => item.id === id );
        favItem.innerHTML += `<p>${y.title}</p>`;
        addedItem =[...addedItem , y];
        localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
    }
} else {
    window.location = "login.html";
}

let  heartIcon = document.querySelector(".fav");
function openFav (){
    if ( favItem.innerHTML !== "" ){
        if ( favItem.style.display == "block") {
            favItem.style.display = "none"
        } else {
            favItem.style.display = "block"
        }
    }
}
/////////////////////////////////////////////////////////////////////
//- Search function
//1. get search mood function
// let searchMood = "name";
// function getSearchMood (id){
//     let search = document.querySelector(".search");
//     if ( id === "searchtitle" ) {
//         searchMood = "Title";
//     }else{
//         searchMood = "Category";   
//     }
//     search.placeholder = "Search By " + searchMood;
//     search.focus();
//     search.value = '';
//     addProducts();
// }
//2. search function
let searchTitle = document.getElementById("search-title");
let searchCategory = document.getElementById("search-category");
function searchData (value) {
        for ( let i = 0; i < products.length; i++ ){
            if( products[i].title.includes(value.toLowerCase())){
                return `
            <div class="card shadow" style="width: 18rem;">
                <img src=${products.ImageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${products.title}</h5>
                    <p class="card-text">${products.description}</p>
                    <div class="product-action d-flex justify-content-between">
                        <a href="#" class="btn btn-dark" onclick ="addToCart(${products.id})">add to Cart</a>
                        <a href="#" class="btn btn-dark" onclick="addToFav(${products.id})"><i class="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
            `;
            } else if( products[i].category.includes(value.toLowerCase())){
                return `
            <div class="card shadow" style="width: 18rem;">
                <img src=${products.ImageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${products.title}</h5>
                    <p class="card-text">${products.description}</p>
                    <div class="product-action d-flex justify-content-between">
                        <a href="#" class="btn btn-dark" onclick ="addToCart(${products.id})">add to Cart</a>
                        <a href="#" class="btn btn-dark" onclick="addToFav(${products.id})"><i class="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
            `;
            }
        }
    products.forEach((item, index) => {
        if( item.category === "phone" ) {
            mobilesProducts.innerHTML += products[index];
        } else if ( item.category === "watch" ) {
            watchesProducts.innerHTML += products[index];
        }
    });                   
}


