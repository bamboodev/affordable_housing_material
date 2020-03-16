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
            <h1 class="title">Landlords</h1>
            <h4>Our mission is simple: To build new 100% middle-income affordable buildings and to subsidize existing middle income leases.</h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-about-description text-center pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h5
                class="description"
              >If you are a landlord who is willing to rent one of your units at AMI 80-130%, please reach out to us and we will help place a qualified, respectful tenant in your building.</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <div class="md-layout">
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <md-field>
                    <label>Your name</label>
                    <md-input v-model="name" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <md-field>
                    <label>Your email</label>
                    <md-input v-model="email" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <md-field>
                    <label>Phone</label>
                    <md-input v-model="phone" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <md-field>
                    <label>Company</label>
                    <md-input v-model="company" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-center">
                  <md-button href="javascript:void(0)" class="md-primary md-round mt-2">Join Us</md-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      company: null,
      phone: null,
      name: null,
      email: null,
      image: require("@/assets/img/landlords.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 1.5rem;
}
</style>
