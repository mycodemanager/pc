<template>
  <section class="featured-products">
    <div class="container">
      <h2 class="section-title">Best Sellers</h2>
      <p class="section-subtitle">Buy The Best Build From Pakistan Most Trusted Computer Store At a Competitive Price</p>

      <div class="products-grid">
        <product-card
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/products/ProductCard.vue';

export default {
  name: 'FeaturedProducts',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['featuredProducts'])
  }
};
</script>

<style lang="scss" scoped>
.featured-products {
  background-color: #110f15;
  padding: 60px 0;

  .section-title {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .section-subtitle {
    text-align: center;
    color: #aaa;
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto 40px;
  }

  .products-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
