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
            <h1 class="title">Directors</h1>
            <h4>We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-about-description text-center pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam1"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Joey Toboni</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Joey Toboni conceived the idea for the affordability project to build and subsidize teacher and other middle income housing in San Francisco. He has ten years of construction and real estate experience and serves on several non-profit boards in San Francisco.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Founder, Board President, Interim Executive Director</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam2"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Katy Tang</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Katy Tang was San Francisco District 4 supervisor between 2013-2018 and President of the Board of Supervisors in 2014. She is a passionate advocate for middle-income housing in San Francisco and a gifted land use professional.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam3"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Hilary Newsome</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Hilary Newsom is a San Francisco native and successful entreprenur. She built Plump Jack Wine from a single location into a vast retail and hotel business. She is also a successful non-profit leader, raising hundreds of thousands annually.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam4"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Mary Toboni</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Mary Toboni has over 40 years of experience in Real Estate sales and valuation in San Francisco. Along with her husband Joe she is recognized as philanthropy leader in San Francisco. She is a fifth-generation San Francisco with a keen ability for fundraising.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam5"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Jim Sangiacomo</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Jim Sangiacomo is a principal of Trinity Property. Trinity is among the largest owners of residential real estate in San Francisco. Sangiacomo most recently helped lead the 1900 unit development at 8th and Market Street in San Francisco.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam6"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Joe Toboni</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Joe Toboni has over 35 years of real estate development experience in San Francisco. He was raised by a low-income single mother and in his tenure has led the development of over 350 housing units in San Francisco from acquisition to occupancy.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam7"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Michael Farrah</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Mike Farrah served as an aide to public officials including San Francisco Mayors Edwin Lee, Gavin Newsom, Frank Jordan and United States Congressman Tom Lantos. He currently serves on the board of directors of the Teacher's Salary Project.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam8"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Tim Vrabel</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Tim is a principal and the CFO of the Emerald Fund, one of San Francisco's biggest and most prolific development companies. The emerald fund developed such iconic structures such as: 100 Van Ness, The Civic, 150 Van Ness, Portside Condo Buildings, Ricon Green and Hotel Vitale.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <profile-card
                card-plain
                card-avatar
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="aboutTeam.aboutTeam9"
              >
                <template slot="cardContent">
                  <v-popover offset="4" placement="bottom">
                    <h4 class="card-title">Jerry Cullinane</h4>
                    <template slot="popover">
                      <div
                        class="popover-body"
                      >Jerry is a San Francisco general contractor who has led the construction of over 2,000 units in San Francisco. He specializes in ground up construction and concrete, steel, post tension podium and wood framed structures.</div>
                    </template>
                  </v-popover>

                  <p class="card-description">Board Member</p>
                </template>
              </profile-card>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title">Please, join our team</h2>
              <h4
                class="description"
              >We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process. We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h4>
            </div>
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <div class="md-layout">
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label>Your name</label>
                    <md-input v-model="name" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label>Your email</label>
                    <md-input v-model="email" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label for="movie">Your Role</label>
                    <md-select id="speciality" v-model="speciality" name="speciality">
                      <md-option value>I'm a resident</md-option>
                      <md-option value>I'm a builder</md-option>
                      <md-option value>I want to donate</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-center">
                  <md-button href="javascript:void(0)" class="md-primary md-round mt-2">Let's Talk</md-button>
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
import { ProfileCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    ProfileCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "about-us",
  data() {
    return {
      speciality: "",
      name: null,
      email: null,
      image: require("@/assets/img/san-francisco-housing.jpg"),
      aboutTeam: {
        aboutTeam1: require("@/assets/img/staff/joey.jpg"),
        aboutTeam2: require("@/assets/img/staff/katy.jpg"),
        aboutTeam3: require("@/assets/img/staff/hilary.jpg"),
        aboutTeam4: require("@/assets/img/staff/mary.jpg"),
        aboutTeam5: require("@/assets/img/staff/james.jpg"),
        aboutTeam6: require("@/assets/img/staff/joe.jpg"),
        aboutTeam7: require("@/assets/img/staff/michael.jpg"),
        aboutTeam8: require("@/assets/img/staff/joey.jpg"),
        aboutTeam9: require("@/assets/img/staff/joey.jpg")
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
.section-about-description h4.card-title {
  cursor: pointer;
}
</style>
