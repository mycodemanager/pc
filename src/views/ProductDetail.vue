<template>
  <div class="product-detail" v-if="product">
    <div class="container">
      <div class="product-breadcrumb">
        <router-link to="/">Home</router-link> /
        <router-link to="/gaming-pc">Gaming PC</router-link> /
        <span>{{ product.name }}</span>
      </div>

      <div class="product-content">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
        </div>

        <div class="product-info">
          <h1 class="product-title">{{ product.name }}</h1>

          <div class="product-price">
            <template v-if="product.onSale">
              <span class="original-price">{{ formatPrice(product.originalPrice) }}</span>
              <span class="current-price">{{ formatPrice(product.currentPrice) }}</span>
            </template>
            <template v-else>
              <span class="current-price">{{ formatPrice(product.currentPrice) }}</span>
            </template>
          </div>

          <div class="product-description">
            <h3>Specifications:</h3>
            <ul class="specs-list">
              <li v-for="(spec, index) in product.specs" :key="index">{{ spec }}</li>
            </ul>
          </div>

          <div class="product-actions">

            <button class="add-to-cart-btn" @click="onBuyNow(product.id)">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="loading" v-else>
    <div class="container">
      <p>Loading product...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductDetail',
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    ...mapGetters(['getProductById']),
    product() {
      return this.getProductById(this.$route.params.id);
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price);
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    onBuyNow(id) {
      // 在这里添加购买逻辑，例如添加到购物车或立即购买
      this.$router.push({ name: 'payment',params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 60px 0;
  background-color: #110f15;
  min-height: 80vh;

  .product-breadcrumb {
    margin-bottom: 30px;
    color: #aaa;
    font-size: 0.9rem;

    a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #bb2c4b;
      }
    }

    span {
      color: #fff;
    }
  }

  .product-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .product-image {
    background-color: #1a1921;
    border-radius: 8px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 400px;
      object-fit: contain;
    }
  }

  .product-info {
    .product-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #fff;
    }

    .product-price {
      margin-bottom: 30px;

      .original-price {
        color: #aaa;
        text-decoration: line-through;
        margin-right: 15px;
        font-size: 1.2rem;
      }

      .current-price {
        color: #bb2c4b;
        font-weight: 700;
        font-size: 1.8rem;
      }
    }

    .product-description {
      margin-bottom: 30px;

      h3 {
        color: #fff;
        font-size: 1.3rem;
        margin-bottom: 15px;
      }

      .specs-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          color: #aaa;
          font-size: 1rem;
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;

          &:before {
            content: "•";
            color: #bb2c4b;
            position: absolute;
            left: 0;
            font-size: 1.2rem;
          }
        }
      }
    }

    .product-actions {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (min-width: 576px) {
        flex-direction: row;
        align-items: center;
      }

      .quantity {
        display: flex;
        align-items: center;

        button {
          width: 40px;
          height: 40px;
          background-color: #1a1921;
          border: none;
          color: #fff;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          &:first-child {
            border-radius: 4px 0 0 4px;
          }

          &:last-child {
            border-radius: 0 4px 4px 0;
          }
        }

        input {
          width: 60px;
          height: 40px;
          background-color: #1a1921;
          border: none;
          color: #fff;
          text-align: center;
          font-size: 1rem;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }

      .add-to-cart-btn {
        flex-grow: 1;
        height: 40px;
        background-color: #bb2c4b;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: darken(#bb2c4b, 10%);
        }
      }
    }
  }
}

.loading {
  padding: 100px 0;
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
}
</style>
