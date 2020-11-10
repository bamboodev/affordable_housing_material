<template>
  <div class="wrapper">
    <div id="contactUs2Map" class="map" />
    <div class="main main-raised">
      <div class="section section-contact">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100 ml-auto">
              <h2 class="title mt-0">Send us a message</h2>
              <p class="description">
                Questions or comments? Please don't hesitate to get in touch.
                <br />
                <br />
              </p>
              <form action="https://formspree.io/xeqrjzwg" method="POST">
                <md-field>
                  <label>Your Name</label>
                  <md-input v-model="name" name="contact" type="text" />
                </md-field>
                <md-field>
                  <label>Email Adress</label>
                  <md-input v-model="email" name="email" type="email" />
                </md-field>
                <md-field>
                  <label>Phone</label>
                  <md-input v-model="phone" name="phone" type="number" />
                </md-field>
                <md-field>
                  <label>Your message</label>
                  <md-textarea v-model="textarea" name="message" />
                </md-field>
                <div class="submit text-center mt-3">
                  <md-button class="md-primary md-round" type="submit">Contact Us</md-button>
                </div>
              </form>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
              <info-areas class="pt-0" info-horizontal>
                <h4 slot="title" class="info-title">Find us at the office</h4>
                <div slot="content" class="description">
                  <p>Affordability Project
                    <br>3364 Sacramento Street
<br>San Francisco, CA 94118
                  </p>
                </div>
              </info-areas>
              <info-areas class="pt-0" info-horizontal>
                <h4 slot="title" class="info-title">Give us a ring</h4>
                <div slot="content" class="description">
                  <p>
                    Customer Service
                    <br />+1 415.359.9842
                    <br />Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </info-areas>
              <info-areas class="pt-0" info-horizontal>
                <h4 slot="title" class="info-title">Legal Information</h4>
                <div slot="content" class="description">
                  <p>
                    Affordability Project
                    <br>3364 Sacramento Street
<br>San Francisco, CA 94118
                  </p>
                </div>
              </info-areas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";
import { InfoAreas } from "@/components";
export default {
  components: {
    InfoAreas
  },
  bodyClass: "contact-us",
  mixins: [Mixins.InitMap],
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      textarea: null
    };
  }
};
</script>

<style lang="scss" >
// .mt-3 {
//   margin-top: 1.5rem;
// }
.info-horizontal .icon {
  display: none;
}
</style>
