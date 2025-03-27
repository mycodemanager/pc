<template>
  <section class="hero-banner">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="brand-name">ZESTRO</div>
          <h1>Best Computer Store In Pakistan</h1>
          <p>Shop latest Gaming PCs from one of the best computer stores in Pakistan at reasonable prices</p>
          <div class="hero-buttons">
            <router-link to="/gaming-pc" class="btn btn-primary">SHOP PREBUILDS</router-link>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://ext.same-assets.com/755940251/51754387.png" alt="Gaming PC">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBanner'
};
</script>

<style lang="scss" scoped>
.hero-banner {
  background: linear-gradient(to right, #110f15, #bb2c4b);
  padding: 50px 0;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .hero-text {
    color: #fff;
    text-align: center;
    margin-bottom: 40px;

    @media (min-width: 992px) {
      text-align: left;
      margin-bottom: 0;
      flex: 0 0 50%;
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 15px;

      @media (min-width: 768px) {
        font-size: 3.5rem;
      }
    }

    p {
      font-size: 1rem;
      margin-bottom: 30px;
      opacity: 0.8;
      max-width: 500px;

      @media (min-width: 992px) {
        font-size: 1.2rem;
      }
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;

      @media (min-width: 992px) {
        justify-content: flex-start;
      }

      .btn {
        padding: 12px 25px;
        font-weight: 600;

        &-primary {
          background-color: #bb2c4b;
          color: #fff;

          &:hover {
            background-color: darken(#bb2c4b, 10%);
          }
        }

        &-outline {
          border: 2px solid #fff;
          color: #fff;

          &:hover {
            background-color: #fff;
            color: #110f15;
          }
        }
      }
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;
    flex: 0 0 50%;

    img {
      max-width: 80%;

      @media (min-width: 768px) {
        max-width: 100%;
      }
    }
  }
}
</style>
