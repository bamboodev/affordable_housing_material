<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
            <h1 class="title">Development Team</h1>
            <h4>
              Meet the amazing team behind this project and find out more about
              how we work.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  components: {},
  mixins: [Mixins.HeaderImage],
  bodyClass: "about-us",
  data() {
    return {
      speciality: "",
      name: null,
      email: null,
      image: require("@/assets/img/san-francisco.jpg"),
      aboutTeam: {
        aboutTeam1: require("@/assets/img/staff/joey.jpg"),
        aboutTeam2: require("@/assets/img/staff/joe.jpg"),
        aboutTeam3: require("@/assets/img/staff/mary.jpg"),
        aboutTeam4: require("@/assets/img/staff/sean.jpg")
      },
      aboutOffice: {
        aboutOffice1: require("@/assets/img/examples/office2.jpg"),
        aboutOffice2: require("@/assets/img/examples/office4.jpg"),
        aboutOffice3: require("@/assets/img/examples/office3.jpg"),
        aboutOffice4: require("@/assets/img/examples/office5.jpg"),
        aboutOffice5: require("@/assets/img/examples/office1.jpg")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 1.5rem;
}
</style>
