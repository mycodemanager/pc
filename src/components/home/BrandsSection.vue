<template>
  <section class="brands-section">
    <div class="container">
      <h2 class="section-title">WE WORK WITH ONLY THE BEST BRANDS</h2>
      <p class="section-description">
        Shop from the computer store in Pakistan. Zestro brings gaming components and accessories for enthusiast gamers.
        On our online store, you can buy Graphic cards, prebuilt gaming pc, motherboards, RAMs, processors, monitors,
        and other gaming accessories. Get your hands on the branded products exclusively available on Zestro.
      </p>

      <div class="brands-grid">
        <div v-for="(brand, index) in brands" :key="index" class="brand-item">
          <img :src="brand.logo" :alt="brand.name">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BrandsSection',
  computed: {
    ...mapState(['brands'])
  }
};
</script>

<style lang="scss" scoped>
.brands-section {
  background-color: #110f15;
  padding: 60px 0;

  .section-title {
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .section-description {
    color: #aaa;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px;
    font-size: 0.9rem;
    line-height: 1.7;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .brands-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    @media (min-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(6, 1fr);
    }

    .brand-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;

      img {
        max-width: 100%;
        max-height: 60px;
        filter: grayscale(1) brightness(2);
        transition: filter 0.3s;

        &:hover {
          filter: grayscale(0) brightness(1);
        }
      }
    }
  }
}
</style>
