<template>
  <div class="zestro-deals-page">
    <!-- Header -->
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">ZESTRO PRE-WINTER PC DEALS</h1>
        <p class="hero-subtitle">SAVE UP TO PKR 15,000 TODAY!</p>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products">
      <div class="container">
        <div class="products-grid">
          <!-- Product 1 -->
          <div class="product-card">
            <span class="sale-badge">Sale!</span>
            <div class="product-image">
              <img src="../assets/images/office-mate-case.png" alt="Gorr 1.1">
            </div>
            <div class="product-info">
              <h5 class="product-title">Gorr 1.1 – Ryzen 5 2600 & 2GB</h5>
              <div class="product-price">
                <span class="original-price">Rs55,000.00</span>
                <span class="current-price">Rs50,000.00</span>
              </div>
              <ul class="product-specs">
                <li>Ryzen 5 2600 Processor</li>
                <li>2GB Graphic Card Used</li>
                <li>TeamGroup 256GB NVMe</li>
                <li>Gigabyte A320M Used Motherboard</li>
                <li>450w Power Supply</li>
                <li>Thunder Office Mate</li>
                <li>TeamGroup Elite 8GB RAM</li>
              </ul>
              <router-link :to="`/product/${1}`" class="view-details">View Details</router-link>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="product-card">
            <span class="sale-badge">Sale!</span>
            <div class="product-image">
              <img src="../assets/images/tizona-case.png" alt="Gorr 1.4">
            </div>
            <div class="product-info">
              <h5 class="product-title">Gorr 1.4 – Ryzen 5 2600 & RX 580 8GB</h5>
              <div class="product-price">
                <span class="original-price">Rs85,000.00</span>
                <span class="current-price">Rs77,000.00</span>
              </div>
              <ul class="product-specs">
                <li>Ryzen 5 2600 Processor</li>
                <li>Sapphire Radeon RX 580 8GB GPU</li>
                <li>HikVision E100 128GB 2.5 + 500GB HDD</li>
                <li>Gigabyte A320M DDR4 Motherboard Used</li>
                <li>E-Dragon Draco 600w Power Supply</li>
                <li>Thunder Druk Case</li>
                <li>TeamGroup Elite 8GB DDR4 3200Mhz RAM</li>
              </ul>
              <router-link :to="`/product/${2}`" class="view-details">View Details</router-link>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/images/tizona-case.png" alt="Hela 1.1">
            </div>
            <div class="product-info">
              <h5 class="product-title">Hela 1.1 – Core i5-12400F & RX 6600 8GB</h5>
              <div class="product-price">
                <span class="current-price">Rs150,000.00</span>
              </div>
              <ul class="product-specs">
                <li>Core i5 12400f Processor</li>
                <li>Sapphire Pulse Radeon RX 6600 8GB GDDR6 Graphics Card Used</li>
                <li>TeamGroup 256GB NVME + 1TB HDD</li>
                <li>MSI Pro H610M-E DDR4 MotherBoard</li>
                <li>E-Dragon Draco 600W PSU</li>
                <li>Thunder X-Star TGS-621 ATX Gaming Case</li>
                <li>TeamGroup Elite 16GB DDR4 3200Mhz RAM</li>
              </ul>
              <router-link :to="`/product/${3}`" class="view-details">View Details</router-link>
            </div>
          </div>

          <!-- Product 4 -->
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/images/tizona-case.png" alt="Hela 1.4">
            </div>
            <div class="product-info">
              <h5 class="product-title">Hela 1.4 – Core i5 12400F & RTX 3060 12GB Used</h5>
              <div class="product-price">
                <span class="current-price">Rs200,000.00</span>
              </div>
              <ul class="product-specs">
                <li>Core i5 12400F Processor</li>
                <li>Zotac Gaming RTX 3060 12GB Used GPU</li>
                <li>TeamGroup 256GB MP33 M.2 NVME + 1TB HDD</li>
                <li>MSI PRO B760M-E DDR5 Motherboard</li>
                <li>XPG Pylon 650W 80 Plus Bronze PSU</li>
                <li>Thunder Tizona Case With 4 ARGB Fans</li>
                <li>TeamGroup Elite DDR5 16GB 5600Mhz Ram</li>
              </ul>
              <router-link :to="`/product/${4}`" class="view-details">View Details</router-link>
            </div>
          </div>

          <!-- Product 5 -->
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/images/tizona-case.png" alt="Loki 1.2">
            </div>
            <div class="product-info">
              <h5 class="product-title">Loki 1.2 – Core i5 13400F & RTX 4060 8GB</h5>
              <div class="product-price">
                <span class="current-price">Rs231,000.00</span>
              </div>
              <ul class="product-specs">
                <li>Core i5 13400f Processor</li>
                <li>MSI Geforce RTX 4060 Ventus 2X 8GB GPU</li>
                <li>TeamGroup 256GB MP33 M.2 NVME + 1TB HDD</li>
                <li>MSI Pro B760M-E DDR5 Motherboard</li>
                <li>XPG Pylon 650w 80 Plus Bronze PSU</li>
                <li>Thunder Tizona Case</li>
                <li>XPG Lancer Blade RGB 16GB (2x8GB) 5600MHz DDR5</li>
              </ul>
              <router-link :to="`/product/${1}`" class="view-details">View Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ZestroDealsPage',
  data() {
    return {
      // You can add reactive data here if needed for future enhancements
    }
  },
  methods: {
    // Methods can be added here for future enhancements
  }
}
</script>

<style scoped>
.zestro-deals-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  background-color: #0f0f10;
}

.top-nav {
  background-color: #000;
  padding: 8px 0;
}

.top-nav-list {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  font-size: 12px;
}

.main-nav {
  padding: 15px 0;
  border-bottom: 1px solid #333;
}

.main-nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px;
}

.nav-list {
  display: flex;
  gap: 20px;
}

.nav-list li {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
}

.nav-list li.active a {
  color: #d53140;
}

/* Hero Section */
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/images/gaming-setup-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  text-align: center;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 18px;
  font-weight: 500;
}

/* Products Section */
.products {
  padding: 60px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  background-color: #0f0f10;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.product-info {
  padding: 20px;
}

.product-title {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
}

.product-price {
  text-align: center;
  margin-bottom: 15px;
}

.product-specs {
  margin-bottom: 20px;
  font-size: 13px;
}

.product-specs li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 5px;
}

.product-specs li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #d53140;
}

.add-to-cart-btn {
  width: 100%;
}

/* Footer */
.footer {
  background-color: #1a1a1a;
  margin-top: auto;
}

.footer-top {
  padding: 50px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.footer-logo img {
  height: 40px;
  margin-bottom: 20px;
}

.address-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 5px;
}

.address-info p {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-icons a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.social-icons a:hover {
  background-color: #d53140;
}

.footer-col h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  font-size: 14px;
  color: #aaa;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #d53140;
}

.footer-bottom {
  background-color: #0f0f10;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
  color: #aaa;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-nav-container {
    flex-direction: column;
    gap: 15px;
  }

  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-title {
    font-size: 30px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}

.view-details {
      background-color: transparent;
      border: 1px solid #bb2c4b;
      color: #fff;
      padding: 10px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.3s;
      font-size: 0.9rem;

      &:hover {
        background-color: rgba(187, 44, 75, 0.2);
      }
    }
</style>
