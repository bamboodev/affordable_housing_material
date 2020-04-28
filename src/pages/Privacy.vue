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
            <h1 class="title">Our Privacy Policy</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-about-description text-center pb-2">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-left">
              <h4 class="text-center">Generic privacy policy template</h4>
              <p>This privacy policy ("policy") will help you understand how The Affordability Project ("us", "we", "our") uses and protects the data you provide to us when you visit and use https://affordabilityproject.com/ ("website", "service").</p>
              <p>We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.</p>
                <h5>What User Data We Collect</h5>
              <p>When you visit the website, we may collect the following data:</p>
              <p style="text-align: left;">
              <ul>
                <li>Your IP address.</li>
                <li>Your contact information and email address, along with any information submitted via our optional web forms.</li>
                <li>Data profile regarding your online behavior on our website.</li>
              </ul>
              </p>
                <h5>Why We Collect Your Data</h5>
                <br />
              <p>We are collecting your data for several reasons:</p>
              <p style="text-align: left;">
              <ul>
                <li>To better understand your needs.</li>
                <li>To improve our services and products.</li>
                <li>To send you promotional emails containing the information we think you will find interesting.</li>
                <li>To contact you to fill out surveys and participate in other types of market research.</li>
                <li>To customize our website according to your online behavior and personal preferences.</li>
              </ul>
              </p>
                <h5>Safeguarding and Securing the Data</h5>
              <p>The Affordability Project is committed to securing your data and keeping it confidential. The Affordability Project has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.</p>
                <h5>Our Cookie Policy</h5>
              <p>Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit).</p>
              <p>The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.</p>
              <p>Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.</p>
              <p>If you want to disable cookies, you can do it by accessing the settings of your internet browser.</p>
                <h5>Restricting the Collection of your Personal Data</h5>
              <p>At some point, you might wish to restrict the use and collection of your personal data. You may do so by ignoring the optional web forms. No personal information will be gathered unless you decided to submit it via our web forms.</p>
              <p>The Affordability Project will not lease, sell or distribute your personal information to any third parties, unless we have your permission. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ProfileCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    // ProfileCard
    // InfoAreas
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "about-us",
  data() {
    return {
      speciality: "",
      name: null,
      email: null,
      image: require("@/assets/img/housing.jpg"),
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
h5 {
    margin: 30px 0;
}
</style>
