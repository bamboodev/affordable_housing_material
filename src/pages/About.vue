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
            <h1 class="title">About Us</h1>
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
              >Our organization is run by individuals with deep experience and understanding of San Francisco non-profit work, development, public service, land entitlement, real estate financing, policy and construction. We leverage our collective experience and network to build working class housing in San Francisco.</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="section section-about-team section-team-1 pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h2 class="title">Who we are</h2>
              <h5
                class="description"
              >We are conscientious business and civic leaders fighting for San Francisco.</h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-25 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam1"
              >
                <template slot="cardContent">
                  <h4 class="card-title">Joey Toboni</h4>
                  <p
                    class="card-description"
                  >Joey Toboni conceived the idea for the affordability project to build and subsidize teacher and other middle income housing in San Francisco. He has ten years of construction and real estate experience and serves on several non-profit boards in San Francisco.</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam2"
              >
                <template slot="cardContent">
                  <h4 class="card-title">Joe Toboni</h4>
                  <p
                    class="card-description"
                  >Joe Toboni has over 35 years of real estate development experience in San Francisco. He was raised by a low-income single mother and in his tenure has led the development of over 350 housing units in San Francisco from acquisition to occupancy.</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam3"
              >
                <template slot="cardContent">
                  <h4 class="card-title">Mary Toboni</h4>
                  <p
                    class="card-description"
                  >Mary Toboni has over 40 years of experience in Real Estate sales and valuation in San Francisco. Along with her husband Joe she is recognized as philanthropy leader in San Francisco. She is a fifth-generation San Francisco with a keen ability for fundraising.</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam4"
              >
                <template slot="cardContent">
                  <h4 class="card-title">Sean Kieghran</h4>
                  <p
                    class="card-description"
                  >Sean Kieghran is the president of the Residential Builder’s Association. Sean has been instrumental in helping to craft housing legislation for over ten years in San Francisco. He leads City's largest association of construction contractors.</p>
                </template>
              </profile-card>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="section section-about-services section-features-2">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h2 class="title">What we do</h2>
              <h5
                class="description"
              >We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas info-vertical icon-color="rose" icon="gesture">
                <h4 slot="title" class="info-title">1. Survey</h4>
                <div slot="content" class="description">
                  <p>We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</p>
                  <a href="javascript:void(0)">Find more...</a>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas info-vertical icon-color="rose" icon="build">
                <h4 slot="title" class="info-title">2. Contribute</h4>
                <div slot="content" class="description">
                  <p>We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</p>
                  <a href="javascript:void(0)">Find more...</a>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas info-vertical icon-color="rose" icon="mode_edit">
                <h4 slot="title" class="info-title">3. Build Housing</h4>
                <div slot="content" class="description">
                  <p>We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</p>
                  <a href="javascript:void(0)">Find more...</a>
                </div>
              </info-areas>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="section section-about-office pb-0">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title">Proud to be San Francisco Native</h2>
              <h4
                class="description"
              >Here are some pictures from our office. We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h4>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice1" />
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice2" />
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice3" />
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice4" />
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice5" />
            </div>
          </div>
        </div>
      </div>-->
      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title">We can't do it alone.</h2>
              <h4
                class="description"
              >Please, join our team. Together, we will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h4>
            </div>
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <form action="https://formspree.io/f/maylqknl" method="POST">
              <div class="md-layout">
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label>Your name</label>
                    <md-input v-model="name" name="name"/>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label>Your email</label>
                    <md-input v-model="email" name="email"/>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label for="movie">Your Role</label>
                    <md-select id="speciality" v-model="speciality" name="speciality">
                      <md-option value="resident">I'm a resident</md-option>
                      <md-option value="builder">I'm a builder</md-option>
                      <md-option value="donate">I want to donate</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-center">
                  <md-button type="submit" class="md-primary md-round mt-2">Join Us</md-button>
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
      image: require("@/assets/img/city.jpg"),
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
