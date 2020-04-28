<template>
  <footer class="footer footer-white footer-big">
    <div class="container">
      <div class="content">
        <div class="md-layout">
          <!-- <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <a href="javascript:void(0)">
              <h5>Affordability Project</h5>
            </a>
            <p>Raising money to subsidize existing leases/mortgages for eligible residents in San Francisco</p>
          </div>-->
          <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <h5>About</h5>
            <ul class="links-vertical">
              <li>
                <router-link to="/about">Affordability Project</router-link>
              </li>
              <li>
                <router-link to="/management">Management</router-link>
              </li>
              <li>
                <router-link to="/projects">Projects</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <h5>Community</h5>
            <ul class="links-vertical">
              <li>
                <router-link to="/donate">How to Donate</router-link>
              </li>
              <li>
                <router-link to="/tenants">Need assistance?</router-link>
              </li>
              <li>
                <router-link to="/corporations">Our Partners</router-link>
              </li>
              <li>
                <router-link to="/donateHousing">Landlords</router-link>
              </li>
            </ul>
          </div>

          <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <h5>Legal</h5>
            <ul class="links-vertical">
              <li>
                <router-link to="/privacy">Privacy Policy</router-link>
              </li>
            </ul>
          </div>
          <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <h5>Subscribe to our Newsletter</h5>
            <!-- <form class="form-newsletter" action method>
              <div class="md-layout">
                <div class="md-layout-item md-large-size-66 medium-size-50">
                  <md-field>
                    <md-input v-model="email" placeholder="Your Email.." />
                  </md-field>
                </div>
                <div class="md-layout-item md-large-size-33 medium-size-50">
                  <md-button class="md-block">Send</md-button>
                </div>
              </div>
            </form>-->

            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup">
              <form
                action="https://affordabilityproject.us8.list-manage.com/subscribe/post?u=b4426d2ce501e2ca761d24183&amp;id=78774a2738"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate form-newsletter"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group">
                    <!-- <label for="mce-EMAIL">Email Address </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">-->

                    <md-field>
                      <md-input
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                        type="email"
                        v-model="email"
                        placeholder="Your Email.."
                      />
                    </md-field>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input
                      type="text"
                      name="b_b4426d2ce501e2ca761d24183_78774a2738"
                      tabindex="-1"
                      value
                    />
                  </div>
                  <div class="clear">
                    <md-button
                      class="md-block button"
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    >Send</md-button>
                    <!-- <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    />-->
                  </div>
                </div>
              </form>
            </div>

            <!--End mc_embed_signup-->
          </div>
        </div>
      </div>

      <hr />

      <div class="copyright">Copyright © {{ year }} Affordability Project | All Rights Reserved.</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      email: ""
    };
  }
};
</script>
<style>
@media all and (max-width: 960px) {
  .footer-big .content {
    text-align: center !important;
  }
}
</style>
