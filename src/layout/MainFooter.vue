<template>
  <footer class="footer footer-white footer-big">
    <div class="container">
      <div class="content">
        <div class="md-layout">
          <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <a href="javascript:void(0)">
              <h5>Affordability Project</h5>
            </a>
            <p>Raising money to subsidize existing leases/mortgages for eligible residents in San Francisco</p>
          </div>
          <div class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100">
            <h5>About</h5>
            <ul class="links-vertical">
              <li>
                <a href="javascript:void(0)">News</a>
              </li>
              <li>
                <a href="javascript:void(0)">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100">
            <h5>Community</h5>
            <ul class="links-vertical">
              <li>
                <a href="javascript:void(0)">Tenants FAQ</a>
              </li>
              <li>
                <a href="javascript:void(0)">How to Donate</a>
              </li>
              <li>
                <a href="javascript:void(0)">Need assistance?</a>
              </li>
              <li>
                <a href="javascript:void(0)">Our Partners</a>
              </li>
              <li>
                <a href="javascript:void(0)">Next Steps</a>
              </li>
            </ul>
          </div>

          <div class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100">
            <h5>Legal</h5>
            <ul class="links-vertical">
              <li>
                <a href="javascript:void(0)">Donation FAQ</a>
              </li>
              <li>
                <a href="#pablo">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="javascript:void(0)">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100">
            <h5>Subscribe to Newsletter</h5>
            <p>Join our newsletter and receive occasional updates via email. Your info will not be sold or shared with anyone else, and you may unsubscribe at anytime.</p>
            <form class="form-newsletter" action method>
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
            </form>
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
<style></style>
