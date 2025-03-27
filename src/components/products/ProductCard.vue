<template>
  <div class="product-card">
    <div class="sale-badge" v-if="product.onSale">SALE!</div>
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
    </div>

    <div class="product-content">
      <h3 class="product-title">
        <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
      </h3>

      <div class="product-price">
        <template v-if="product.onSale">
          <span class="original-price">{{ formatPrice(product.originalPrice) }}</span>
          <span class="current-price">{{ formatPrice(product.currentPrice) }}</span>
        </template>
        <template v-else>
          <span class="current-price">{{ formatPrice(product.currentPrice) }}</span>
        </template>
      </div>

      <div class="product-specs">
        <ul>
          <li v-for="(spec, index) in product.specs" :key="index">
            {{ spec }}
          </li>
        </ul>
      </div>

      <div class="product-actions">
        <router-link :to="`/product/${product.id}`" class="view-details">View Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
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
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  background-color: #1a1921;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }

  .sale-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #bb2c4b;
    color: #fff;
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 4px;
    z-index: 1;
  }

  .product-image {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #110f15;

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }

  .product-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .product-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.4;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #bb2c4b;
      }
    }
  }

  .product-price {
    margin-bottom: 15px;

    .original-price {
      color: #aaa;
      text-decoration: line-through;
      margin-right: 10px;
      font-size: 0.9rem;
    }

    .current-price {
      color: #bb2c4b;
      font-weight: 700;
      font-size: 1.2rem;
    }
  }

  .product-specs {
    margin-bottom: 20px;
    flex-grow: 1;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: #aaa;
        font-size: 0.85rem;
        margin-bottom: 8px;
        padding-left: 15px;
        position: relative;
        line-height: 1.4;

        &:before {
          content: "•";
          color: #bb2c4b;
          position: absolute;
          left: 0;
        }
      }
    }
  }

  .product-actions {
    margin: 0 auto;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .add-to-cart {
      background-color: #bb2c4b;
      color: #fff;
      border: none;
      padding: 10px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 0.9rem;

      &:hover {
        background-color: darken(#bb2c4b, 10%);
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
  }
}
</style>
