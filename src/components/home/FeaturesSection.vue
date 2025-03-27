<template>
  <section class="features-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-truck"></i>
          </div>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping to all areas of Rawalpindi, Islamabad and Karachi.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-headset"></i>
          </div>
          <h3>24/7 CUSTOMER SUPPORT</h3>
          <p>Our team is available 24/7 to answer your queries and solve problems you are facing.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-credit-card"></i>
          </div>
          <h3>SECURE PAYMENT</h3>
          <p>With the secure payment method, you can safely perform transactions.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
};
</script>

<style lang="scss" scoped>
.features-section {
  background-color: #1a1921;
  padding: 50px 0;

  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: rgba(187, 44, 75, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      i {
        font-size: 30px;
        color: #bb2c4b;
      }
    }

    h3 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 15px;
      font-weight: 600;
    }

    p {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.6;
      max-width: 250px;
      margin: 0 auto;
    }
  }
}
</style>
