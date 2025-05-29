
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

const DOMAIN ='https://car-store-zoka.onrender.com';

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Car Store | Honda, Toyota & More</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f4f4f4; }
    header { background: #333; color: #fff; padding: 10px; text-align: center; }
    .container { max-width: 1200px; margin: auto; padding: 2rem; display: flex; justify-content: center; gap: 2rem; }
    .car-card { background: #fff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 1rem; text-align: center; }
    .car-card img { width: 100%; height: 200px; object-fit: contain; border-radius: 8px; margin-bottom: 10px; }
    .car-title { font-size: 1.2rem; font-weight: bold; margin: 0.5rem 0; }
    .price { color: green; font-size: 1rem; margin: 0.5rem 0; }
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Honda Civic 2024",
    "image": [
        "${DOMAIN}/images/hondaCivic.jpg",
        "${DOMAIN}/images/hondaCivic-front.jpg",
        "${DOMAIN}/images/hondaCivic-back.jpg"
    ],
    "url": "${DOMAIN}",
    "description": "The Honda Civic 2024 is a compact car known for its reliability, fuel efficiency, and modern features. Perfect for city driving and long commutes.",
    "brand": { "@type": "Brand", "name": "Honda" },
    "model": "Civic",
    "productionDate": "2024",
    "vehicleModelDate": "2024",
    "category": "Compact Car",
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
        "author": { "@type": "Person", "name": "John Doe" },
        "reviewBody": "The Honda Civic is an excellent car with great performance and comfort. Highly recommended for daily use.",
        "datePublished": "2024-11-15"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "123",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": "${DOMAIN}/honda-civic",
      "priceCurrency": "INR",
      "price": "2500000",
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "CarStore", "url": "${DOMAIN}" }
    },
    "manufacturer": { "@type": "Organization", "name": "Honda" },
    "mpn": "CIVIC2024",
    "sku": "HON-CIV-2024-001"
  }
  </script>
</head>
<body>
  <header>
    <h1>Welcome to CarStore</h1>
    <p>Explore our collection of top-rated vehicles</p>
  </header>
  <div class="container">
    <div class="car-card">
      <img src="${DOMAIN}/images/hondaCivic.jpg" alt="Honda Civic" >
      <img src="${DOMAIN}/images/hondaCivic-front.jpg" alt="Honda Civic Front">
      <img src="${DOMAIN}/images/hondaCivic-back.jpg" alt="Honda Civic Back">
      <div class="car-title">Honda Civic 2024</div>
      <div class="price">₹25,00,000</div>
    </div>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access the site at ${DOMAIN}`);
});
