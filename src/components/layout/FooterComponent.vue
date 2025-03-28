<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-column">
            <h3>Karachi Address</h3>
            <p>Zestro Gaming Store, Shop # 45, Smart Plaza, Off University Road, Gulshan-e-Iqbal, Karachi</p>
            <h3 class="mt-4">Rawalpindi Address</h3>
            <p>Al Haram Plaza Shop no 5, Block A 2nd Floor Commercial Market Satellite Town Rawalpindi</p>
          </div>
          <div class="footer-column">
            <h3>Payment methods</h3>
            <div class="payment-box">
              <img src="../../assets/payment/jazzcash.png" alt="Payment methods" />
              <img src="../../assets/payment/easypaisa.png" alt="Payment methods" />
            </div>
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
        <p>Copyright © 2025 | Powered by Data Network Solutions</p>
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
      display: flex;
      justify-content: space-around;
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

.payment-box {
  display: flex;
  gap: 10px;

  img {
    height: 60px;
    border-radius: 6px;
  }
}
</style>
