<template>
  <div class="foo">
    <h1>Foo!</h1>
    <h1>Foo!</h1>
    <h1>Foo!</h1>
    <div class="section section-dark">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100">a</div>
          <div class="md-layout-item md-size-50">b</div>
          <div class="md-layout-item md-size-50">c</div>
        </div>
        <div class="md-layout mt-3">
          <div class="md-layout-item md-size-30">1</div>
          <div class="md-layout-item md-size-70">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foo",
  props: {
    // msg: String
  }
};
</script>

<style lang="scss" scoped>
.md-layout {
  // width: 100%;
}
.md-layout-item {
  height: 40px;

  &:nth-child(1) {
    background: #ccc;
  }

  &:nth-child(2) {
    background: #ddd;
  }

  &:nth-child(3) {
    background: #ffd;
  }
}
</style>