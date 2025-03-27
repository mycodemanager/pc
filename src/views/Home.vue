<template>
  <div class="home">
    <hero-banner />
    <features-section />
    <featured-products />
    <testimonials-section />
    <brands-section />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue';
import FeaturesSection from '@/components/home/FeaturesSection.vue';
import FeaturedProducts from '@/components/home/FeaturedProducts.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import BrandsSection from '@/components/home/BrandsSection.vue';

export default {
  name: 'Home',
  components: {
    HeroBanner,
    FeaturesSection,
    FeaturedProducts,
    TestimonialsSection,
    BrandsSection
  }
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
</style>
