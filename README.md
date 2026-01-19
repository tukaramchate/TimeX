# TimeX - Premium Watch E-commerce Website

A modern, responsive e-commerce website built exclusively with HTML, CSS, and vanilla JavaScript for selling premium watches.

## 🎯 Project Overview

TimeX is a fully functional e-commerce platform specializing in watches, featuring a clean, minimal design with a focus on user experience. The website includes a complete shopping experience from browsing to checkout preparation.

## 📁 Project Structure

```
Project 1/
├── index.html                          # Homepage with slider and featured products
├── pages/
│   ├── about.html                      # Company information and values
│   ├── contact.html                    # Contact form and information
│   ├── faq.html                        # Frequently Asked Questions
│   ├── login.html                      # User login page
│   ├── signup.html                     # User registration page
│   ├── men.html                        # Men's watches category page
│   ├── women.html                      # Women's watches category page
│   ├── product-detail.html             # Individual product page
│   ├── privacy.html                    # Privacy policy
│   └── terms.html                      # Terms & conditions
├── src/
│   ├── css/
│   │   ├── style.css                   # Global styles
│   │   ├── auth.css                    # Login/signup page styles
│   │   ├── about.css                   # About page styles
│   │   ├── contact.css                 # Contact page styles
│   │   ├── category.css                # Category pages styles
│   │   ├── product-detail.css          # Product detail page styles
│   │   ├── faq.css                     # FAQ page styles
│   │   └── legal.css                   # Privacy/terms page styles
│   ├── js/
│   │   ├── script.js                   # Main application logic
│   │   ├── auth.js                     # Authentication logic
│   │   ├── about.js                    # About page animations
│   │   ├── contact.js                  # Contact form validation
│   │   ├── category.js                 # Category page filtering
│   │   ├── product-detail.js           # Product detail functionality
│   │   └── faq.js                      # FAQ accordion logic
│   └── images/
│       ├── landing pages/              # Hero slider images (6 images)
│       ├── Mens/
│       │   ├── Analog/                 # Men's analog watch images
│       │   └── Digital/                # Men's digital watch images
│       └── Female/
│           ├── analog/                 # Women's analog watch images
│           └── digital/                # Women's digital watch images
```

## ✨ Key Features

### Homepage (index.html)
- **Auto-rotating Hero Slider**: 6 high-quality banner images with smooth transitions
- **Featured Products Section**: 8 curated watches (4 men's, 4 women's)
- **Quick View Functionality**: Preview product details without leaving the page
- **Responsive Navigation**: Collapsible mobile menu
- **Search Bar**: Interactive search functionality
- **Shopping Cart Badge**: Dynamic cart counter

### Category Pages (men.html, women.html)
- **Product Grid**: 7 watches per category
- **Advanced Filtering**:
  - Sort by: Featured, Price (Low-High/High-Low), Newest
  - Filter by: Brand, Price Range, Features, Strap Material
- **Responsive Design**: Grid adapts from 3 columns (desktop) to 1 column (mobile)
- **Interactive Cards**: Hover effects and quick actions

### Product Detail Page
- **Image Gallery**: Main image with 4 thumbnail previews
- **Size Selector**: Multiple size options
- **Quantity Counter**: Add/subtract product quantity
- **Related Products**: 4 similar product recommendations
- **Add to Cart/Wishlist**: Full shopping functionality
- **Detailed Specifications**: Complete product information

### Authentication System
- **Login Page**: Email/password authentication with validation
- **Signup Page**: Complete registration form with password confirmation
- **Form Validation**: Real-time input validation
- **Responsive Forms**: Mobile-optimized layouts

### About Page
- **Company Story**: Brand narrative and mission
- **Values Section**: 4 core company values with icons
- **Team Section**: 4 team member profiles
- **Scroll Animations**: Elements fade in on scroll

### Contact Page
- **Contact Form**: Name, email, subject, message fields
- **Form Validation**: Client-side validation
- **Contact Information**: Address, phone, email display
- **Map Integration**: Placeholder for location map

### FAQ Page
- **Accordion Interface**: 6 categorized question groups
- **Smooth Animations**: Expand/collapse with transitions
- **Search Functionality**: Filter questions
- **Categories**: Ordering, Shipping, Returns, Payment, Products, Account

### Legal Pages
- **Privacy Policy**: Data handling and user privacy
- **Terms & Conditions**: Usage terms and conditions
- **Structured Content**: Easy-to-read sections

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: #2c3e50 (Dark Blue-Grey)
  - Accent: #e74c3c (Red)
  - Background: #f5f5f5 (Light Grey)
  
- **Typography**: System fonts optimized for readability
- **Icons**: SVG icons for scalability
- **Animations**: Smooth transitions and hover effects
- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks or libraries
- **Local Storage**: Cart and wishlist persistence

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Clone or Download** the project files
2. **Navigate** to the project directory
3. **Open** with a local server or directly in a browser

### Running the Project

#### Option 1: Direct Browser
```bash
# Simply open index.html in your browser
start index.html  # Windows
open index.html   # macOS
```

#### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 💡 Usage Guide

### For Customers

1. **Browse Products**:
   - Visit the homepage to see featured watches
   - Navigate to Men's or Women's categories
   - Use filters to narrow down choices

2. **View Details**:
   - Click on any product card
   - View images, specifications, and pricing
   - Check related products

3. **Add to Cart**:
   - Select size and quantity
   - Click "Add to Cart"
   - Cart counter updates automatically

4. **Account Creation**:
   - Click "Sign Up" in the navigation
   - Fill in registration details
   - Submit to create account

### For Developers

1. **Customize Products**:
   - Edit `script.js` to modify product data
   - Update `category.js` for category-specific items

2. **Styling**:
   - Modify `style.css` for global changes
   - Edit specific CSS files for page-level styling

3. **Add Features**:
   - JavaScript files are modular
   - Each page has its dedicated JS file

## 🔧 Customization

### Adding New Products

Edit the products array in `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        brand: "Brand Name",
        price: 299,
        image: "path/to/image.jpg",
        category: "men", // or "women"
        type: "analog", // or "digital"
        // ... other properties
    }
];
```

### Changing Colors

Update CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --accent-color: #e74c3c;
    --text-color: #333;
}
```

### Modifying Slider

Edit slider images in `script.js`:
```javascript
const sliderImages = [
    'src/images/landing pages/image1.jpg',
    // Add or remove images
];
```

## 📊 Product Catalog

- **Total Products**: 15 watches
  - Men's Watches: 7 (4 analog, 3 digital)
  - Women's Watches: 8 (4 analog, 4 digital)
- **Price Range**: $149 - $599
- **Brands**: Titan, Casio, Timex, Boat, Noise, CrossBeats, and more

## 🎯 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database implementation (MongoDB/MySQL)
- [ ] Payment gateway integration
- [ ] User authentication with JWT
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced search with filters
- [ ] Multi-language support

## 📝 File Descriptions

### HTML Files
- `index.html`: Homepage with slider and featured products
- `pages/men.html`: Men's watches category
- `pages/women.html`: Women's watches category
- `pages/product-detail.html`: Product details template
- `pages/login.html`: User login
- `pages/signup.html`: User registration
- `pages/about.html`: Company information
- `pages/contact.html`: Contact form
- `pages/faq.html`: Frequently asked questions
- `pages/privacy.html`: Privacy policy
- `pages/terms.html`: Terms and conditions

### CSS Files
- `style.css`: Global styles, navigation, footer, utilities
- `auth.css`: Login and signup page styles
- `about.css`: About page animations and layout
- `contact.css`: Contact form and page styles
- `category.css`: Category page grid and filters
- `product-detail.css`: Product detail page layout
- `faq.css`: FAQ accordion styles
- `legal.css`: Privacy and terms page styles

### JavaScript Files
- `script.js`: Core functionality, cart, product data
- `auth.js`: Form validation for login/signup
- `about.js`: Scroll animations for about page
- `contact.js`: Contact form validation
- `category.js`: Product filtering and sorting
- `product-detail.js`: Image gallery, cart functions
- `faq.js`: Accordion functionality

## 🤝 Contributing

This is a learning project. Feel free to fork and modify for your own use.

## 📄 License

This project is created for educational purposes.

## 👤 Author

**TimeX Development Team**

## 🙏 Acknowledgments

- Images sourced from product catalogs
- Icons designed for this project
- Design inspiration from modern e-commerce sites

---

**Note**: This is a front-end only project. For production use, implement proper backend authentication, payment processing, and database management.
