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
            <h1 class="title">Donate</h1>
            <h4>If you believe that the Bay Area's working class are the life blood of our society and would like to help our cause to construct and subsidize middle income housing, please donate.</h4>
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
              >Our organization is run by individuals with deep experience and understanding of San Francisco development, land entitlement, real estate financing and construction. We leverage our collective experience and network to build working class housing in San Francisco.</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <form action="https://formspree.io/mvowpbpv" method="POST">
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 md-small-size-100">
                    <md-field>
                      <label>Your name</label>
                      <md-input v-model="name" name="contact" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-33 md-small-size-100">
                    <md-field>
                      <label>Your email</label>
                      <md-input v-model="email" name="email" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-33 md-small-size-100">
                    <md-field>
                      <label>Amount</label>
                      <md-input v-model="amount" name="amount" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-center">
                    <md-button type="submit" class="md-primary md-round mt-2">Donate</md-button>
                  </div>
                </div>
              </form>
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
      name: null,
      email: null,
      amount: null,
      image: require("@/assets/img/donate-bg.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 1.5rem;
}
</style>
