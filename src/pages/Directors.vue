<template>
  <div class="wrapper" :style="{ backgroundImage: `url(${image})` }">
    <!-- <parallax
      class="page-header header-filter header-large"
      parallax-active="true"
      :style="headerStyle"
    >-->
    <div id="directorsWrapper">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto text-center">
          <h1 class="title">Directors</h1>
          <h4
            class="title"
          >We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h4>
        </div>
      </div>
      <!-- <parallax parallax-active="true">
      <div class="main main-raised">-->
      <!-- <div class="md-layout">
      <div class="md-layout-item">-->

      <div class="md-layout">
        <div class="md-layout-item sm-size-100 md-size-50">
          <div class="director dark">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam1" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder, Board President, Interim Executive Director</h5>
            </div>
            <div class="bio">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam reiciendis porro blanditiis saepe? Nihil cum ab unde harum animi laudantium quos voluptas placeat quo, repellendus error sapiente nesciunt repellat consectetur voluptatem! Atque odio sequi sapiente fuga quo amet at eum quia. Voluptas, officia.</p>
              <p>Ipsa ex quidem modi consequuntur commodi deleniti, voluptatem aut veniam iusto doloribus architecto fuga nihil ea? Nulla minus adipisci vitae eos beatae illo cumque at, impedit, dolor voluptate rerum a ut est cupiditate vel saepe similique expedita iusto id amet laboriosam sapiente voluptates quae. Quod rem dicta doloremque magnam, consequuntur asperiores eveniet officiis ut natus ullam!</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item sm-size-100 md-size-50">
          <div class="director light">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam1" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder, Board President, Interim Executive Director</h5>
            </div>
            <div class="bio">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam reiciendis porro blanditiis saepe? Nihil cum ab unde harum animi laudantium quos voluptas placeat quo, repellendus error sapiente nesciunt repellat consectetur voluptatem! Atque odio sequi sapiente fuga quo amet at eum quia. Voluptas, officia.</p>
              <p>Ipsa ex quidem modi consequuntur commodi deleniti, voluptatem aut veniam iusto doloribus architecto fuga nihil ea? Nulla minus adipisci vitae eos beatae illo cumque at, impedit, dolor voluptate rerum a ut est cupiditate vel saepe similique expedita iusto id amet laboriosam sapiente voluptates quae. Quod rem dicta doloremque magnam, consequuntur asperiores eveniet officiis ut natus ullam!</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item sm-size-100 md-size-50">
          <div class="director darker">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam1" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder, Board President, Interim Executive Director</h5>
            </div>
            <div class="bio">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam reiciendis porro blanditiis saepe? Nihil cum ab unde harum animi laudantium quos voluptas placeat quo, repellendus error sapiente nesciunt repellat consectetur voluptatem! Atque odio sequi sapiente fuga quo amet at eum quia. Voluptas, officia.</p>
              <p>Ipsa ex quidem modi consequuntur commodi deleniti, voluptatem aut veniam iusto doloribus architecto fuga nihil ea? Nulla minus adipisci vitae eos beatae illo cumque at, impedit, dolor voluptate rerum a ut est cupiditate vel saepe similique expedita iusto id amet laboriosam sapiente voluptates quae. Quod rem dicta doloremque magnam, consequuntur asperiores eveniet officiis ut natus ullam!</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item sm-size-100 md-size-50">
          <div class="director lighter">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam1" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder, Board President, Interim Executive Director</h5>
            </div>
            <div class="bio">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam reiciendis porro blanditiis saepe? Nihil cum ab unde harum animi laudantium quos voluptas placeat quo, repellendus error sapiente nesciunt repellat consectetur voluptatem! Atque odio sequi sapiente fuga quo amet at eum quia. Voluptas, officia.</p>
              <p>Ipsa ex quidem modi consequuntur commodi deleniti, voluptatem aut veniam iusto doloribus architecto fuga nihil ea? Nulla minus adipisci vitae eos beatae illo cumque at, impedit, dolor voluptate rerum a ut est cupiditate vel saepe similique expedita iusto id amet laboriosam sapiente voluptates quae. Quod rem dicta doloremque magnam, consequuntur asperiores eveniet officiis ut natus ullam!</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item sm-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam1" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder, Board President, Interim Executive Director</h5>
            </div>
            <div class="bio">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam reiciendis porro blanditiis saepe? Nihil cum ab unde harum animi laudantium quos voluptas placeat quo, repellendus error sapiente nesciunt repellat consectetur voluptatem! Atque odio sequi sapiente fuga quo amet at eum quia. Voluptas, officia.</p>
              <p>Ipsa ex quidem modi consequuntur commodi deleniti, voluptatem aut veniam iusto doloribus architecto fuga nihil ea? Nulla minus adipisci vitae eos beatae illo cumque at, impedit, dolor voluptate rerum a ut est cupiditate vel saepe similique expedita iusto id amet laboriosam sapiente voluptates quae. Quod rem dicta doloremque magnam, consequuntur asperiores eveniet officiis ut natus ullam!</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item sm-size-100 md-size-50">
          <div class="director gray">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam2" alt />
              <h4>Katy Tang</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Katy Tang is currently the Director of Strategic Programs at the San Francisco International Airport, where she provides guidance and leadership on broad reaching initiatives and specific policy matters that impact the Airport’s overall operations. In this role, Katy is responsible for the development, implementation, and management of the Airport’s Five-Year Strategic Plan. Katy works with staff across all divisions of the Airport to ensure that their work aligns with the Airport’s operational plans and goals, strategic direction, and core values.</p>

              <p>Prior to this role, Katy was a Land Use Analyst at Farella, Braun + Martel, LLP, a law firm based in San Francisco. There, Katy worked with clients across the state to move projects forward, including housing and mixed-use development, establishment of commercial uses, and installation of solar energy systems.</p>

              <p>Katy also spent 13 years in San Francisco city government, including service as a member of the San Francisco Board of Supervisors representing District 4 (Sunset/Parkside neighborhoods) from February 2013-January 2019, Legislative Aide to former District 4 Supervisor Carmen Chu, and Junior Fiscal and Policy Analyst in the Mayor’s Office of Public Policy and Finance under Mayor Gavin Newsom’s administration.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- </div>-->
      <!-- <div class="md-layout-item">BBBB</div> -->
      <!-- </div> -->
      <!-- </div>
      </parallax>-->
      <!-- <div class="md-layout">
        <div class="md-layout-item md-size-100 mx-auto text-center">
          <h1 class="title">Directors</h1>
          <h4>We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</h4>
        </div>
        <div class="md-layout-item md-size-100">
          <h1>well?</h1>
        </div>
        <div class="md-layout-item md-size-100">
          <h1>well?</h1>
        </div>
      </div>-->
      <!-- <div class="container"> -->
      <!-- <div class="md-layout">
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
      </div>-->
      <!-- </div> -->
    </div>
    <!-- </parallax> -->
    <!-- <div class="main main-raised">
    <div class="section section-about-description text-center pb-0">-->
    <!-- <div class="container"> -->

    <!-- </div> -->
  </div>

  <!-- <div class="section section-about-office">
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
  </div>-->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
// import { ProfileCard } from "@/components";
// import { FullBgCard } from "@/components";
// import { PricingCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    // ProfileCard,
    // FullBgCard,
    // PricingCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "about-us",
  data() {
    return {
      color: "red",
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
      }
      // aboutOffice: {
      //   aboutOffice1: require("@/assets/img/examples/office2.jpg"),
      //   aboutOffice2: require("@/assets/img/examples/office4.jpg"),
      //   aboutOffice3: require("@/assets/img/examples/office3.jpg"),
      //   aboutOffice4: require("@/assets/img/examples/office5.jpg"),
      //   aboutOffice5: require("@/assets/img/examples/office1.jpg")
      // }
    };
  }
};
</script>

<style lang="scss" scoped>
body,
html {
  height: 100%;
}
.wrapper {
  margin-top: -152px;
  height: 100%;
  // background-image: url(/img/san-francisco-housing.jpg);
  background-size: cover;
}
#directorsWrapper {
  padding-top: 170px;
  h4 {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
}
.mt-2 {
  margin-top: 1.5rem;
}
.section-about-description h4.card-title {
  cursor: pointer;
}

.main {
  background: rgba(0, 0, 0, 0.4);
}

.director {
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  margin-bottom: 40px;
  .intro {
    min-width: 150px;
    position: relative;
    top: -50px;
    img {
      border-radius: 100px;
      max-width: 100px;
    }
    h5 {
      font-size: 12px;
    }
  }
  .bio {
    text-align: left;
    padding-left: 15px;
  }
}
.dark {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
.light {
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.9);
}
.darker {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
}
.lighter {
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(0, 0, 0, 0.9);
}
.blue {
  background-color: #3c4858;
  color: #fff;
}
.gray {
  background-color: rgba(72, 72, 72, 0.9);
  color: #fff;
}
</style>
