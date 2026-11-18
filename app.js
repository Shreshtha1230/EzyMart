/* =========================================================
   EZYMART PRO 2K26 — CENTRAL APPLICATION ENGINE
   Shared State (localStorage) + UI Components + Validation
========================================================= */

const PRODUCTS = [
    {
        id: 1,
        name: "AeroPulse ANC Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 3999,
        rating: 4.8,
        reviews: 342,
        stock: true,
        badge: "BESTSELLER",
        icon: "fa-headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        variants: ["Obsidian Black", "Arctic Silver", "Neon Violet"],
        desc: "40-hour battery life, hybrid active noise cancellation, spatial audio drivers, and ultra-soft memory foam earcups."
    },
    {
        id: 2,
        name: "Urban Glide Running Shoes",
        category: "Footwear",
        price: 1899,
        oldPrice: 2799,
        rating: 4.7,
        reviews: 218,
        stock: true,
        badge: "-32%",
        icon: "fa-shoe-prints",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        variants: ["UK 7", "UK 8", "UK 9", "UK 10"],
        desc: "Breathable engineered mesh upper with responsive air-cushion midsole built for all-day street comfort and sprints."
    },
    {
        id: 3,
        name: "NovaWatch Pro AMOLED",
        category: "Accessories",
        price: 3499,
        oldPrice: 4999,
        rating: 4.9,
        reviews: 489,
        stock: true,
        badge: "NEW",
        icon: "fa-clock",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        variants: ["Midnight Strap", "Titanium Loop", "Sport Orange"],
        desc: "1.43-inch 60Hz AMOLED display, Bluetooth calling, SpO2 & heart-rate sensors, 5ATM water resistance, 10-day battery."
    },
    {
        id: 4,
        name: "Vortex RGB Mechanical Keyboard",
        category: "Gaming",
        price: 2999,
        oldPrice: 4299,
        rating: 4.8,
        reviews: 194,
        stock: true,
        badge: "HOT",
        icon: "fa-keyboard",
        img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
        variants: ["Red Switches", "Blue Switches", "Brown Switches"],
        desc: "Hot-swappable 75% compact aluminum frame with per-key 16.8M RGB lighting and detachable braided USB-C cable."
    },
    {
        id: 5,
        name: "Nomad Tech Travel Backpack",
        category: "Bags",
        price: 1499,
        oldPrice: 2199,
        rating: 4.6,
        reviews: 163,
        stock: true,
        badge: "-30%",
        icon: "fa-briefcase",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        variants: ["Charcoal Grey", "Stealth Black", "Navy Blue"],
        desc: "Water-repellent 28L anti-theft backpack with padded 16-inch laptop vault, USB pass-through port, and luggage strap."
    },
    {
        id: 6,
        name: "HyperStrike Wireless Gaming Mouse",
        category: "Gaming",
        price: 1799,
        oldPrice: 2499,
        rating: 4.7,
        reviews: 276,
        stock: true,
        badge: "PRO",
        icon: "fa-computer-mouse",
        img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
        variants: ["Matte Black", "Frost White"],
        desc: "Ultralight 59g esports mouse with 26,000 DPI optical sensor, 1ms wireless dongle, and 70-hour battery life."
    },
    {
        id: 7,
        name: "StreetCore Oversized Hoodie",
        category: "Fashion",
        price: 1299,
        oldPrice: 1899,
        rating: 4.6,
        reviews: 311,
        stock: true,
        badge: "TRENDING",
        icon: "fa-shirt",
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
        variants: ["S", "M", "L", "XL"],
        desc: "Heavyweight 380 GSM brushed cotton fleece with drop-shoulder streetwear fit and pre-shrunk matte finish."
    },
    {
        id: 8,
        name: "ZenPods Pro Wireless Earbuds",
        category: "Electronics",
        price: 1599,
        oldPrice: 2599,
        rating: 4.5,
        reviews: 405,
        stock: true,
        badge: "SALE",
        icon: "fa-ear-listen",
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
        variants: ["Pearl White", "Graphite Black"],
        desc: "Low-latency 45ms gaming mode, dual-mic ENC clear calls, IPX5 sweat resistance, and fast-charge pocket case."
    },
    {
        id: 9,
        name: "Chrono Steel Analog Watch",
        category: "Accessories",
        price: 2799,
        oldPrice: 3899,
        rating: 4.8,
        reviews: 128,
        stock: true,
        badge: "LUXE",
        icon: "fa-stopwatch",
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
        variants: ["Silver Dial", "Midnight Blue"],
        desc: "Brushed 316L stainless steel case with scratch-resistant mineral crystal and precision Japanese quartz movement."
    },
    {
        id: 10,
        name: "Retro Court High-Top Sneakers",
        category: "Footwear",
        price: 2399,
        oldPrice: 3199,
        rating: 4.9,
        reviews: 184,
        stock: true,
        badge: "LIMITED",
        icon: "fa-shoe-prints",
        img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=600&q=80",
        variants: ["UK 7", "UK 8", "UK 9", "UK 10"],
        desc: "Classic high-top silhouette crafted with supple vegan leather overlays, padded collar, and grippy gum outsole."
    },
    {
        id: 11,
        name: "Polarized Aviator Sunglasses",
        category: "Accessories",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 229,
        stock: true,
        badge: "-40%",
        icon: "fa-glasses",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        variants: ["Gold / Green", "Gunmetal / Smoke"],
        desc: "UV400 polarized lenses that eliminate harsh road glare, paired with featherweight titanium-alloy frames."
    },
    {
        id: 12,
        name: "Studio 4K Action Camera",
        category: "Electronics",
        price: 4999,
        oldPrice: 6999,
        rating: 4.7,
        reviews: 97,
        stock: true,
        badge: "DEAL",
        icon: "fa-camera",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
        variants: ["Standard Kit", "Adventure Bundle"],
        desc: "Crisp 4K60 video with 6-axis electronic stabilization, dual color screens, and waterproof housing up to 30m."
    },
    {
        id: 13,
        name: "Essential Denim Trucker Jacket",
        category: "Fashion",
        price: 1999,
        oldPrice: 2899,
        rating: 4.6,
        reviews: 144,
        stock: true,
        badge: "NEW",
        icon: "fa-shirt",
        img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        variants: ["S", "M", "L", "XL"],
        desc: "Timeless structured denim jacket with brushed metal buttons, twin chest pockets, and all-season layering comfort."
    },
    {
        id: 14,
        name: "ProStream Condenser Microphone",
        category: "Gaming",
        price: 2699,
        oldPrice: 3699,
        rating: 4.8,
        reviews: 156,
        stock: true,
        badge: "CREATOR",
        icon: "fa-microphone",
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
        variants: ["Matte Black", "RGB Edition"],
        desc: "Plug-and-play USB cardioid studio mic with tap-to-mute sensor, gain dial, and zero-latency headphone monitoring."
    },
    {
        id: 15,
        name: "Metro Leather Messenger Bag",
        category: "Bags",
        price: 1899,
        oldPrice: 2599,
        rating: 4.4,
        reviews: 82,
        stock: true,
        badge: "CLASSIC",
        icon: "fa-bag-shopping",
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
        variants: ["Tan Brown", "Espresso"],
        desc: "Sleek commuter crossbody with magnetic flap closure, organizer pockets, and cushioned 14-inch laptop divider."
    },
    {
        id: 16,
        name: "CloudStep Minimal Sneakers",
        category: "Footwear",
        price: 2199,
        oldPrice: 2799,
        rating: 4.3,
        reviews: 74,
        stock: false,
        badge: "SOLD OUT",
        icon: "fa-shoe-prints",
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
        variants: ["UK 8", "UK 9"],
        desc: "Featherlight everyday knit sneakers currently restocking — add to wishlist to save for the next drop!"
    }
];

const PROMO_CODES = {
    "EZY20": { type: "percent", value: 20, label: "20% Off Instant Discount" },
    "FIRST500": { type: "flat", value: 500, minSubtotal: 1500, label: "₹500 Off on ₹1,500+" },
    "WELCOME10": { type: "percent", value: 10, label: "10% Welcome Discount" }
};

/* ================= STORAGE HELPERS ================= */
function getStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
    let cart = getStorage("ezymart_cart", null);
    if (cart === null) {
        // Seed 2 starter items on very first visit so cart/checkout demos smoothly right away
        cart = [
            { id: 1, qty: 1, variant: "Obsidian Black" },
            { id: 2, qty: 1, variant: "UK 9" }
        ];
        setStorage("ezymart_cart", cart);
    }
    return cart;
}

function saveCart(cart) {
    setStorage("ezymart_cart", cart);
    updateNavBadges();
}

function getWishlist() {
    let list = getStorage("ezymart_wishlist", null);
    if (list === null) {
        list = [3, 4, 7];
        setStorage("ezymart_wishlist", list);
    }
    return list;
}

function saveWishlist(list) {
    setStorage("ezymart_wishlist", list);
    updateNavBadges();
}

function getOrders() {
    return getStorage("ezymart_orders", []);
}

function saveOrders(orders) {
    setStorage("ezymart_orders", orders);
}

function getUser() {
    return getStorage("ezymart_user", null);
}

function setUser(user) {
    if (user) {
        setStorage("ezymart_user", user);
    } else {
        localStorage.removeItem("ezymart_user");
    }
}

function formatINR(num) {
    return "₹" + Number(num || 0).toLocaleString("en-IN");
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === Number(id));
}

/* ================= CART & WISHLIST ACTIONS ================= */
function addToCart(productId, qty = 1, variant = "") {
    const product = getProductById(productId);
    if (!product) return;
    if (!product.stock) {
        showToast("Sorry, this product is currently out of stock.", "error");
        return;
    }
    const chosenVariant = variant || (product.variants && product.variants[0]) || "Standard";
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id && item.variant === chosenVariant);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: product.id, qty: qty, variant: chosenVariant });
    }
    saveCart(cart);
    showToast(`${product.name} added to cart!`, "success");
}

function toggleWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return false;
    let list = getWishlist();
    const idx = list.indexOf(product.id);
    let added = false;
    if (idx > -1) {
        list.splice(idx, 1);
        showToast(`Removed ${product.name} from wishlist.`, "info");
    } else {
        list.push(product.id);
        added = true;
        showToast(`Saved ${product.name} to wishlist!`, "success");
    }
    saveWishlist(list);
    // Sync heart icons on current page
    document.querySelectorAll(`[data-wish-btn="${product.id}"]`).forEach(btn => {
        btn.classList.toggle("active", added);
        const icon = btn.querySelector("i");
        if (icon) {
            icon.className = added ? "fa-solid fa-heart" : "fa-regular fa-heart";
        }
    });
    return added;
}

/* ================= EXPLICIT VALIDATION HELPERS (NO REGEX) ================= */
function isAllDigits(str) {
    if (!str || str.length === 0) return false;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code < 48 || code > 57) return false;
    }
    return true;
}

function isValidEmailSimple(email) {
    const trimmed = email.trim();
    if (trimmed.length < 5) return false;
    const atIndex = trimmed.indexOf("@");
    const lastAtIndex = trimmed.lastIndexOf("@");
    if (atIndex < 1 || atIndex !== lastAtIndex) return false;
    const domain = trimmed.slice(atIndex + 1);
    const dotIndex = domain.indexOf(".");
    if (dotIndex < 1 || dotIndex === domain.length - 1) return false;
    if (trimmed.includes(" ")) return false;
    return true;
}

function cleanDigits(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 48 && code <= 57) out += str[i];
    }
    return out;
}

/* ================= TOAST SYSTEM ================= */
function showToast(message, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    const iconMap = {
        success: "fa-circle-check",
        error: "fa-circle-exclamation",
        info: "fa-circle-info"
    };
    const colorMap = {
        success: "#10b981",
        error: "#ef4444",
        info: "#a66cff"
    };
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${iconMap[type] || iconMap.info}" style="color:${colorMap[type] || colorMap.info};font-size:17px;"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "0.25s ease";
        setTimeout(() => toast.remove(), 260);
    }, 2800);
}

/* ================= PRODUCT CARD RENDERER ================= */
function renderProductCard(product) {
    const wish = getWishlist();
    const isWished = wish.includes(product.id);
    const badgeClass = product.stock ? "product-badge" : "product-badge sold-out";
    return `
        <article class="product-card">
            <div class="product-media" onclick="openQuickView(${product.id})">
                <span class="${badgeClass}">${product.badge}</span>
                <div class="card-quick-actions" onclick="event.stopPropagation()">
                    <button class="card-icon-btn ${isWished ? "active" : ""}" data-wish-btn="${product.id}" onclick="toggleWishlist(${product.id})" title="Wishlist">
                        <i class="${isWished ? "fa-solid" : "fa-regular"} fa-heart"></i>
                    </button>
                    <button class="card-icon-btn" onclick="openQuickView(${product.id})" title="Quick View">
                        <i class="fa-regular fa-eye"></i>
                    </button>
                </div>
                <img src="${product.img}" alt="${product.name}" loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <i class="fa-solid ${product.icon} product-fallback-icon"></i>
            </div>
            <div class="product-body">
                <div class="product-meta">
                    <span>${product.category}</span>
                    <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating} (${product.reviews})</span>
                </div>
                <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
                <div class="product-price-row">
                    <span class="price-now">${formatINR(product.price)}</span>
                    <span class="price-old">${formatINR(product.oldPrice)}</span>
                </div>
                <div class="product-footer">
                    <button class="btn ${product.stock ? "btn-primary" : "btn-secondary"}"
                            onclick="addToCart(${product.id})" ${product.stock ? "" : "disabled style='opacity:0.55;cursor:not-allowed;'"}>
                        <i class="fa-solid ${product.stock ? "fa-cart-plus" : "fa-ban"}"></i>
                        ${product.stock ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </article>
    `;
}

/* ================= QUICK VIEW MODAL ================= */
function openQuickView(productId) {
    const p = getProductById(productId);
    if (!p) return;
    let modal = document.getElementById("quickViewModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "quickViewModal";
        modal.className = "modal-backdrop";
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("open");
        });
        document.body.appendChild(modal);
    }
    const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
    const variantOptions = p.variants.map((v, i) => `
        <button type="button" class="btn btn-sm ${i === 0 ? "btn-primary" : "btn-secondary"} qv-var-btn"
                onclick="selectQvVariant(this, '${v.replace(/'/g, "\\'")}')">${v}</button>
    `).join("");

    modal.innerHTML = `
        <div class="modal-box" style="max-width:820px;">
            <button class="modal-close" onclick="document.getElementById('quickViewModal').classList.remove('open')">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:26px;align-items:center;">
                <div style="border-radius:18px;overflow:hidden;height:300px;background:linear-gradient(135deg,#1d1546,#5c3eff);display:flex;align-items:center;justify-content:center;position:relative;">
                    <span class="product-badge">${p.badge}</span>
                    <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <i class="fa-solid ${p.icon} product-fallback-icon"></i>
                </div>
                <div>
                    <span class="section-tag" style="margin-bottom:6px;">${p.category}</span>
                    <h2 style="font-size:26px;font-weight:900;line-height:1.2;margin-bottom:8px;">${p.name}</h2>
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;font-size:13.5px;">
                        <span class="product-rating"><i class="fa-solid fa-star"></i> ${p.rating}</span>
                        <span style="color:var(--text-muted);">${p.reviews} verified reviews</span>
                        <span style="color:${p.stock ? "var(--success)" : "var(--danger)"};font-weight:700;">
                            ${p.stock ? "● In Stock" : "● Out of Stock"}
                        </span>
                    </div>
                    <div class="product-price-row">
                        <span class="price-now" style="font-size:28px;">${formatINR(p.price)}</span>
                        <span class="price-old">${formatINR(p.oldPrice)}</span>
                        <span style="color:var(--success);font-weight:800;font-size:13px;">Save ${discount}%</span>
                    </div>
                    <p style="color:var(--text-muted);font-size:14px;margin-bottom:18px;">${p.desc}</p>
                    <div style="margin-bottom:20px;">
                        <div style="font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:8px;text-transform:uppercase;">Select Option</div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;" id="qvVariants" data-selected="${p.variants[0]}">
                            ${variantOptions}
                        </div>
                    </div>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;">
                        <button class="btn btn-primary" style="flex:1;" ${p.stock ? "" : "disabled"}
                                onclick="addToCart(${p.id}, 1, document.getElementById('qvVariants').dataset.selected); document.getElementById('quickViewModal').classList.remove('open');">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn btn-secondary" onclick="toggleWishlist(${p.id})">
                            <i class="fa-regular fa-heart"></i> Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add("open");
}

function selectQvVariant(btn, val) {
    const wrap = document.getElementById("qvVariants");
    wrap.dataset.selected = val;
    wrap.querySelectorAll(".qv-var-btn").forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-secondary");
    });
    btn.classList.remove("btn-secondary");
    btn.classList.add("btn-primary");
}

/* ================= GLOBAL SEARCH MODAL ================= */
function openSearchModal() {
    let modal = document.getElementById("globalSearchModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "globalSearchModal";
        modal.className = "modal-backdrop";
        modal.innerHTML = `
            <div class="modal-box" style="max-width:650px;">
                <button class="modal-close" onclick="closeSearchModal()"><i class="fa-solid fa-xmark"></i></button>
                <span class="section-tag"><i class="fa-solid fa-magnifying-glass"></i> INSTANT SEARCH</span>
                <h2 style="font-size:24px;font-weight:900;margin-bottom:16px;">Find anything on EzyMart</h2>
                <input id="globalSearchInput" type="text" class="input-field" placeholder="Search headphones, shoes, watch, gaming..." oninput="renderGlobalSearch(this.value)">
                <div id="globalSearchResults" style="margin-top:18px;display:flex;flex-direction:column;gap:10px;max-height:340px;overflow-y:auto;"></div>
            </div>
        `;
        modal.addEventListener("click", (e) => { if (e.target === modal) closeSearchModal(); });
        document.body.appendChild(modal);
    }
    modal.classList.add("open");
    setTimeout(() => {
        const inp = document.getElementById("globalSearchInput");
        if (inp) { inp.value = ""; inp.focus(); renderGlobalSearch(""); }
    }, 60);
}

function closeSearchModal() {
    const modal = document.getElementById("globalSearchModal");
    if (modal) modal.classList.remove("open");
}

function renderGlobalSearch(query) {
    const box = document.getElementById("globalSearchResults");
    if (!box) return;
    const q = query.trim().toLowerCase();
    const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
        box.innerHTML = `<div style="text-align:center;padding:28px;color:var(--text-muted);">No products matched "${query}". Try searching "Shoes", "Gaming", or "Watch".</div>`;
        return;
    }

    box.innerHTML = matches.map(p => `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px;border-radius:14px;border:1px solid var(--border);background:var(--glass);">
            <div style="display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="closeSearchModal(); openQuickView(${p.id});">
                <img src="${p.img}" alt="${p.name}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;"
                     onerror="this.style.display='none';">
                <div>
                    <div style="font-weight:700;font-size:14px;">${p.name}</div>
                    <div style="font-size:12px;color:var(--text-muted);">${p.category} • <strong style="color:var(--primary-light);">${formatINR(p.price)}</strong></div>
                </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})" ${p.stock ? "" : "disabled"}>
                <i class="fa-solid fa-plus"></i> Add
            </button>
        </div>
    `).join("");
}

/* ================= NAVBAR, FOOTER & THEME ================= */
function initTheme() {
    const saved = localStorage.getItem("ezymart_theme");
    if (saved === "light") document.body.classList.add("light-theme");
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-theme");
    localStorage.setItem("ezymart_theme", isLight ? "light" : "dark");
    const icon = document.getElementById("themeIcon");
    if (icon) icon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
    showToast(isLight ? "Switched to Light Mode" : "Switched to Dark Mode", "info");
}

function updateNavBadges() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const wishCount = getWishlist().length;

    document.querySelectorAll(".nav-cart-count").forEach(el => el.textContent = totalQty);
    document.querySelectorAll(".nav-wish-count").forEach(el => {
        el.textContent = wishCount;
        el.style.display = wishCount > 0 ? "flex" : "none";
    });
}

function renderSharedLayout(activePage) {
    initTheme();
    const user = getUser();
    const isLight = document.body.classList.contains("light-theme");

    const navPlaceholder = document.getElementById("navbar-root");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
        <nav class="navbar">
            <a href="index.html" class="logo">
                <div class="logo-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                EZY<span>MART</span>
            </a>

            <div class="nav-links" id="navLinks">
                <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
                <a href="categories.html" class="${activePage === 'categories' ? 'active' : ''}">Categories</a>
                <a href="product.html" class="${activePage === 'products' ? 'active' : ''}">Shop</a>
                <a href="wishlist.html" class="${activePage === 'wishlist' ? 'active' : ''}">Wishlist</a>
                <a href="orders.html" class="${activePage === 'orders' ? 'active' : ''}">Orders</a>
            </div>

            <div class="nav-actions">
                <button class="icon-btn" onclick="openSearchModal()" title="Search (Ctrl+K)">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <button class="icon-btn" onclick="toggleTheme()" title="Toggle Theme">
                    <i id="themeIcon" class="fa-solid ${isLight ? 'fa-moon' : 'fa-sun'}"></i>
                </button>
                <a href="wishlist.html" class="icon-btn" title="Wishlist">
                    <i class="fa-regular fa-heart"></i>
                    <span class="badge-dot-count nav-wish-count">0</span>
                </a>
                ${user ? `
                    <a href="login.html" class="user-pill" title="Account">
                        <i class="fa-solid fa-circle-user" style="color:var(--primary-light);font-size:17px;"></i>
                        <span>${user.name.split(" ")[0]}</span>
                    </a>
                ` : `
                    <a href="login.html" class="icon-btn" title="Login / Sign Up">
                        <i class="fa-regular fa-user"></i>
                    </a>
                `}
                <a href="cart.html" class="cart-nav">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                    <b class="nav-cart-count">0</b>
                </a>
                <button class="icon-btn mobile-menu-btn" onclick="document.getElementById('navLinks').classList.toggle('open')" title="Menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
        `;
    }

    const footerPlaceholder = document.getElementById("footer-root");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="site-footer" id="contact">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="index.html" class="logo" style="margin-bottom:14px;">
                            <div class="logo-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                            EZY<span>MART</span>
                        </a>
                        <p style="color:var(--text-muted);font-size:13.5px;max-width:300px;margin-bottom:16px;">
                            Next-generation shopping crafted for speed, style, and seamless checkout with EzyPay Secure Gateway.
                        </p>
                        <div style="display:flex;gap:10px;">
                            <span class="icon-btn" style="width:36px;height:36px;"><i class="fa-brands fa-instagram"></i></span>
                            <span class="icon-btn" style="width:36px;height:36px;"><i class="fa-brands fa-x-twitter"></i></span>
                            <span class="icon-btn" style="width:36px;height:36px;"><i class="fa-brands fa-github"></i></span>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Shop</h4>
                        <a href="product.html?category=Electronics">Electronics</a>
                        <a href="product.html?category=Footwear">Footwear</a>
                        <a href="product.html?category=Gaming">Gaming Gear</a>
                        <a href="product.html?category=Fashion">Fashion</a>
                    </div>
                    <div class="footer-col">
                        <h4>Customer Care</h4>
                        <a href="orders.html">Track Your Order</a>
                        <a href="wishlist.html">Saved Wishlist</a>
                        <a href="cart.html">Shopping Cart</a>
                        <a href="login.html">My Account</a>
                    </div>
                    <div class="footer-col">
                        <h4>Active Promo Codes</h4>
                        <div style="font-size:13px;color:var(--text-muted);display:flex;flex-direction:column;gap:8px;">
                            <div><strong style="color:var(--primary-light);">EZY20</strong> — Flat 20% Off</div>
                            <div><strong style="color:var(--primary-light);">FIRST500</strong> — ₹500 Off (₹1500+)</div>
                            <div><strong style="color:var(--primary-light);">WELCOME10</strong> — 10% Off</div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>© 2026 EzyMart Pro. Built as First Year Web Engineering Showcase.</span>
                    <span><i class="fa-solid fa-lock" style="color:var(--success);"></i> 256-Bit Encrypted EzyPay Demo Gateway</span>
                </div>
            </div>
        </footer>
        `;
    }

    updateNavBadges();
}

// Ctrl+K shortcut for instant search
document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
    }
    if (e.key === "Escape") {
        closeSearchModal();
        const qv = document.getElementById("quickViewModal");
        if (qv) qv.classList.remove("open");
    }
});
