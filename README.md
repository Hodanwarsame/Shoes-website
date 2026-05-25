# 👟 Shoes Website - Nike Collection

A modern, responsive e-commerce website showcasing Nike shoe products. Built with HTML, CSS, and JavaScript, this project demonstrates a professional online store with interactive features and smooth user experience.

## 📋 Project Structure

```
Shoes Website/
├── index.html      # Main HTML file
├── index.js        # JavaScript functionality
├── style.css       # Styling and layout
├── image/          # Product and background images
└── README.md       # This file
```

## ✨ Features

### 🧭 Navigation
- Fixed navigation bar with logo and menu links
- Smooth scrolling to different sections (Home, Products, About, Review, Services)
- Icon shortcuts for wishlist, cart, and user account

### 🏠 Hero Section
- Attractive hero banner with background image
- Featured Nike collection description
- Call-to-action "SHOP NOW" button
- Social media icons for easy sharing

### 📦 Products Section
- Dynamic product cards displaying Nike shoes
- Product images with hover effects
- Star rating system (5-star reviews)
- Price display for each product
- Quick actions (wishlist, share)
- Interactive modal for detailed product information

### 🎯 Interactive Features
- **Smooth Scrolling**: Smooth navigation between sections
- **Product Modal**: Click product images to view detailed information
- **Add to Cart**: Ready-to-use cart functionality
- **Product Image Gallery**: Update main product images dynamically
- **Scroll-to-Top Button**: Quick navigation back to the top
- **Responsive Design**: Mobile-friendly layout

### 🎨 Design Elements
- Modern gradient color scheme (Pink #c72092 and Purple #6c14d0)
- Font Awesome icons integration
- Custom scrollbar styling
- Smooth transitions and animations
- Professional typography

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation
1. Download or clone this project
2. Open `index.html` in your web browser
3. Explore the website and interact with different sections

### Running Locally
You can use a simple HTTP server to run the website:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, flexbox, and responsive design
- **JavaScript (ES6+)**: Interactive features and DOM manipulation
- **Font Awesome 6.1.1**: Icon library for UI elements

## 🔧 Key JavaScript Functions

| Function | Purpose |
|----------|---------|
| `toggleCartIcon()` | Handles cart icon click events |
| `updateProductImage()` | Dynamically switches product images |
| `smoothScroll()` | Enables smooth scrolling on navigation links |
| `addToCart()` | Manages add-to-cart button functionality |
| `productModal()` | Controls product detail modal display |
| `scrollToTopButton()` | Shows/hides scroll-to-top button |
| `productStarRating()` | Implements product rating system |

## 🎨 Color Scheme

- **Primary Pink**: `#c72092`
- **Primary Purple**: `#6c14d0`
- **Background**: White with gradient overlays
- **Text**: Black on light backgrounds

## 📱 Responsive Design

The website is designed to be mobile-friendly and adapts to various screen sizes:
- Desktop: Full navigation and all features
- Tablet: Optimized layout with touch-friendly icons
- Mobile: Stacked layout with responsive navigation

## 🔮 Future Enhancements

Potential features to implement:
- [ ] Backend integration for real product database
- [ ] User authentication and account management
- [ ] Functional shopping cart with checkout
- [ ] Payment gateway integration
- [ ] Product filtering and search functionality
- [ ] User reviews and ratings submission
- [ ] Wishlist persistence
- [ ] Email notifications

## 📂 Image Assets

The `image/` folder contains:
- Product images (shoes1.png - shoes8.png, red_shoes1-4.png)
- Background images (bg1.png, loging_bg.png)
- Logos and branding (logo.png, nike.png)
- User profile images (girl_dp1-3.jpg, man_dp1-3.jpg)
- Social media icons (facebook.png, twitter.png, google.png)

## 💡 Usage Tips

1. **Customize Colors**: Edit CSS variables in `style.css` to change the color scheme
2. **Update Products**: Modify product information in the HTML cards
3. **Add More Sections**: Extend the HTML with additional sections and link them in navigation
4. **Enhance JavaScript**: Add more interactive features using the existing function patterns

## 📄 License

This project is free to use for personal and commercial purposes.

## 👤 Author

Created as a modern e-commerce website template for shoe retailers.

---

**Happy Coding! 🚀** If you have suggestions or improvements, feel free to enhance this project further!
