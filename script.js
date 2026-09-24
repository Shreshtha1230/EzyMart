// ================= CART =================

let cartCount = 0;

const cartButton = document.querySelector(".cart");
const cartCounter = document.querySelector(".cart-count");

if (cartButton) {
    cartButton.addEventListener("click", function () {

        if (cartCount === 0) {

            alert("Your EazyCart is empty!");

        } else {

            alert(
                "You have " +
                cartCount +
                " item(s) in your cart."
            );

        }

    });
}


// ================= EXPLORE STORE =================

const exploreButton =
    document.querySelector(".btn-primary");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        alert("Welcome to EazyCart 🛒");

    });

}


// ================= CATEGORIES =================

const categoryButton =
    document.querySelector(".btn-secondary");

if (categoryButton) {

    categoryButton.addEventListener("click", function () {

        alert("Categories section coming soon!");

    });

}


// ================= NAVIGATION =================

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// =====================================
// EZYMART SEARCH SYSTEM
// =====================================


// SEARCH ELEMENTS

const searchOpen =
    document.getElementById("searchOpen");

const searchClose =
    document.getElementById("searchClose");

const searchOverlay =
    document.getElementById("searchOverlay");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


// =====================================
// PRODUCTS
// =====================================

const searchProducts = [

    {
        name: "Urban Running Shoes",
        category: "Footwear",
        icon: "fa-shoe-prints",
        link: "product.html?product=shoes"
    },

    {
        name: "Wireless Headphones",
        category: "Electronics",
        icon: "fa-headphones",
        link: "product.html?product=headphones"
    },

    {
        name: "Smart Watch Pro",
        category: "Accessories",
        icon: "fa-clock",
        link: "product.html?product=watch"
    },

    {
        name: "Premium Travel Backpack",
        category: "Fashion",
        icon: "fa-backpack",
        link: "product.html?product=backpack"
    }

];


// =====================================
// OPEN SEARCH
// =====================================

if (
    searchOpen &&
    searchOverlay &&
    searchInput
) {

    searchOpen.addEventListener("click", function () {

        searchOverlay.classList.add("active");

        setTimeout(function () {

            searchInput.focus();

        }, 300);

    });

}


// =====================================
// CLOSE SEARCH
// =====================================

if (
    searchClose &&
    searchOverlay &&
    searchInput
) {

    searchClose.addEventListener("click", function () {

        closeSearch();

    });

}


// =====================================
// CLOSE FUNCTION
// =====================================

function closeSearch() {

    if (!searchOverlay || !searchInput) {
        return;
    }

    searchOverlay.classList.remove("active");

    searchInput.value = "";

    showSearchHints();

}


// =====================================
// CLICK OUTSIDE
// =====================================

if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === searchOverlay) {

                closeSearch();

            }

        }
    );

}


// =====================================
// ESC KEY
// =====================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSearch();

        }

    }
);


// =====================================
// SEARCH INPUT
// =====================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();


            // EMPTY SEARCH

            if (query === "") {

                showSearchHints();

                return;

            }


            // FILTER PRODUCTS

            const results =
                searchProducts.filter(
                    function (product) {

                        return (

                            product.name
                                .toLowerCase()
                                .includes(query)

                            ||

                            product.category
                                .toLowerCase()
                                .includes(query)

                        );

                    }
                );


            displaySearchResults(
                results,
                query
            );

        }
    );

}


// =====================================
// DISPLAY SEARCH RESULTS
// =====================================

function displaySearchResults(
    results,
    query
) {

    if (!searchResults) {
        return;
    }


    // NO RESULTS

    if (results.length === 0) {

        searchResults.innerHTML = `

            <div class="no-results">

                <i
                    class="fa-solid fa-face-frown"
                    style="
                        font-size:35px;
                        margin-bottom:12px;
                    ">
                </i>

                <p>
                    No products found for
                    "<strong>${query}</strong>"
                </p>

            </div>

        `;

        return;

    }


    // SHOW RESULTS

    searchResults.innerHTML =
        results.map(
            function (product) {

                return `

                    <div
                        class="search-result-item"
                        onclick="openSearchProduct('${product.link}')"
                    >

                        <div class="search-result-icon">

                            <i
                                class="fa-solid ${product.icon}">
                            </i>

                        </div>


                        <div class="search-result-info">

                            <h4>
                                ${product.name}
                            </h4>

                            <p>
                                ${product.category}
                            </p>

                        </div>

                    </div>

                `;

            }
        ).join("");

}


// =====================================
// OPEN PRODUCT
// =====================================

function openSearchProduct(link) {

    window.location.href = link;

}


// =====================================
// DEFAULT SEARCH HINTS
// =====================================

function showSearchHints() {

    if (!searchResults) {
        return;
    }


    searchResults.innerHTML = `

        <p class="search-hint">
            Try searching for:
        </p>


        <div class="search-tags">

            <button
                type="button"
                onclick="setSearch('Headphones')">

                Headphones

            </button>


            <button
                type="button"
                onclick="setSearch('Shoes')">

                Shoes

            </button>


            <button
                type="button"
                onclick="setSearch('Smart Watch')">

                Smart Watch

            </button>


            <button
                type="button"
                onclick="setSearch('Backpack')">

                Backpack

            </button>

        </div>

    `;

}


// =====================================
// SEARCH TAG
// =====================================

function setSearch(value) {

    if (!searchInput) {
        return;
    }

    searchInput.value = value;

    searchInput.dispatchEvent(
        new Event("input")
    );

}