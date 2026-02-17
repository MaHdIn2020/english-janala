const loadData = async () => {
    const response1 = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(data => {loadCategories(data)})
    const response2 = await fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
        loadProducts(data)}
    )
}
const loadCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container')
    categories.forEach(category => {
        const id = safeId(category)
        console.log
        const categoryElement = document.createElement('div')
        categoryElement.innerHTML = `
            <button id='${id}' onclick="loadcategory(\`${category}\`)" class="btn btn-outline rounded-full shadow-sm hover:bg-purple-600 hover:text-white category-btn">${category}</button>
        `
        categoryContainer.appendChild(categoryElement)
    })
}
const safeId = (str) => "cat-" + str.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const loadcategory = (category) => {
  removeActiveClass();

  const clickBtn = document.querySelector(`[data-category="${category}"]`);
  if (clickBtn) clickBtn.classList.add("active");

  const url =
    category === "All"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => loadProducts(data));
};

const showProductDetails = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
      <div class="flex flex-col md:flex-row gap-6">
        
        <!-- Image -->
        <div class="bg-gray-100 rounded-lg p-4 flex justify-center items-center w-full md:w-1/3 h-64">
          <img src="${product.image}" alt="product" class="h-full object-contain" />
        </div>

        <!-- Details -->
        <div class="flex-1">
          <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full font-medium text-sm">
            ${product.category}
          </span>

          <h2 class="text-2xl font-bold mt-3 text-gray-800">
            ${product.title}
          </h2>

          <p class="text-gray-600 mt-3 leading-relaxed">
            ${product.description}
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-4">
            <p class="text-xl font-bold text-gray-900">$${product.price}</p>

            <p class="flex items-center gap-2 text-yellow-500 font-semibold">
              ★ <span class="text-gray-700">${product.rating.rate}</span>
              <span class="text-gray-500">(${product.rating.count} reviews)</span>
            </p>
          </div>

          <div class="mt-6 flex gap-3">
            <button class="btn btn-primary" onclick="buyNow(${product.id})">
              <i class="fa-solid fa-bag-shopping mr-2"></i> Buy Now
            </button>

            <button class="btn btn-outline" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-shopping mr-2"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("product_modal").showModal();
  } catch (err) {
    console.error(err);
    alert("Failed to load product details!");
  }
};

// Demo handlers (replace with your real cart logic)
const buyNow = (id) => {
  alert(`Buy Now clicked for product id: ${id}`);
};

const addToCart = (id) => {
  alert(`Added to cart: product id ${id}`);
};


const loadProducts = (products) => {
    const productContainer = document.getElementById('product-container')
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement('div')
        productElement.innerHTML = `
        <div class="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition">

        <!-- Image -->
        <div class="bg-gray-100 rounded-lg p-4 flex justify-center items-center h-48">
            <img
            src=${product.image}
            alt="product"
            class="h-full object-contain"
            />
        </div>

        <!-- Category & Rating -->
        <div class="flex justify-between items-center mt-4 text-sm">
            <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full font-medium">
            ${product.category}
            </span>
            <span class="flex items-center gap-1 text-yellow-500">
            ★ <span class="text-gray-700">${product.rating["rate"]} (${product.rating["count"]})</span>
            </span>
        </div>

        <!-- Title -->
        <h2 class="mt-3 font-semibold text-gray-800 leading-snug line-clamp-2">
            ${product.title.length>25 ? product.title.substring(0, 25) + '...' : product.title } 
        </h2>

        <!-- Price -->
        <p class="mt-2 text-xl font-bold text-gray-900">$${product.price}</p>

        <!-- Buttons -->
        <div class="flex gap-3 mt-4">
        <button 
        class="flex-1 btn btn-outline btn-sm hover:bg-blue-700 hover:text-white"
        onclick="showProductDetails(${product.id})"
        >
        <i class="fa-regular fa-eye mr-1"></i> Details
        </button>

            <button class="flex-1 btn btn-primary btn-sm">
            <i class="fa-solid fa-cart-shopping mr-1"></i> Add
            </button>
        </div>

        </div>
        `
        productContainer.appendChild(productElement)
    })

}

const removeActiveClass = () => {
    const allBtn = document.querySelectorAll(".category-btn")
    allBtn.forEach((btn) => {
        btn.classList.remove("active")
    })
}
loadData()