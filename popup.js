// popup.js

document.addEventListener('DOMContentLoaded', function() {
    const productLinkInput = document.getElementById('product-link');
    const fetchButton = document.getElementById('fetch-details');
    const productInfoDiv = document.getElementById('product-info');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productImage = document.getElementById('product-image');
  
    fetchButton.addEventListener('click', function() {
      const productLink = productLinkInput.value.trim();
  
      // Send the product link to content script for scraping
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { productLink }, function(response) {
          if (response && response.productDetails) {
            const { name, price, imageUrl } = response.productDetails;
            productName.textContent = `Product Name: ${name}`;
            productPrice.textContent = `Sale Price: ${price}`;
            productImage.src = imageUrl;
  
            productInfoDiv.style.display = 'block'; // Show the product info
          }
        });
      });
    });
  });
  