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
            <h1 class="title">We're Here to Help</h1>
            <h4>If you are a middle income individual or family who could use a rent break and have interest in living in one of our projects, you've come to the right place.</h4>
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
              >Please submit the following application form. Your personal information will NOT be sold or shared with anyone. We only ask for these details to better understand your needs.</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <form action="https://formspree.io/mrgyzazj" method="POST">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 md-small-size-100">
                    <md-field>
                      <label>Your name</label>
                      <md-input v-model="name" name="contact" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-25 md-small-size-100">
                    <md-field>
                      <label>Your email</label>
                      <md-input v-model="email" name="email" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-25 md-small-size-100">
                    <md-field>
                      <label>Phone</label>
                      <md-input v-model="phone" name="phone" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-25 md-small-size-100">
                    <md-field>
                      <label>Occupation</label>
                      <md-input v-model="occupation" name="occupation" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-33 md-small-size-100">
                    <md-field>
                      <label for="movie">Children in Household</label>
                      <md-select id="children" v-model="children" name="children">
                        <md-option value="0">0</md-option>
                        <md-option value="1">1</md-option>
                        <md-option value="2">2</md-option>
                        <md-option value="3">3</md-option>
                        <md-option value="4">4</md-option>
                        <md-option value="5">5</md-option>
                        <md-option value="6">6</md-option>
                        <md-option value="7">7</md-option>
                        <md-option value="8">8</md-option>
                        <md-option value="9">9</md-option>
                        <md-option value="10+">10+</md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-33 md-small-size-100">
                    <md-field>
                      <label for="movie">Adults in Household</label>
                      <md-select id="adults" v-model="adults" name="adults">
                        <md-option value="0">0</md-option>
                        <md-option value="1">1</md-option>
                        <md-option value="2">2</md-option>
                        <md-option value="3">3</md-option>
                        <md-option value="4">4</md-option>
                        <md-option value="5">5</md-option>
                        <md-option value="6">6</md-option>
                        <md-option value="7">7</md-option>
                        <md-option value="8">8</md-option>
                        <md-option value="9">9</md-option>
                        <md-option value="10+">10+</md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-33 md-small-size-100">
                    <md-field>
                      <label for="movie">Total Gross Income</label>
                      <md-select id="income" v-model="income" name="income">
                        <md-option value="Below $75,000">Below $75,000</md-option>
                        <md-option value="$75,000-$85,000">$75,000 - $85,000</md-option>
                        <md-option value="$85,000-$95,000">$85,000 - $95,000</md-option>
                        <md-option value="$95,000-$105,000">$95,000 - $105,000</md-option>
                        <md-option value="$105,000-$115,000">$105,000 - $115,000</md-option>
                        <md-option value="$115,000-$125,000">$115,000 - $125,000</md-option>
                        <md-option value="$125,000-$135,000">$125,000 - $135,000</md-option>
                        <md-option value="$135,000-$145,000">$135,000 - $145,000</md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-center">
                    <md-button type="submit" class="md-primary md-round mt-2">Submit Application</md-button>
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
      phone: null,
      occupation: null,
      income: "",
      children: "",
      adults: "",
      image: require("@/assets/img/tenant.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 1.5rem;
}
</style>
