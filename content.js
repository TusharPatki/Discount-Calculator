// content.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.productLink) {
      const productLink = request.productLink;
  
      // Access the DOM to extract product details
      const productDetails = {
        name: '',
        price: '',
        imageUrl: ''
      };
  
      // Example: Access the product details using DOM manipulation
      const productNameElement = document.querySelector('.product-name');
      const productPriceElement = document.querySelector('.product-price');
      const productImageElement = document.querySelector('.product-image');
  
      if (productNameElement && productPriceElement && productImageElement) {
        productDetails.name = productNameElement.textContent;
        productDetails.price = productPriceElement.textContent;
        productDetails.imageUrl = productImageElement.src;
      }
  
      sendResponse({ productDetails });
    }
  });
  