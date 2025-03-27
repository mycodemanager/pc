<template>
  <div class="processors-page">
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">Processors</h1>
      </div>
    </div>

    <div class="container">
      <div class="content">
        <p>This is the Processors page. Content coming soon.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Processors'
};
</script>

<style lang="scss" scoped>
.processors-page {
  min-height: 100vh;
  background-color: #110f15;

  .page-banner {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://ext.same-assets.com/755940251/3529918070.webp') center/cover no-repeat;
    padding: 60px 0;
    margin-bottom: 40px;

    .page-title {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .content {
    color: #fff;
    text-align: center;
    padding: 50px 0;
    font-size: 1.2rem;
  }
}
</style>
