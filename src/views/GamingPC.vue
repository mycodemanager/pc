<template>
  <div class="gaming-pc-page">
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">Gaming PC</h1>
      </div>
    </div>

    <div class="container">
      <div class="gaming-pc-content">
        <div class="sidebar">
          <div class="filter-section">
            <h3>Filter by Price</h3>
            <div class="price-ranges">
              <label class="filter-option">
                <input type="checkbox" value="20000-100000"> PKR 20,000 - PKR 100,000
              </label>
              <label class="filter-option">
                <input type="checkbox" value="100000-300000"> PKR 100,000 - PKR 300,000
              </label>
              <label class="filter-option">
                <input type="checkbox" value="300000-500000"> PKR 300,000 - PKR 500,000
              </label>
              <label class="filter-option">
                <input type="checkbox" value="500000-800000"> PKR 500,000 - PKR 800,000
              </label>
              <label class="filter-option">
                <input type="checkbox" value="800000-2100000"> PKR 800,000 - PKR 2,100,000
              </label>
            </div>
          </div>

          <div class="filter-section">
            <h3>Performance</h3>
            <div class="performance-options">
              <label class="filter-option">
                <input type="checkbox" value="Good"> Good
              </label>
              <label class="filter-option">
                <input type="checkbox" value="Better"> Better
              </label>
              <label class="filter-option">
                <input type="checkbox" value="Ultra"> Ultra
              </label>
              <label class="filter-option">
                <input type="checkbox" value="Extreme"> Extreme
              </label>
            </div>
          </div>

          <div class="filter-section">
            <h3>CPU</h3>
            <div class="cpu-options">
              <label class="filter-option">
                <input type="checkbox" value="AMD"> AMD
              </label>
              <label class="filter-option">
                <input type="checkbox" value="Intel"> Intel
              </label>
            </div>
          </div>
        </div>

        <div class="products-container">
          <div class="products-grid">
            <product-card
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/products/ProductCard.vue';

export default {
  name: 'GamingPC',
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['products'])
  }
};
</script>

<style lang="scss" scoped>
.gaming-pc-page {
  min-height: 100vh;
  background-color: #110f15;

  .page-banner {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://ext.same-assets.com/755940251/3529918070.webp') center/cover no-repeat;
    padding: 60px 0;
    margin-bottom: 40px;

    .page-title {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .gaming-pc-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    padding-bottom: 60px;

    @media (min-width: 992px) {
      grid-template-columns: 250px 1fr;
    }
  }

  .sidebar {
    .filter-section {
      background-color: #1a1921;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;

      h3 {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 10px;
      }

      .filter-option {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        color: #aaa;
        font-size: 0.9rem;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #fff;
        }

        input {
          margin-right: 10px;
        }
      }
    }
  }

  .products-container {
    .products-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
</style>
