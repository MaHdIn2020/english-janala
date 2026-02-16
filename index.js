const loadData = async () => {
    const response2 = await fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
        loadTrendingProducts(data)}
    )
}

const loadCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container')
    categories.forEach(category => {
        const categoryElement = document.createElement('div')
        categoryElement.innerHTML = `
            <button class="btn btn-outline rounded-full shadow-sm hover:bg-purple-600 hover:text-white">${category}</button>
        `
        categoryContainer.appendChild(categoryElement)
    })
}


    const loadTrendingProducts = (products) => {
        console.log(products)
        const trendingContainer = document.getElementById('trending-container')
        products.slice(0,3).forEach(product => {
            const trendingElement = document.createElement('div')
            trendingElement.innerHTML = `
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
                <button class="flex-1 btn btn-outline btn-sm hover:bg-blue-700 hover:text-white">
                <i class="fa-regular fa-eye mr-1"></i> Details
                </button>
                <button class="flex-1 btn btn-primary btn-sm">
                <i class="fa-solid fa-cart-shopping mr-1"></i> Add
                </button>
            </div>

            </div>
            
            `
            trendingContainer.appendChild(trendingElement)
        })
    }

loadData()