<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-column">
            <h3>For Customers</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/account">My Account</router-link></li>
              <li><router-link to="/account/orders">Order History</router-link></li>
              <li><router-link to="/track-orders">Track Orders</router-link></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Company</h3>
            <ul>
              <li><router-link to="/shipping-policy">Shipping</router-link></li>
              <li><router-link to="/refund-policy">Refund Policy</router-link></li>
              <li><router-link to="/warranty-policy">Warranty</router-link></li>
              <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
              <li><router-link to="/terms">Terms & Conditions</router-link></li>
              <li><router-link to="/sitemap">Sitemap</router-link></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Shop Now</h3>
            <ul>
              <li><router-link to="/gaming-pc">Gaming PC</router-link></li>
              <li><router-link to="/graphic-cards">Graphic Cards</router-link></li>
              <li><router-link to="/processors">Processors</router-link></li>
              <li><router-link to="/motherboards">Motherboards</router-link></li>
              <li><router-link to="/ram">RAM</router-link></li>
              <li><router-link to="/storage">Storage</router-link></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Karachi Address</h3>
            <p>Zestro Gaming Store, Shop # 45, Smart Plaza, Off University Road, Gulshan-e-Iqbal, Karachi</p>
            <h3 class="mt-4">Rawalpindi Address</h3>
            <p>Al Haram Plaza Shop no 5, Block A 2nd Floor Commercial Market Satellite Town Rawalpindi</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-middle">
      <div class="container">
        <div class="social-icons">
          <a href="https://www.facebook.com/zestrogamingdotcom/" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/@zestro-gamingpk" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/zestro_gamingpk/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@zestro_gaming" target="_blank"><i class="fab fa-tiktok"></i></a>
        </div>

        <div class="payment-methods">
          <img src="https://ext.same-assets.com/1034384370/3304459418.png" alt="DMCA Protected" class="dmca-badge">
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© 2024, Zestro Gaming All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style lang="scss" scoped>
.site-footer {
  background-color: #1a1a1a;
  color: #fff;
  padding-top: 50px;

  .footer-top {
    padding-bottom: 30px;

    .footer-columns {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;

      @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .footer-column {
      h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #fff;
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          margin-bottom: 10px;

          a {
            color: #aaa;
            transition: color 0.3s;
            font-size: 14px;

            &:hover {
              color: #bb2c4b;
            }
          }
        }
      }

      p {
        color: #aaa;
        font-size: 14px;
        line-height: 1.6;
      }

      .mt-4 {
        margin-top: 20px;
      }
    }
  }

  .footer-middle {
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .social-icons {
      display: flex;
      gap: 15px;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        transition: background-color 0.3s;

        &:hover {
          background-color: #bb2c4b;
        }
      }
    }

    .payment-methods {
      img {
        height: 40px;
      }
    }
  }

  .footer-bottom {
    padding: 15px 0;
    background-color: #000;
    text-align: center;

    p {
      margin: 0;
      font-size: 14px;
      color: #aaa;
    }
  }
}
</style>
