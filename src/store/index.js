import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Valor 1.0 — Intel i3-10100F & GT 1030',
        originalPrice: 36000,
        currentPrice: 32999,
        image: 'https://www.antec.com/product/case/images/nx500-pdt01.png',
        specs: [
          'Intel Core i3-10100F Processor',
          'NVIDIA GeForce GT 1030 2GB Graphics Card',
          'Kingston A400 240GB SSD',
          'Gigabyte H410M S2 Motherboard',
          'Antec VP450P 450W PSU',
          'Antec NX500 Case with RGB Fans',
          'Crucial 8GB DDR4 2666MHz RAM'
        ],
        onSale: true
      },
      {
        id: 2,
        name: 'Phoenix 2.0 — Ryzen 3 3200G & RX 550',
        originalPrice: 39000,
        currentPrice: 35999,
        image: 'https://cdn.mos.cms.futurecdn.net/uXngTqwS7CS3FSi675TJwG-320-80.jpg',
        specs: [
          'AMD Ryzen 3 3200G Processor with Vega 8 Graphics',
          'MSI Radeon RX 550 4GB Graphics Card',
          'Western Digital Green 240GB SSD + 1TB HDD',
          'ASRock A320M-HDV Motherboard',
          'Corsair CV450 450W PSU',
          'MSI MAG Forge 100M Case',
          'G.Skill Ripjaws V 8GB (2x4GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 3,
        name: 'Falcon 1.5 — Intel i3-12100F & GTX 1650',
        originalPrice: 48000,
        currentPrice: 44999,
        image: 'https://m.media-amazon.com/images/I/71Bg7QYIlKL._AC_UF894,1000_QL80_.jpg',
        specs: [
          'Intel Core i3-12100F Processor',
          'ZOTAC GeForce GTX 1650 4GB GDDR6 Graphics Card',
          'Crucial P2 500GB NVMe SSD',
          'MSI PRO H610M-G Motherboard',
          'Cooler Master MWE 550W V2 PSU',
          'GAMDIAS AURA GC2 Case with ARGB Fans',
          'Kingston FURY Beast 16GB DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 4,
        name: 'Specter 1.0 — Ryzen 5 5500 & RX 6400',
        originalPrice: 47000,
        currentPrice: 45500,
        image: 'https://www.mydiypcusa.com/media/catalog/product/cache/1/image/880x660/9df78eab33525d08d6e5fb8d27136e95/1/1/11-353-151-z01.jpg',
        specs: [
          'AMD Ryzen 5 5500 Processor',
          'ASUS Dual RX 6400 4GB Graphics Card',
          'Samsung 870 EVO 500GB SSD',
          'ASRock B450M Pro4 Motherboard',
          'EVGA 500 BQ 500W 80+ Bronze PSU',
          'DIYPC Solo-T2-R Black Case',
          'Corsair Vengeance LPX 16GB DDR4 3200MHz RAM'
        ],
        onSale: false
      },
      {
        id: 5,
        name: 'Nexus 1.0 — Intel i5-10400F & GTX 1050 Ti',
        originalPrice: 43000,
        currentPrice: 39999,
        image: 'https://www.antec.com/product/case/images/gx202-pdt1.png',
        specs: [
          'Intel Core i5-10400F Processor',
          'MSI GeForce GTX 1050 Ti 4GB GDDR5 Graphics Card',
          'WD Blue SN570 500GB NVMe SSD',
          'Gigabyte B460M DS3H AC Motherboard',
          'Thermaltake Smart 500W 80+ PSU',
          'Antec GX202 Gaming Case',
          'TeamGroup T-Force Vulcan Z 16GB (2x8GB) DDR4 3000MHz RAM'
        ],
        onSale: true
      },
      {
        id: 6,
        name: 'Titan Mini — Ryzen 5 3600 & RX 5500 XT',
        originalPrice: 49000,
        currentPrice: 47500,
        image: 'https://i.ytimg.com/vi/f84vRwh-ih4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDswfBgQVU6Lj34LND9rINSwvnLMw',
        specs: [
          'AMD Ryzen 5 3600 Processor',
          'Sapphire Pulse Radeon RX 5500 XT 4GB Graphics Card',
          'Kingston KC2500 500GB NVMe SSD',
          'MSI B450M Mortar MAX Motherboard',
          'Cooler Master MWE Gold 550W PSU',
          'Lian Li LANCOOL 205M Case',
          'Crucial Ballistix 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: false
      },
      {
        id: 7,
        name: 'Echo 1.0 — Intel i5-11400 & GTX 1660',
        originalPrice: 49500,
        currentPrice: 48000,
        image: 'https://m.media-amazon.com/images/I/81a6xDb+JVL.jpg',
        specs: [
          'Intel Core i5-11400 Processor',
          'GALAX GeForce GTX 1660 6GB GDDR5 Graphics Card',
          'Crucial MX500 500GB SATA SSD',
          'ASRock B560M-HDV Motherboard',
          'Deepcool DQ750-M 750W PSU',
          'MUSETEX ATX PC Case with 6 ARGB Fans',
          'ADATA XPG GAMMIX D30 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: false
      },
      {
        id: 8,
        name: 'Vector 1.0 — Ryzen 5 4500 & GTX 1660 Super',
        originalPrice: 46000,
        currentPrice: 43500,
        image: 'https://www.mydiypcusa.com/media/catalog/product/cache/1/image/880x660/9df78eab33525d08d6e5fb8d27136e95/1/1/11-353-102-01.jpg',
        specs: [
          'AMD Ryzen 5 4500 Processor',
          'ASUS TUF Gaming GeForce GTX 1660 Super 6GB GDDR6 Graphics Card',
          'WD Blue 500GB SSD + 1TB HDD',
          'MSI B450M-A PRO MAX Motherboard',
          'Corsair CX550M 550W Semi-Modular PSU',
          'DIYPC Skyline-06-WG Black/Green Case',
          'Corsair Vengeance LPX 16GB DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 9,
        name: 'Pulsar 1.0 — Intel i3-13100F & RX 6500 XT',
        originalPrice: 48500,
        currentPrice: 46999,
        image: 'https://images.saymedia-content.com/.image/t_share/MTc1MDE0MDk2MDIwOTczMjg4/best-mid-tower-desktop-gaming-case.jpg',
        specs: [
          'Intel Core i3-13100F Processor',
          'PowerColor Radeon RX 6500 XT 4GB GDDR6 Graphics Card',
          'XPG SX8200 Pro 512GB NVMe SSD',
          'ASUS PRIME H610M-E D4 Motherboard',
          'EVGA 550 BQ 550W 80+ Bronze PSU',
          'Phanteks Eclipse P300A Mesh Case',
          'G.Skill Ripjaws V 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: false
      },
      {
        id: 10,
        name: 'Quantum 1.0 — Ryzen 5 5600G',
        originalPrice: 42000,
        currentPrice: 38999,
        image: 'https://i.ytimg.com/vi/_NT25mKtA-0/sddefault.jpg',
        specs: [
          'AMD Ryzen 5 5600G Processor with Radeon Vega 7 Graphics',
          'Integrated Radeon Vega 7 Graphics',
          'Crucial P3 500GB NVMe SSD',
          'Gigabyte B550M DS3H AC Motherboard',
          'Corsair CV550 550W PSU',
          'Montech X1 Mesh Case',
          'Kingston HyperX Fury 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: true
      },
      {
        id: 11,
        name: 'Nova 1.0 — Intel i5-12400 & RX 6600',
        originalPrice: 49999,
        currentPrice: 48500,
        image: 'https://www.antec.com/product/case/images/nx500-pdt01.png',
        specs: [
          'Intel Core i5-12400 Processor',
          'ASRock Challenger Radeon RX 6600 8GB GDDR6 Graphics Card',
          'WD Black SN750 500GB NVMe SSD',
          'MSI PRO B660M-A DDR4 Motherboard',
          'Antec HCG Gold 650W PSU',
          'Antec NX500 Case with RGB Fans',
          'ADATA XPG SPECTRIX D50 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: false
      },
      {
        id: 12,
        name: 'Guardian 1.0 — Ryzen 3 4100 & GTX 1650',
        originalPrice: 40000,
        currentPrice: 36999,
        image: 'https://cdn.mos.cms.futurecdn.net/uXngTqwS7CS3FSi675TJwG-320-80.jpg',
        specs: [
          'AMD Ryzen 3 4100 Processor',
          'MSI GeForce GTX 1650 D6 VENTUS XS OC 4GB GDDR6 Graphics Card',
          'TeamGroup MP33 512GB NVMe SSD',
          'ASRock B450M Steel Legend Motherboard',
          'Cooler Master MWE 550W Bronze V2 PSU',
          'Corsair 4000D Airflow Case',
          'TeamGroup T-FORCE DARK Za 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 13,
        name: 'Orion 1.0 — Intel i3-10105F & GTX 1650 Super',
        originalPrice: 43500,
        currentPrice: 39999,
        image: 'https://m.media-amazon.com/images/I/71Bg7QYIlKL._AC_UF894,1000_QL80_.jpg',
        specs: [
          'Intel Core i3-10105F Processor',
          'ZOTAC Gaming GeForce GTX 1650 Super 4GB GDDR6 Graphics Card',
          'Kingston A2000 500GB NVMe SSD',
          'MSI B460M-A PRO Motherboard',
          'be quiet! System Power 9 500W PSU',
          'GAMDIAS AURA GC2 Case with ARGB Fans',
          'HyperX Fury 16GB (2x8GB) DDR4 2666MHz RAM'
        ],
        onSale: true
      },
      {
        id: 14,
        name: 'Blaze 1.0 — Ryzen 5 4600G',
        originalPrice: 38000,
        currentPrice: 34999,
        image: 'https://www.mydiypcusa.com/media/catalog/product/cache/1/image/880x660/9df78eab33525d08d6e5fb8d27136e95/1/1/11-353-151-z01.jpg',
        specs: [
          'AMD Ryzen 5 4600G Processor with Radeon Vega 7 Graphics',
          'Integrated Radeon Vega 7 Graphics',
          'WD Blue SN550 500GB NVMe SSD',
          'Gigabyte A520M S2H Motherboard',
          'Silverstone ET650-B 650W 80+ Bronze PSU',
          'DIYPC Solo-T2-R Black Case',
          'Patriot Viper Steel 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 15,
        name: 'Horizon 1.0 — Intel i5-10500 & GTX 1660 Ti',
        originalPrice: 49500,
        currentPrice: 46999,
        image: 'https://www.antec.com/product/case/images/gx202-pdt1.png',
        specs: [
          'Intel Core i5-10500 Processor',
          'EVGA GeForce GTX 1660 Ti 6GB GDDR6 Graphics Card',
          'Crucial P5 500GB NVMe SSD',
          'ASUS PRIME B460M-A Motherboard',
          'NZXT C650 650W 80+ Gold PSU',
          'Antec GX202 Gaming Case',
          'G.Skill Trident Z RGB 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 16,
        name: 'Elixir 1.0 — Ryzen 5 5500 & RX 6500 XT',
        originalPrice: 45000,
        currentPrice: 41999,
        image: 'https://i.ytimg.com/vi/f84vRwh-ih4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDswfBgQVU6Lj34LND9rINSwvnLMw',
        specs: [
          'AMD Ryzen 5 5500 Processor',
          'XFX Speedster QICK 210 Radeon RX 6500 XT 4GB GDDR6 Graphics Card',
          'Samsung 980 500GB NVMe SSD',
          'MSI B550M PRO-VDH WIFI Motherboard',
          'Corsair RM550x 550W 80+ Gold PSU',
          'Lian Li LANCOOL 215 Case',
          'Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: true
      },
      {
        id: 17,
        name: 'Force 1.0 — Intel i5-11400F & GTX 1660 Super',
        originalPrice: 48000,
        currentPrice: 45999,
        image: 'm.media-amazon.com/images/I/81a6xDb+JVL.jpg',
        specs: [
          'Intel Core i5-11400F Processor',
          'MSI Gaming X GeForce GTX 1660 Super 6GB GDDR6 Graphics Card',
          'Western Digital Black SN750 500GB NVMe SSD',
          'ASRock B560 Pro4 Motherboard',
          'Seasonic FOCUS GM-650 650W Gold PSU',
          'MUSETEX ATX PC Case with 6 ARGB Fans',
          'Crucial Ballistix RGB 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 18,
        name: 'Viper 1.0 — Ryzen 3 3300X & RX 570',
        originalPrice: 39000,
        currentPrice: 35500,
        image: 'https://www.mydiypcusa.com/media/catalog/product/cache/1/image/880x660/9df78eab33525d08d6e5fb8d27136e95/1/1/11-353-102-01.jpg',
        specs: [
          'AMD Ryzen 3 3300X Processor',
          'Sapphire Pulse Radeon RX 570 4GB GDDR5 Graphics Card',
          'Crucial MX500 500GB SATA SSD',
          'Gigabyte B450M DS3H Motherboard',
          'EVGA 500 W1 500W PSU',
          'DIYPC Skyline-06-WG Black/Green Case',
          'Kingston HyperX Fury 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 19,
        name: 'Fusion 1.0 — Intel i3-12100 & RX 6400',
        originalPrice: 42000,
        currentPrice: 39500,
        image: 'https://images.saymedia-content.com/.image/t_share/MTc1MDE0MDk2MDIwOTczMjg4/best-mid-tower-desktop-gaming-case.jpg',
        specs: [
          'Intel Core i3-12100 Processor',
          'PowerColor AMD Radeon RX 6400 4GB GDDR6 Graphics Card',
          'TeamGroup MP34 512GB NVMe SSD',
          'Gigabyte H610M S2H DDR4 Motherboard',
          'Thermaltake Smart BM2 550W 80+ Bronze PSU',
          'Phanteks Eclipse P300A Mesh Case',
          'TeamGroup T-FORCE VULCAN Z 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 20,
        name: 'Enigma 1.0 — Ryzen 5 5600X & GTX 1060',
        originalPrice: 49000,
        currentPrice: 45999,
        image: 'https://i.ytimg.com/vi/_NT25mKtA-0/sddefault.jpg',
        specs: [
          'AMD Ryzen 5 5600X Processor',
          'ASUS Phoenix GeForce GTX 1060 6GB GDDR5 Graphics Card (Refurbished)',
          'WD Blue SN570 1TB NVMe SSD',
          'ASRock B550M-HDV Motherboard',
          'Corsair CX650M 650W Semi-Modular PSU',
          'Montech X1 Mesh Case',
          'Crucial Ballistix 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: true
      },
      {
        id: 21,
        name: 'Comet 1.0 — Intel i5-12400F & RX 6500 XT',
        originalPrice: 47500,
        currentPrice: 44999,
        image: 'https://www.antec.com/product/case/images/nx500-pdt01.png',
        specs: [
          'Intel Core i5-12400F Processor',
          'Gigabyte Radeon RX 6500 XT 4GB GDDR6 Graphics Card',
          'XPG SX8100 512GB NVMe SSD',
          'Gigabyte B660M DS3H DDR4 Motherboard',
          'Deepcool PQ650M 650W 80+ Gold PSU',
          'Antec NX500 Case with RGB Fans',
          'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 22,
        name: 'Vigor 1.0 — Ryzen 5 5600G & GTX 1650',
        originalPrice: 44000,
        currentPrice: 41500,
        image: 'https://cdn.mos.cms.futurecdn.net/uXngTqwS7CS3FSi675TJwG-320-80.jpg',
        specs: [
          'AMD Ryzen 5 5600G Processor with Radeon Vega 7 Graphics',
          'Gigabyte GeForce GTX 1650 D6 OC 4GB GDDR6 Graphics Card',
          'Crucial P2 500GB NVMe SSD',
          'MSI MAG B550M MORTAR Motherboard',
          'Corsair CX550F RGB 550W PSU',
          'Corsair 4000D Airflow Case',
          'G.Skill Ripjaws V 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: true
      },
      {
        id: 23,
        name: 'Sapphire 1.0 — Intel i5-10400 & GTX 1650 Super',
        originalPrice: 45000,
        currentPrice: 42999,
        image: 'https://m.media-amazon.com/images/I/71Bg7QYIlKL._AC_UF894,1000_QL80_.jpg',
        specs: [
          'Intel Core i5-10400 Processor',
          'EVGA GeForce GTX 1650 Super 4GB GDDR6 Graphics Card',
          'Samsung 870 QVO 1TB SATA SSD',
          'ASRock B460M Pro4 Motherboard',
          'EVGA 600 BR 600W 80+ Bronze PSU',
          'GAMDIAS AURA GC2 Case with ARGB Fans',
          'Crucial Ballistix 16GB (2x8GB) DDR4 2666MHz RAM'
        ],
        onSale: true
      },
      {
        id: 24,
        name: 'Genesis 1.0 — Ryzen 3 3100 & GTX 1060',
        originalPrice: 38000,
        currentPrice: 35999,
        image: 'https://www.mydiypcusa.com/media/catalog/product/cache/1/image/880x660/9df78eab33525d08d6e5fb8d27136e95/1/1/11-353-151-z01.jpg',
        specs: [
          'AMD Ryzen 3 3100 Processor',
          'Zotac GeForce GTX 1060 3GB GDDR5 Graphics Card (Refurbished)',
          'ADATA SU635 480GB SATA SSD',
          'Gigabyte A320M-S2H Motherboard',
          'Antec VP450P 450W PSU',
          'DIYPC Solo-T2-R Black Case',
          'TeamGroup Elite Plus 16GB (2x8GB) DDR4 2400MHz RAM'
        ],
        onSale: true
      },
      {
        id: 25,
        name: 'Prime 1.0 — Intel i3-13100 & GTX 1660',
        originalPrice: 46000,
        currentPrice: 43999,
        image: 'https://www.antec.com/product/case/images/gx202-pdt1.png',
        specs: [
          'Intel Core i3-13100 Processor',
          'Inno3D GeForce GTX 1660 6GB GDDR5 Graphics Card',
          'Kingston NV2 500GB NVMe SSD',
          'ASUS PRIME H610M-K D4 Motherboard',
          'Cooler Master MWE 550W Bronze V2 PSU',
          'Antec GX202 Gaming Case',
          'Kingston FURY Beast 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 26,
        name: 'Zenith 1.0 — Ryzen 5 4500 & RX 580',
        originalPrice: 42500,
        currentPrice: 39999,
        image: 'https://i.ytimg.com/vi/f84vRwh-ih4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDswfBgQVU6Lj34LND9rINSwvnLMw',
        specs: [
          'AMD Ryzen 5 4500 Processor',
          'XFX Radeon RX 580 8GB GDDR5 Graphics Card (Refurbished)',
          'WD Blue 500GB SATA SSD',
          'MSI B450-A PRO MAX Motherboard',
          'Silverstone Essential 550W 80+ Bronze PSU',
          'Lian Li LANCOOL 215 Case',
          'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 27,
        name: 'Cosmic 1.0 — Intel i3-12100F & GTX 1650',
        originalPrice: 41000,
        currentPrice: 38500,
        image: 'm.media-amazon.com/images/I/81a6xDb+JVL.jpg',
        specs: [
          'Intel Core i3-12100F Processor',
          'Colorful GeForce GTX 1650 4GB GDDR6 Graphics Card',
          'TeamGroup MS30 512GB M.2 SATA SSD',
          'Gigabyte H610M H DDR4 Motherboard',
          'Antec NeoECO Gold Zen 500W PSU',
          'MUSETEX ATX PC Case with 6 ARGB Fans',
          'TeamGroup T-FORCE VULCAN Z 16GB (2x8GB) DDR4 3200MHz RAM'
        ],
        onSale: true
      },
      {
        id: 28,
        name: 'Nebula 1.0 — Ryzen 3 4300G',
        originalPrice: 33000,
        currentPrice: 29999,
        image: 'https://www.mydiypcusa.com/media/catalog/product/cache/1/image/880x660/9df78eab33525d08d6e5fb8d27136e95/1/1/11-353-102-01.jpg',
        specs: [
          'AMD Ryzen 3 4300G Processor with Radeon Vega 6 Graphics',
          'Integrated Radeon Vega 6 Graphics',
          'Lexar NS100 512GB SATA SSD',
          'ASRock A520M-ITX/ac Motherboard',
          'Thermaltake Smart 430W PSU',
          'DIYPC Skyline-06-WG Black/Green Case',
          'Patriot Signature Premium 16GB (2x8GB) DDR4 2666MHz RAM'
        ],
        onSale: true
      },
      {
        id: 29,
        name: 'Aurora 1.0 — Intel i5-11400F & RX 6500 XT',
        originalPrice: 46500,
        currentPrice: 44000,
        image: 'https://images.saymedia-content.com/.image/t_share/MTc1MDE0MDk2MDIwOTczMjg4/best-mid-tower-desktop-gaming-case.jpg',
        specs: [
          'Intel Core i5-11400F Processor',
          'ASRock Phantom Gaming D Radeon RX 6500 XT 4GB GDDR6 Graphics Card',
          'Crucial P2 1TB NVMe SSD',
          'MSI B560M PRO-VDH Motherboard',
          'Cooler Master MWE 650 Gold PSU',
          'Phanteks Eclipse P300A Mesh Case',
          'XPG SPECTRIX D60G 16GB (2x8GB) DDR4 3200MHz RGB RAM'
        ],
        onSale: true
      },
      {
        id: 30,
        name: 'Radiant 1.0 — Ryzen 5 5600G & RX 6400',
        originalPrice: 44500,
        currentPrice: 41999,
        image: 'https://i.ytimg.com/vi/_NT25mKtA-0/sddefault.jpg',
        specs: [
          'AMD Ryzen 5 5600G Processor with Radeon Vega 7 Graphics',
          'Sapphire Pulse Radeon RX 6400 4GB GDDR6 Graphics Card',
          'Kingston KC2500 500GB NVMe SSD',
          'Gigabyte B550M DS3H Motherboard',
          'EVGA 500 BQ 500W 80+ Bronze PSU',
          'Montech X1 Mesh Case',
          'G.Skill Ripjaws V 16GB (2x8GB) DDR4 3600MHz RAM'
        ],
        onSale: true
      }],
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
    ],
    cartItem:{},
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
    setProducts(state, cartItem) {
      state.cartItem = cartItem
    },
  },
  actions: {
    // Actions will be added as needed

  }
});
