// =====================================
// EAZYMART PRODUCTS + FILTER SYSTEM
// =====================================


// =====================================
// PRODUCTS DATA
// =====================================

const products = [

    {
        id: 1,
        name: "Urban Running Shoes",
        category: "Footwear",
        price: 1599,
        oldPrice: 1999,
        rating: 4.8,
        stock: true,
        icon: "fa-shoe-prints",
        badge: "-20%",
        link: "product.html?product=shoes"
    },

    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 2999,
        rating: 4.7,
        stock: true,
        icon: "fa-headphones",
        badge: "SALE",
        link: "product.html?product=headphones"
    },

    {
        id: 3,
        name: "Smart Watch Pro",
        category: "Accessories",
        price: 3999,
        oldPrice: 4999,
        rating: 4.9,
        stock: true,
        icon: "fa-clock",
        badge: "NEW",
        link: "product.html?product=watch"
    },

    {
        id: 4,
        name: "Premium Travel Backpack",
        category: "Bags",
        price: 1199,
        oldPrice: 1599,
        rating: 4.6,
        stock: true,
        icon: "fa-backpack",
        badge: "-25%",
        link: "product.html?product=backpack"
    },

    {
        id: 5,
        name: "Classic Casual T-Shirt",
        category: "Fashion",
        price: 799,
        oldPrice: 999,
        rating: 4.4,
        stock: true,
        icon: "fa-shirt",
        badge: "NEW",
        link: "products.html"
    },

    {
        id: 6,
        name: "Smartphone Pro Max",
        category: "Electronics",
        price: 4999,
        oldPrice: 5999,
        rating: 4.9,
        stock: true,
        icon: "fa-mobile-screen-button",
        badge: "HOT",
        link: "products.html"
    },

    {
        id: 7,
        name: "Premium Wrist Watch",
        category: "Accessories",
        price: 2899,
        oldPrice: 3499,
        rating: 4.5,
        stock: true,
        icon: "fa-watch",
        badge: "SALE",
        link: "products.html"
    },

    {
        id: 8,
        name: "Everyday Casual Sneakers",
        category: "Footwear",
        price: 2199,
        oldPrice: 2799,
        rating: 4.3,
        stock: false,
        icon: "fa-shoe-prints",
        badge: "SOLD OUT",
        link: "products.html"
    }

];


// =====================================
// CART
// =====================================

let eazyCart = [];


// =====================================
// GET HTML ELEMENTS
// =====================================

const productsGrid =
    document.getElementById("productsGrid");

const noProducts =
    document.getElementById("noProducts");

const productSearch =
    document.getElementById("productSearch");

const sortProducts =
    document.getElementById("sortProducts");

const clearFilters =
    document.getElementById("clearFilters");

const maxPrice =
    document.getElementById("maxPrice");

const priceValue =
    document.getElementById("priceValue");


// =====================================
// DISPLAY PRODUCTS
// =====================================

function displayProducts(productList) {

    if (!productsGrid) {
        return;
    }

    productsGrid.innerHTML = "";

    if (productList.length === 0) {

        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;
    }

    if (noProducts) {
        noProducts.style.display = "none";
    }


    productList.forEach(function (product) {

        const stars = createStars(product.rating);

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    class="wishlist-btn"
                    data-id="${product.id}"
                    title="Add to Wishlist"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

                <div class="product-visual">

                    <i class="fa-solid ${product.icon}"></i>

                </div>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-rating">

                    ${stars}

                    <span>
                        ${product.rating}
                    </span>

                </div>


                <div class="product-bottom">

                    <div class="product-price">

                        <strong>
                            ₹${product.price.toLocaleString()}
                        </strong>

                        <del>
                            ₹${product.oldPrice.toLocaleString()}
                        </del>

                    </div>

                </div>


                <button
                    class="add-cart-btn"
                    data-id="${product.id}"
                    ${!product.stock ? "disabled" : ""}
                >

                    <i class="fa-solid fa-cart-shopping"></i>

                    ${
                        product.stock
                        ? "Add to Cart"
                        : "Sold Out"
                    }

                </button>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}


// =====================================
// CREATE STARS
// =====================================

function createStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (rating >= i) {

            stars += `
                <i class="fa-solid fa-star"></i>
            `;

        } else {

            stars += `
                <i class="fa-regular fa-star"></i>
            `;

        }

    }

    return stars;
}


// =====================================
// FILTER PRODUCTS
// =====================================

function filterProducts() {

    let filteredProducts = [...products];


    // SEARCH
    const searchText =
        productSearch
        ? productSearch.value.toLowerCase().trim()
        : "";


    if (searchText !== "") {

        filteredProducts =
            filteredProducts.filter(function (product) {

                return (

                    product.name
                    .toLowerCase()
                    .includes(searchText)

                    ||

                    product.category
                    .toLowerCase()
                    .includes(searchText)

                );

            });

    }


    // CATEGORY
    const selectedCategory =
        document.querySelector(
            'input[name="category"]:checked'
        );


    if (
        selectedCategory &&
        selectedCategory.value !== "All"
    ) {

        filteredProducts =
            filteredProducts.filter(function (product) {

                return product.category ===
                    selectedCategory.value;

            });

    }


    // PRICE
    const selectedPrice =
        maxPrice
        ? Number(maxPrice.value)
        : 5000;


    filteredProducts =
        filteredProducts.filter(function (product) {

            return product.price <= selectedPrice;

        });


    // RATING
    const selectedRating =
        document.querySelector(
            'input[name="rating"]:checked'
        );


    if (
        selectedRating &&
        selectedRating.value !== "all"
    ) {

        const minimumRating =
            Number(selectedRating.value);

        filteredProducts =
            filteredProducts.filter(function (product) {

                return product.rating >= minimumRating;

            });

    }


    // STOCK
    const stockFilter =
        document.getElementById("stockFilter");


    if (
        stockFilter &&
        stockFilter.checked
    ) {

        filteredProducts =
            filteredProducts.filter(function (product) {

                return product.stock === true;

            });

    }


    // SORT
    const sortValue =
        sortProducts
        ? sortProducts.value
        : "featured";


    if (sortValue === "low-high") {

        filteredProducts.sort(function (a, b) {

            return a.price - b.price;

        });

    }


    if (sortValue === "high-low") {

        filteredProducts.sort(function (a, b) {

            return b.price - a.price;

        });

    }


    if (sortValue === "rating") {

        filteredProducts.sort(function (a, b) {

            return b.rating - a.rating;

        });

    }


    if (sortValue === "name") {

        filteredProducts.sort(function (a, b) {

            return a.name.localeCompare(b.name);

        });

    }


    displayProducts(filteredProducts);

}


// =====================================
// CATEGORY FILTER
// =====================================

const categoryFilters =
    document.querySelectorAll(
        'input[name="category"]'
    );


categoryFilters.forEach(function (filter) {

    filter.addEventListener(
        "change",
        filterProducts
    );

});


// =====================================
// RATING FILTER
// =====================================

const ratingFilters =
    document.querySelectorAll(
        'input[name="rating"]'
    );


ratingFilters.forEach(function (filter) {

    filter.addEventListener(
        "change",
        filterProducts
    );

});


// =====================================
// SEARCH
// =====================================

if (productSearch) {

    productSearch.addEventListener(
        "input",
        filterProducts
    );

}


// =====================================
// SORT
// =====================================

if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        filterProducts
    );

}


// =====================================
// PRICE SLIDER
// =====================================

if (maxPrice) {

    maxPrice.addEventListener(
        "input",
        function () {

            if (priceValue) {

                priceValue.textContent =
                    "₹" +
                    Number(maxPrice.value)
                    .toLocaleString();

            }

            filterProducts();

        }
    );

}


// =====================================
// STOCK FILTER
// =====================================

const stockFilter =
    document.getElementById("stockFilter");


if (stockFilter) {

    stockFilter.addEventListener(
        "change",
        filterProducts
    );

}


// =====================================
// CLEAR FILTERS
// =====================================

if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        function () {

            // Category
            const allCategory =
                document.querySelector(
                    'input[name="category"][value="All"]'
                );

            if (allCategory) {
                allCategory.checked = true;
            }


            // Rating
            const allRating =
                document.querySelector(
                    'input[name="rating"][value="all"]'
                );

            if (allRating) {
                allRating.checked = true;
            }


            // Price
            if (maxPrice) {

                maxPrice.value = 5000;

            }


            if (priceValue) {

                priceValue.textContent = "₹5,000";

            }


            // Stock
            if (stockFilter) {

                stockFilter.checked = false;

            }


            // Search
            if (productSearch) {

                productSearch.value = "";

            }


            // Sort
            if (sortProducts) {

                sortProducts.value = "featured";

            }


            filterProducts();

        }
    );

}


// =====================================
// ADD TO CART
// =====================================

function addToCart(productId) {

    const product =
        products.find(function (item) {

            return item.id === productId;

        });


    if (!product) {

        return;

    }


    if (!product.stock) {

        alert("This product is currently sold out.");

        return;

    }


    const existingProduct =
        eazyCart.find(function (item) {

            return item.id === productId;

        });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        eazyCart.push({

            id: product.id,

            name: product.name,

            category: product.category,

            price: product.price,

            icon: product.icon,

            quantity: 1

        });

    }


    updateCartCount();


    alert(
        product.name +
        " added to cart 🛒"
    );

}


// =====================================
// CART COUNT
// =====================================

function updateCartCount() {

    const totalItems =
        eazyCart.reduce(
            function (total, item) {

                return total + item.quantity;

            },
            0
        );


    const cartBadges =
        document.querySelectorAll(
            ".cart-nav b"
        );


    cartBadges.forEach(function (badge) {

        badge.textContent =
            totalItems;

    });

}


// =====================================
// ADD CART BUTTON EVENT
// =====================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".add-cart-btn"
            );


        if (!button) {

            return;

        }


        const productId =
            Number(
                button.dataset.id
            );


        addToCart(productId);

    }
);


// =====================================
// WISHLIST BUTTON
// =====================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".wishlist-btn"
            );


        if (!button) {

            return;

        }


        const icon =
            button.querySelector("i");


        if (!icon) {

            return;

        }


        if (
            icon.classList.contains(
                "fa-regular"
            )
        ) {

            icon.classList.remove(
                "fa-regular"
            );

            icon.classList.add(
                "fa-solid"
            );

            button.classList.add(
                "active"
            );

        } else {

            icon.classList.remove(
                "fa-solid"
            );

            icon.classList.add(
                "fa-regular"
            );

            button.classList.remove(
                "active"
            );

        }

    }
);


// =====================================
// DOUBLE CLICK → PRODUCT DETAILS
// =====================================

document.addEventListener(
    "dblclick",
    function (event) {

        const card =
            event.target.closest(
                ".product-card"
            );


        if (!card) {

            return;

        }


        if (
            event.target.closest(
                ".add-cart-btn"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".wishlist-btn"
            )
        ) {

            return;

        }


        const cards =
            [...document.querySelectorAll(
                ".product-card"
            )];


        const index =
            cards.indexOf(card);


        if (index !== -1) {

            const visibleProducts =
                getCurrentlyVisibleProducts();

            const product =
                visibleProducts[index];


            if (
                product &&
                product.link
            ) {

                window.location.href =
                    product.link;

            }

        }

    }
);


// =====================================
// GET CURRENT VISIBLE PRODUCTS
// =====================================

function getCurrentlyVisibleProducts() {

    let result = [...products];


    const searchText =
        productSearch
        ? productSearch.value
            .toLowerCase()
            .trim()
        : "";


    if (searchText) {

        result =
            result.filter(function (product) {

                return (
                    product.name
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(searchText)
                );

            });

    }


    const selectedCategory =
        document.querySelector(
            'input[name="category"]:checked'
        );


    if (
        selectedCategory &&
        selectedCategory.value !== "All"
    ) {

        result =
            result.filter(function (product) {

                return product.category ===
                    selectedCategory.value;

            });

    }


    const price =
        maxPrice
        ? Number(maxPrice.value)
        : 5000;


    result =
        result.filter(function (product) {

            return product.price <= price;

        });


    const selectedRating =
        document.querySelector(
            'input[name="rating"]:checked'
        );


    if (
        selectedRating &&
        selectedRating.value !== "all"
    ) {

        result =
            result.filter(function (product) {

                return product.rating >=
                    Number(selectedRating.value);

            });

    }


    if (
        stockFilter &&
        stockFilter.checked
    ) {

        result =
            result.filter(function (product) {

                return product.stock;

            });

    }


    return result;

}


// =====================================
// INITIAL DISPLAY
// =====================================

displayProducts(products);

updateCartCount();