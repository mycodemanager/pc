<template>
  <section class="testimonials-section">
    <div class="container">
      <h2 class="section-title">WHAT OUR CUSTOMERS SAY</h2>
      <p class="section-description">
        What our customers say about computer store. We focus on customer satisfaction and this led us to become the best computer shop in Pakistan
      </p>

      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-header">
            <h4 class="testimonial-name">{{ testimonial.name }}</h4>
            <div class="testimonial-rating">
              <span v-for="star in 5" :key="star" class="star">
                <i :class="['fas', 'fa-star', { 'active': star <= testimonial.rating }]"></i>
              </span>
            </div>
          </div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TestimonialsSection',
  computed: {
    ...mapState(['testimonials'])
  }
};
</script>

<style lang="scss" scoped>
.testimonials-section {
  background-color: #1a1921;
  padding: 60px 0;

  .section-title {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .section-description {
    text-align: center;
    color: #aaa;
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto 40px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .testimonial-card {
    background-color: #110f15;
    border-radius: 8px;
    padding: 25px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    .testimonial-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;

      .testimonial-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
        margin: 0;
      }

      .testimonial-rating {
        display: flex;

        .star {
          color: #666;
          margin-left: 2px;

          i.active {
            color: #bb2c4b;
          }
        }
      }
    }

    .testimonial-text {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;
    }
  }
}
</style>
