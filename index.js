


// Example JavaScript functionality

// Function to toggle a cart item when clicked
function toggleCartIcon() {
  const cartIcon = document.querySelector('.fa-cart-shopping');
  cartIcon.addEventListener('click', () => {
      alert('Cart functionality will be added soon!');
  });
}

// Function to dynamically update the product image on click
function updateProductImage() {
  const smallImages = document.querySelectorAll('.about_small_image img');
  const mainImage = document.getElementById('imagebox');

  smallImages.forEach((img) => {
      img.addEventListener('click', () => {
          mainImage.src = img.src;
      });
  });
}

// Call functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  toggleCartIcon();
  updateProductImage();
  smoothScroll();
  addToCart();
  productModal();
  scrollToTopButton();
  productStarRating();
});

// Smooth Scroll for Navigation Links
function smoothScroll() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          window.scrollTo({
              top: targetSection.offsetTop - 50, // Adjust for nav height
              behavior: 'smooth'
          });
      });
  });
}

// Add to Cart Button Functionality
function addToCart() {
  const addToCartButtons = document.querySelectorAll('.btn');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault();
      });
  });
}

// Modal Functionality
function productModal() {
  const modal = document.getElementById("productModal");
  const images = document.querySelectorAll('.products .card .image img');
  const closeModal = document.querySelector('.close');

  images.forEach(img => {
      img.addEventListener('click', () => {
          modal.style.display = "flex";
          // You can dynamically load product info into the modal here
      });
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
}

// Scroll to Top Button
function scrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
}

// Product Star Rating
function productStarRating() {
  const stars = document.querySelectorAll('.products_star i');

  stars.forEach(star => {
      star.addEventListener('mouseover', () => {
          const rating = Array.from(star.parentNode.children);
          rating.forEach(s => s.classList.remove('highlight'));
          star.classList.add('highlight');
          rating.slice(0, rating.indexOf(star) + 1).forEach(s => s.classList.add('highlight'));
      });
  });
}
