// Category Page JavaScript

let currentFilters = {
    subcategory: 'all',
    priceRanges: [],
    sort: 'featured'
};

let filteredProducts = [];

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCategoryProducts();
    initializeFilters();
    initializeViewToggle();
});

// Load and filter products
function loadCategoryProducts() {
    const category = window.currentCategory; // 'men' or 'women'
    
    if (!window.products) {
        console.error('Products not loaded');
        return;
    }
    
    // Filter products by category
    filteredProducts = window.products.filter(p => p.category === category);
    
    // Update counts
    updateCounts(filteredProducts);
    
    // Apply filters
    applyFilters();
}

// Update product counts
function updateCounts(products) {
    const allCount = products.length;
    const analogCount = products.filter(p => p.subCategory === 'analog').length;
    const digitalCount = products.filter(p => p.subCategory === 'digital').length;
    
    const countAllEl = document.getElementById('countAll');
    const countAnalogEl = document.getElementById('countAnalog');
    const countDigitalEl = document.getElementById('countDigital');
    
    if (countAllEl) countAllEl.textContent = allCount;
    if (countAnalogEl) countAnalogEl.textContent = analogCount;
    if (countDigitalEl) countDigitalEl.textContent = digitalCount;
}

// Initialize filters
function initializeFilters() {
    // Subcategory filters
    document.querySelectorAll('input[name="subcategory"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.subcategory = e.target.value;
            applyFilters();
        });
    });
    
    // Price filters
    document.querySelectorAll('input[name="price"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            currentFilters.priceRanges = Array.from(
                document.querySelectorAll('input[name="price"]:checked')
            ).map(cb => cb.value);
            applyFilters();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentFilters.sort = e.target.value;
            applyFilters();
        });
    }
}

// Apply all filters
function applyFilters() {
    let products = [...filteredProducts];
    
    // Filter by subcategory
    if (currentFilters.subcategory !== 'all') {
        products = products.filter(p => p.subCategory === currentFilters.subcategory);
    }
    
    // Filter by price range
    if (currentFilters.priceRanges.length > 0) {
        products = products.filter(p => {
            return currentFilters.priceRanges.some(range => {
                const [min, max] = range.split('-').map(Number);
                if (max) {
                    return p.price >= min && p.price <= max;
                } else {
                    return p.price >= min;
                }
            });
        });
    }
    
    // Sort products
    switch (currentFilters.sort) {
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            products.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Featured - keep original order
            break;
    }
    
    // Update product count
    const productCount = document.getElementById('productCount');
    if (productCount) {
        productCount.textContent = `(${products.length} Product${products.length !== 1 ? 's' : ''})`;
    }
    
    // Display products
    displayCategoryProducts(products);
}

// Display products
function displayCategoryProducts(products) {
    const container = document.getElementById('categoryProducts');
    
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
                <h3 style="color: var(--text-secondary); font-size: 1.5rem;">No products found</h3>
                <p style="color: var(--text-secondary); margin-top: 1rem;">Try adjusting your filters</p>
                <button onclick="clearFilters()" class="btn btn-primary" style="margin-top: 2rem;">Clear All Filters</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <a href="product-detail.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    <img src="../${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </a>
            <div class="product-info">
                <div class="product-category">${product.category} - ${product.subCategory}</div>
                <a href="product-detail.html?id=${product.id}" class="product-link">
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

// Clear all filters
function clearFilters() {
    // Reset radio buttons
    document.querySelectorAll('input[name="subcategory"]').forEach(radio => {
        radio.checked = radio.value === 'all';
    });
    
    // Reset checkboxes
    document.querySelectorAll('input[name="price"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'featured';
    }
    
    // Reset filters
    currentFilters = {
        subcategory: 'all',
        priceRanges: [],
        sort: 'featured'
    };
    
    // Reapply filters
    applyFilters();
}

// View toggle (grid/list)
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsGrid = document.getElementById('categoryProducts');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            if (view === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
        });
    });
}

console.log('Category page loaded');
