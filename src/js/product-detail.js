// Product Detail Page JavaScript

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Load product details
function loadProductDetails() {
    // Get product from script.js products array
    const product = window.products ? window.products.find(p => p.id === productId) : null;
    
    if (!product) {
        // Redirect to home if product not found
        window.location.href = '../index.html';
        return;
    }

    // Update page title
    document.title = `${product.name} - TimeX`;
    
    // Update breadcrumb
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    // Update product badge
    document.getElementById('productBadge').textContent = product.subCategory.toUpperCase();
    
    // Update title
    document.getElementById('productTitle').textContent = product.name;
    
    // Update price
    document.getElementById('productPrice').textContent = `₹${product.price.toFixed(2)}`;
    
    // Update description
    document.getElementById('productDescription').textContent = product.description;
    
    // Load main image
    const mainImage = document.getElementById('mainImage');
    mainImage.src = `../${product.image}`;
    mainImage.alt = product.name;
    
    // Load thumbnails (for now, just show the same image)
    // In a real app, you would have multiple images per product
    loadThumbnails(product);
}

// Load thumbnail images
function loadThumbnails(product) {
    const thumbnailsContainer = document.getElementById('thumbnails');
    
    // For now, create 4 thumbnails with the same image
    // In production, you would fetch multiple images from the product folder
    for (let i = 0; i < 4; i++) {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail' + (i === 0 ? ' active' : '');
        thumbnail.innerHTML = `<img src="../${product.image}" alt="${product.name}">`;
        thumbnail.onclick = () => selectThumbnail(thumbnail, product.image);
        thumbnailsContainer.appendChild(thumbnail);
    }
}

// Select thumbnail
function selectThumbnail(thumbnail, imagePath) {
    // Remove active class from all thumbnails
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    
    // Add active class to selected thumbnail
    thumbnail.classList.add('active');
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    mainImage.src = `../${imagePath}`;
}

// Change quantity
function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let value = parseInt(quantityInput.value);
    value += change;
    
    if (value < 1) value = 1;
    if (value > 10) value = 10;
    
    quantityInput.value = value;
}

// Add to cart from detail page
document.getElementById('addToCartBtn')?.addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = window.products ? window.products.find(p => p.id === productId) : null;
    
    if (product && window.addToCart) {
        // Add to cart multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
            window.addToCart(productId);
        }
        
        // Show success message
        if (window.showNotification) {
            window.showNotification(`Added ${quantity} item(s) to cart!`);
        }
        
        // Reset quantity
        document.getElementById('quantity').value = 1;
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
});

console.log('Product detail page loaded');
