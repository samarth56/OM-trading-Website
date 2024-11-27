

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobUl = document.querySelector(".mobUl")

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Show/Hide mobile menu
    });

    mobUl.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Show/Hide mobile menu
    });


    function toggleFAQ(faqNumber) {
        const faq = document.getElementById(`faq${faqNumber}`);
        faq.classList.toggle('hidden');
      }




















//fecthing the data from the json file

// Function to fetch products from JSON file
function fetchProducts() {
  fetch('Data/products.json')
    .then(response => response.json())
    .then(data => {
      // console.log("Fetched Products:", data); // Debugging
      displayProducts(data, "all");
      setUpCategoryFilter(data);
    })
    .catch(error => console.error("Error loading cards:", error));
}

function displayProducts(products, selectedCategory) {
  const productContainer = document.getElementById('product-container');
  const productTemplate = document.getElementById('product-card-template');

  productContainer.innerHTML = '';

  console.log("Selected Category:", selectedCategory);

  let filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product =>
        product.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
      );

  // console.log("Filtered Products:", filteredProducts);

  filteredProducts.forEach(product => {
    const productCard = productTemplate.content.cloneNode(true);

    productCard.querySelector('.product-image').src = product.image;
    productCard.querySelector('.product-image').alt = product.name;
    productCard.querySelector('.product-name').textContent = product.name;
    productCard.querySelector('.product-category').textContent = product.category;
    productCard.querySelector('.product-description').textContent = product.description;

    productContainer.appendChild(productCard);
  });
}

function setUpCategoryFilter(products) {  
  const categoryButtons = document.querySelectorAll('.category-btn');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      // console.log("Button Clicked, Category:", selectedCategory); // Debugging
      displayProducts(products, selectedCategory);

      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', fetchProducts);







// form validation

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission for validation

  // Get form fields
  const name = document.getElementById("name");
  const company = document.getElementById("company");
  const country = document.getElementById("country");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Error elements
  const nameError = document.getElementById("nameError");
  const companyError = document.getElementById("companyError");
  const countryError = document.getElementById("countryError");
  const numberError = document.getElementById("numberError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  let isValid = true;

  // Validation logic
  if (name.value.trim() === "") {
    isValid = false;
    nameError.classList.remove("hidden");
  } else {
    nameError.classList.add("hidden");
  }

  if (company.value.trim() === "") {
    isValid = false;
    companyError.classList.remove("hidden");
  } else {
    companyError.classList.add("hidden");
  }

  if (country.value.trim() === "") {
    isValid = false;
    countryError.classList.remove("hidden");
  } else {
    countryError.classList.add("hidden");
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(number.value)) {
    isValid = false;
    numberError.classList.remove("hidden");
  } else {
    numberError.classList.add("hidden");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    isValid = false;
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }

  if (message.value.trim() === "") {
    isValid = false;
    messageError.classList.remove("hidden");
  } else {
    messageError.classList.add("hidden");
  }

  // If valid, submit the form
  if (isValid) {
    this.submit();
  }
});




// swiper js

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, // Enable infinite loop
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
      disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    120:{
        slidesPerView:1,
        spaceBetween:5,
    },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  
  



