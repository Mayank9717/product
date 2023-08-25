const products = [
  {
    name: "Product 1",
    category: "Electronics",
    price: 799.99,
    available: true,
  },
  {
    name: "Product 2",
    category: "Books",
    price: 19.99,
    available: true,
  },
  {
    name: "Product 3",
    category: "Home & Kitchen",
    price: 49.99,
    available: false,
  },
  {
    name: "Product 4",
    category: "Toys & Games",
    price: 29.99,
    available: true,
  },
  {
    name: "Product 5",
    category: "Electronics",
    price: 599.99,
    available: true,
  },
  {
    name: "Product 6",
    category: "Books",
    price: 9.99,
    available: true,
  },
  {
    name: "Product 7",
    category: "Home & Kitchen",
    price: 39.99,
    available: true,
  },
  {
    name: "Product 8",
    category: "Toys & Games",
    price: 19.99,
    available: false,
  },
  {
    name: "Product 9",
    category: "Electronics",
    price: 399.99,
    available: true,
  },
  {
    name: "Product 10",
    category: "Books",
    price: 29.99,
    available: false,
  },
  {
    name: "Product 11",
    category: "Home & Kitchen",
    price: 49.99,
    available: true,
  },
  {
    name: "Product 12",
    category: "Toys & Games",
    price: 39.99,
    available: true,
  },
];

const productTableBody = document.getElementById("productTableBody");
const categorySelect = document.getElementById("category");
const minPriceInput = document.getElementById("minPrice");
const availabilitySelect = document.getElementById("availability");

// Display initial product table
function displayProducts(products) {
  productTableBody.innerHTML = "";
  products.forEach((product) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>$${product.price}</td>
          <td>${product.available ? "Yes" : "No"}</td>
        `;
    productTableBody.appendChild(tr);
  });
}

// Update the displayed products based on filters
function updateFilteredProducts() {
  const categoryValue = categorySelect.value;
  const minPriceValue = parseFloat(minPriceInput.value);
  const availabilityValue = availabilitySelect.value;

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      categoryValue === "all" || product.category === categoryValue;
    const minPriceMatch =
      isNaN(minPriceValue) || product.price >= minPriceValue;
    const availabilityMatch =
      availabilityValue === "all" ||
      (availabilityValue === "available" && product.available) ||
      (availabilityValue === "not-available" && !product.available);
    return categoryMatch && minPriceMatch && availabilityMatch;
  });

  displayProducts(filteredProducts);
}

// Attach event listeners to filters
categorySelect.addEventListener("change", updateFilteredProducts);
minPriceInput.addEventListener("input", updateFilteredProducts);
availabilitySelect.addEventListener("change", updateFilteredProducts);

// Display initial products on page load
displayProducts(products);
