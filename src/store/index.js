import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Hela 1.2 — Ryzen 5 5600X & RTX 2060 6GB',
        originalPrice: 160000,
        currentPrice: 150000,
        image: 'https://ext.same-assets.com/755940251/1385160223.png',
        specs: [
          'Ryzen 5 5600X Processor',
          'MSI GeForce RTX 2060 6GB Graphics Card Used',
          'TeamGroup 256GB Nvme + 1TB HDD',
          'Gigabyte B450M DS3H V2 Motherboard',
          'E-Dragon Draco 600w PSU',
          'Thunder Black Fox Case',
          'TeamGroup Elite 16GB DDR4 3200Mhz RAM'
        ],
        onSale: true
      },
      {
        id: 2,
        name: 'Hela 1.3 — i5 12400f Gen & RX 6600 8GB',
        originalPrice: 168500,
        currentPrice: 168500,
        image: 'https://ext.same-assets.com/755940251/1385160223.png',
        specs: [
          'Core i5 12400f Processor',
          'Radeon RX 6600 8GB Used Graphics Card',
          'TeamGroup 512GB Nvme',
          'Asus Prime B760M-k Motherboard',
          'E-Dragon Draco 600w Power Supply',
          'Thunder Furor Case',
          'TeamGroup Elite 16GB 5600Mhz RAM'
        ],
        onSale: false
      },
      {
        id: 3,
        name: 'Odin 1.0 — Ryzen 9 9900X & RTX 4080 Super Trinity 16GB',
        originalPrice: 767000,
        currentPrice: 767000,
        image: 'https://ext.same-assets.com/755940251/1385160223.png',
        specs: [
          'Ryzen 9 9900X Processor',
          'Zotac RTX 4080 Super Trinity 16GB Graphics Card',
          'Samsung 990 Pro PCle 1TB NVME GEN4 Storage',
          'MSI PRO X870-P DDR5 MotherBoard',
          'XPG Core Reactor 850w Plus PSU',
          'Lian Li o11 Vision With 8x ARGB Fans Infinity',
          'XPG Lancer 32GB DDR5 5200Mhz RAM'
        ],
        onSale: false
      },
      {
        id: 4,
        name: 'Odin 1.1 — Core i9 14900K & RTX 5080 16GB',
        originalPrice: 929000,
        currentPrice: 929000,
        image: 'https://ext.same-assets.com/755940251/1385160223.png',
        specs: [
          'Core i9 14900KProcessor',
          'Zotac RTX 5080 16GBGraphics Card',
          'Samsung 990 Pro PCle 1TB NVME GEN4 Storage',
          'Gigabyte Z790 AORUS ELITE AX DDR5MotherBoard',
          'Cooler Master MWE Gold 1050wPSU',
          'ASUS TUF Gaming GT502 ATX Mid Tower Gaming Case',
          'XPGLANCER BLADE RGB DDR5 6000MHz 32GBRAM'
        ],
        onSale: false
      }
    ],
    brands: [
      { name: 'Intel', logo: 'https://ext.same-assets.com/755940251/3228737747.webp' },
      { name: 'AMD', logo: 'https://ext.same-assets.com/755940251/3228737747.webp' },
      { name: 'NVIDIA', logo: 'https://ext.same-assets.com/755940251/3228737747.webp' },
      { name: 'ASRock', logo: 'https://ext.same-assets.com/755940251/3228737747.webp' },
      { name: 'ASUS', logo: 'https://ext.same-assets.com/755940251/3228737747.webp' },
      { name: 'MSI', logo: 'https://ext.same-assets.com/755940251/3228737747.webp' }
    ],
    testimonials: [
      {
        id: 1,
        name: 'Umair Ahmed',
        rating: 5,
        text: 'Zeatro gaming store with have good experience..'
      },
      {
        id: 2,
        name: 'Muhammad Jan Khan',
        rating: 5,
        text: 'Amazing Service. It was very quick and staff were very friendly and provides parts in good price. I will make sure to come to zestro again in the future.'
      },
      {
        id: 3,
        name: 'Usman Baluch',
        rating: 5,
        text: 'Its my first time making a gaming PC, team helped me out with the best available option in my budget which help alot for a person having minimal tech knowledge. It was a very easy process from start to finish.. Hoping to return for future upgrades. Keep it up guys.'
      }
    ]
  },
  getters: {
    featuredProducts: state => {
      return state.products.slice(0, 4);
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === parseInt(id));
    }
  },
  mutations: {
    // Mutations will be added as needed
  },
  actions: {
    // Actions will be added as needed
  }
});
