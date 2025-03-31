<template>
  <header class="site-header">

    <div class="main-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <router-link to="/home">
              <img src="../../assets/logo.png" alt="Zestro Gaming" />
            </router-link>
          </div>

          <nav class="main-nav">
            <ul>
              <li><router-link to="/home">Home</router-link></li>
              <li><router-link to="/deals">Deals</router-link></li>
              <li><router-link to="/gaming-pc">Gaming PC</router-link></li>
            </ul>
          </nav>

          <div class="menu-toggle" @click="toggleMobileMenu">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.site-header {
  width: 100%;

  .top-bar {
    background-color: #000;
    padding: 8px 0;

    &-links {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;

        li {
          margin-right: 20px;
          font-size: 12px;

          &:last-child {
            margin-right: 0;
          }

          a {
            color: #fff;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .main-header {
    background-color: #110f15;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      max-width: 150px;

      img {
        width: 100%;
      }
    }

    .main-nav {
      ul {
        display: flex;
        margin: 0;
        padding: 0;

        li {
          margin-right: 30px;

          &:last-child {
            margin-right: 0;
          }

          a {
            color: #fff;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 14px;
            transition: color 0.3s;

            &:hover, &.router-link-active {
              color: #bb2c4b;
            }
          }
        }
      }
    }

    .menu-toggle {
      display: none;
      font-size: 24px;
      cursor: pointer;
      color: #fff;
    }
  }
}

@media (max-width: 768px) {
  .site-header {
    .main-header {
      .main-nav {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100vh;
        background-color: #110f15;
        padding: 60px 30px;
        transition: left 0.3s ease;
        z-index: 100;

        &.active {
          left: 0;
        }

        ul {
          flex-direction: column;

          li {
            margin: 0 0 20px 0;

            a {
              font-size: 16px;
            }
          }
        }
      }

      .menu-toggle {
        display: block;
      }
    }
  }
}
</style>
