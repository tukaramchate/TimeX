// Product Data - Real Watch Collection
// Structure: Main Category (Men/Women) -> Sub Category (Analog/Digital) -> Product Folders
const products = [
    // MEN'S ANALOG WATCHES
    {
        id: 1,
        name: "Chopard Alpine Eagle",
        category: "men",
        subCategory: "analog",
        price: 15999.99,
        description: "Premium luxury timepiece with Swiss automatic movement and sapphire crystal.",
        image: "src/images/Mens/Analog/alpine eagle 4/298600-3014_01.webp",
        gender: "men"
    },
    {
        id: 2,
        name: "Chopard Happy Sport",
        category: "men",
        subCategory: "analog",
        price: 12999.99,
        description: "Elegant sports chronograph with floating diamonds and premium craftsmanship.",
        image: "src/images/Mens/Analog/Happy Sport/278573-6032_01.webp",
        gender: "men"
    },
    {
        id: 3,
        name: "Mille Miglia Classic Chronograph",
        category: "men",
        subCategory: "analog",
        price: 8999.99,
        description: "Classic racing chronograph inspired by legendary automotive heritage.",
        image: "src/images/Mens/Analog/Mille Miglia Classic Chronograph/168619-3003_01.webp",
        gender: "men"
    },
    {
        id: 4,
        name: "Titan Maritime",
        category: "men",
        subCategory: "analog",
        price: 3499.99,
        description: "Sophisticated analog watch with maritime-inspired design and leather strap.",
        image: "src/images/Mens/Analog/titan maritine/51xLjmSvPbL._SX522_.jpg",
        gender: "men"
    },
    {
        id: 5,
        name: "Titan Neo",
        category: "men",
        subCategory: "analog",
        price: 2999.99,
        description: "Modern analog timepiece with sleek design and durable construction.",
        image: "src/images/Mens/Analog/titan neo/51OElOr6BzL._SX679_.jpg",
        gender: "men"
    },
    {
        id: 6,
        name: "Titan Off-White Dial",
        category: "men",
        subCategory: "analog",
        price: 2499.99,
        description: "Elegant off-white dial watch with minimalist design and premium finish.",
        image: "src/images/Mens/Analog/titan offwhite/51nkGb-GB2L._SX679_.jpg",
        gender: "men"
    },
    // MEN'S DIGITAL WATCHES
    {
        id: 7,
        name: "Boat Ultima",
        category: "men",
        subCategory: "digital",
        price: 1999.99,
        description: "Premium smartwatch with AMOLED display, health tracking, and 7-day battery.",
        image: "src/images/Mens/Digital/boat ultima/7113wG1gDaL._SX679_.jpg",
        gender: "men"
    },
    {
        id: 8,
        name: "Fire-Boltt Ninja",
        category: "men",
        subCategory: "digital",
        price: 1499.99,
        description: "Feature-packed smartwatch with fitness tracking and Bluetooth calling.",
        image: "src/images/Mens/Digital/fire-blott ninja/61Lpk-B-DjL._SX522_.jpg",
        gender: "men"
    },
    {
        id: 9,
        name: "Titan Crest 1.43",
        category: "men",
        subCategory: "digital",
        price: 2799.99,
        description: "Premium 1.43\" AMOLED smartwatch with advanced health monitoring.",
        image: "src/images/Mens/Digital/titan crest 1.43/718rK5MhRBL._SX522_.jpg",
        gender: "men"
    },
    // WOMEN'S ANALOG WATCHES
    {
        id: 10,
        name: "Carlington Analog",
        category: "women",
        subCategory: "analog",
        price: 1899.99,
        description: "Elegant women's analog watch with refined design and comfortable strap.",
        image: "src/images/Female/analog/Carlington Analog/61itGqGRlIL._SX679_.jpg",
        gender: "women"
    },
    {
        id: 11,
        name: "Casio Enticer",
        category: "women",
        subCategory: "analog",
        price: 2199.99,
        description: "Stylish Casio timepiece with sophisticated dial and premium materials.",
        image: "src/images/Female/analog/Casio Enticer/51BiQlKf3ZL._SX679_.jpg",
        gender: "women"
    },
    {
        id: 12,
        name: "TIMEX Analog",
        category: "women",
        subCategory: "analog",
        price: 2499.99,
        description: "Classic TIMEX design with Indiglo night-light and water resistance.",
        image: "src/images/Female/analog/TIMEX Analog/51qsxd-GH0L._SX679_.jpg",
        gender: "women"
    },
    {
        id: 13,
        name: "Titan Quartz",
        category: "women",
        subCategory: "analog",
        price: 2699.99,
        description: "Premium quartz movement watch with elegant design for women.",
        image: "src/images/Female/analog/Titan Quartz/51HdpnaMFWL._SX679_.jpg",
        gender: "women"
    },
    // WOMEN'S DIGITAL WATCHES
    {
        id: 14,
        name: "Boat Storm Verge",
        category: "women",
        subCategory: "digital",
        price: 1799.99,
        description: "Sleek smartwatch with health tracking and customizable watch faces.",
        image: "src/images/Female/digital/Boat Storm Verge,/71e4Td-ayWL._SX679_.jpg",
        gender: "women"
    },
    {
        id: 15,
        name: "Noise Twist Go Round",
        category: "women",
        subCategory: "digital",
        price: 1599.99,
        description: "Stylish round dial smartwatch with fitness tracking and notifications.",
        image: "src/images/Female/digital/Noise Twist Go Round/619YdOzmc7L._SL1500_.jpg",
        gender: "women"
    }
];

// Shopping Cart
let cart = [];
let wishlist = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const cartCount = document.querySelector('.cart-count');
const totalPrice = document.querySelector('.total-price');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    loadCart();
    loadWishlist();
    updateCartUI();
    updateWishlistUI();
    initializeHeader();
});

// Display Products
function displayProducts(productsToDisplay) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" data-category="${product.category}">
            <a href="pages/product-detail.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </a>
            <div class="product-info">
                <div class="product-category">${product.category} - ${product.subCategory}</div>
                <a href="pages/product-detail.html?id=${product.id}" class="product-link">
                    <h3 class="product-name">${product.name}</h3>
                </a>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">₹${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Products
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;
        
        if (category === 'all') {
            displayProducts(products);
        } else if (category === 'analog' || category === 'digital') {
            // Filter by subCategory (analog/digital)
            const filtered = products.filter(product => product.subCategory === category);
            displayProducts(filtered);
        } else {
            // Filter by main category (men/women)
            const filtered = products.filter(product => product.category === category);
            displayProducts(filtered);
        }
    });
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification('Item added to cart!');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `₹${total.toFixed(2)}`;
}

// Cart Toggle
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

cartBtn.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    
    if (nav.style.display === 'flex') {
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.flexDirection = 'column';
        nav.style.padding = '1rem';
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});

// Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showNotification('Thank you for subscribing!');
    e.target.reset();
});

// ===== Image Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Create dots
const dotsContainer = document.getElementById('sliderDots');
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

function moveSlide(direction) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.dot')[currentSlide].classList.add('active');
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.dot')[currentSlide].classList.add('active');
}

// Auto-advance slider every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// ===== Header Functionality =====
function initializeHeader() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const voiceSearch = document.querySelector('.voice-search');
    const accountBtn = document.querySelectorAll('.icon-btn')[0];
    const wishlistBtn = document.querySelectorAll('.icon-btn')[1];
    const trackOrderBtn = document.querySelectorAll('.icon-btn')[3];

    // Search input functionality
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }

    // Search icon click
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            if (searchInput.value.trim()) {
                performSearch(searchInput.value);
            } else {
                searchInput.focus();
            }
        });
    }

    // Voice search
    if (voiceSearch) {
        voiceSearch.addEventListener('click', () => {
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const recognition = new SpeechRecognition();
                
                recognition.onstart = () => {
                    voiceSearch.style.color = '#e74c3c';
                    showNotification('Listening...');
                };
                
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    searchInput.value = transcript;
                    performSearch(transcript);
                };
                
                recognition.onerror = () => {
                    showNotification('Voice search failed. Please try again.');
                    voiceSearch.style.color = '';
                };
                
                recognition.onend = () => {
                    voiceSearch.style.color = '';
                };
                
                recognition.start();
            } else {
                showNotification('Voice search not supported in this browser.');
            }
        });
    }

    // Account button - redirect to login page or show account menu
    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            const user = localStorage.getItem('user');
            if (user) {
                showAccountMenu();
            } else {
                window.location.href = 'pages/login.html';
            }
        });
    }

    // Wishlist button
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            toggleWishlist();
        });
    }

    // Track Order button
    if (trackOrderBtn) {
        trackOrderBtn.addEventListener('click', () => {
            showTrackOrderModal();
        });
    }
}

// Search functionality
function performSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (!searchTerm) {
        displayProducts(products);
        return;
    }

    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subCategory.toLowerCase().includes(searchTerm)
    );

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
                <h3 style="color: var(--text-secondary); font-size: 1.5rem;">No products found for "${query}"</h3>
                <p style="color: var(--text-secondary); margin-top: 1rem;">Try searching for something else</p>
                <button onclick="clearSearch()" class="btn btn-primary" style="margin-top: 2rem;">Show All Products</button>
            </div>
        `;
    } else {
        displayProducts(filtered);
        showNotification(`Found ${filtered.length} product${filtered.length > 1 ? 's' : ''}`);
    }
}

function clearSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.value = '';
    displayProducts(products);
    
    // Reset filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const allBtn = document.querySelector('[data-category="all"]');
    if (allBtn) allBtn.classList.add('active');
}

// Account Menu
function showAccountMenu() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    const menu = document.createElement('div');
    menu.className = 'account-dropdown';
    menu.innerHTML = `
        <div class="account-dropdown-header">
            <strong>${user.name}</strong>
            <p>${user.email}</p>
        </div>
        <div class="account-dropdown-links">
            <a href="#" onclick="showNotification('Profile page coming soon!')">My Profile</a>
            <a href="#" onclick="showNotification('Orders page coming soon!')">My Orders</a>
            <a href="#" onclick="showNotification('Settings page coming soon!')">Settings</a>
            <a href="#" onclick="logout()">Logout</a>
        </div>
    `;
    
    // Position menu
    const accountBtn = document.querySelectorAll('.icon-btn')[0];
    const rect = accountBtn.getBoundingClientRect();
    menu.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 10}px;
        right: ${window.innerWidth - rect.right}px;
        background: white;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 1rem;
        min-width: 200px;
        z-index: 10000;
    `;
    
    // Add styles
    const style = `
        .account-dropdown-header { border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 0.75rem; }
        .account-dropdown-header strong { display: block; margin-bottom: 0.25rem; }
        .account-dropdown-header p { color: var(--text-secondary); font-size: 0.85rem; margin: 0; }
        .account-dropdown-links a { display: block; padding: 0.5rem 0; color: var(--text-primary); text-decoration: none; transition: var(--transition); }
        .account-dropdown-links a:hover { color: var(--primary-color); padding-left: 0.5rem; }
    `;
    
    if (!document.getElementById('account-dropdown-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'account-dropdown-styles';
        styleEl.textContent = style;
        document.head.appendChild(styleEl);
    }
    
    // Remove existing menu
    const existing = document.querySelector('.account-dropdown');
    if (existing) existing.remove();
    
    document.body.appendChild(menu);
    
    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && e.target !== accountBtn) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}

function logout() {
    localStorage.removeItem('user');
    showNotification('Logged out successfully');
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

// Wishlist functionality
function toggleWishlist() {
    showNotification('Wishlist feature coming soon!');
}

function loadWishlist() {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
        wishlist = JSON.parse(saved);
    }
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    // Update wishlist count if needed
    // Can be implemented later
}

// Track Order Modal
function showTrackOrderModal() {
    const modal = document.createElement('div');
    modal.className = 'track-order-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Track Your Order</h3>
                <button onclick="this.closest('.track-order-modal').remove()" class="modal-close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Enter your order ID to track your shipment</p>
                <input type="text" placeholder="Enter Order ID" class="track-order-input" id="orderIdInput">
                <button class="btn btn-primary" style="margin-top: 1rem; width: 100%;" onclick="trackOrder()">Track Order</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = `
        .track-order-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; display: flex; align-items: center; justify-content: center; }
        .modal-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); }
        .modal-content { position: relative; background: white; border-radius: 8px; max-width: 500px; width: 90%; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid var(--border-color); }
        .modal-header h3 { margin: 0; font-size: 1.3rem; }
        .modal-close { background: none; border: none; cursor: pointer; padding: 0.5rem; color: var(--text-secondary); transition: var(--transition); }
        .modal-close:hover { color: var(--primary-color); }
        .modal-body { padding: 1.5rem; }
        .track-order-input { width: 100%; padding: 0.9rem; border: 1px solid var(--border-color); border-radius: 4px; font-size: 1rem; }
        .track-order-input:focus { outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(26,26,26,0.1); }
    `;
    
    if (!document.getElementById('modal-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'modal-styles';
        styleEl.textContent = style;
        document.head.appendChild(styleEl);
    }
    
    document.body.appendChild(modal);
}

function trackOrder() {
    const orderId = document.getElementById('orderIdInput').value.trim();
    if (orderId) {
        showNotification(`Tracking order: ${orderId}`);
        setTimeout(() => {
            showNotification('Order tracking feature coming soon!');
        }, 1000);
        document.querySelector('.track-order-modal').remove();
    } else {
        showNotification('Please enter an order ID');
    }
}

