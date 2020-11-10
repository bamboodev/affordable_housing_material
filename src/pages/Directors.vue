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

         <div class="md-layout-item md-xsmall-size-100 md-size-50" >
          <div class="director blue" id="joey">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam8" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder and President of the Board</h5>
            </div>
            <div class="bio">
              <p>Joey Toboni is the founder and president of the Board of Directors for the Affordability Project. He conceived of the idea in order to give low and middle income individuals a path to affordable housing.</p>

              <p>He is the managing partner of residential contracting firm, The Toboni Group - Residential and has built or reconstructed over 60 homes in the San Francisco Bay Area. He has more than ten years of experience in construction, land entitlement, construction finance and real estate development. He graduated with honors as the Student Athlete of the year from Lewis and Clark College.</p>
            </div>
          </div>
        </div>

         <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue" id="temp">
            <!-- <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam8" alt />
              <h4>Joey Toboni</h4>
              <h5>Founder and President of the Board</h5>
            </div> -->
            <div class="bio temp">
              <div><h3>Board Members</h3>
              <h5>Coming Soon</h5></div>
              
            </div>
          </div>
        </div>

        <!-- <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam6" alt />
              <h4>Joe Toboni</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Joe Toboni has over 35 years of real estate development and construction experience in San Francisco. He was raised by a low-income single mother and in his career has led the development of hundreds of housing units from acquisition to occupancy. He has also constructed countless below market units in the San Francisco Bay Area. Joe is a native San Franciscan and a graduate of the University of San Francisco.</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam1" alt />
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

         <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam4" alt />
              <h4>Mary Toboni</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Mary Toboni has over 40 years of experience in Real Estate sales and valuation in San Francisco and has sold hundreds of homes and buildings in the San Francisco Bay Area. She is a philanthropist in board member for several non-profit organizations in the San Francisco Bay Area. She is a graduate of Santa Clara University and is a native San Franciscan.</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam2" alt />
              <h4>Tim Vrabel</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Tim joined Emerald Fund in 2006 and oversees the financial affairs of the company encompassing both real estate development and property management activities. Over that time, Tim has been part of the core team that has built over 1,300 new market rate and affordable residential apartments, and sold over 500 residential condominiums. Tim received a BS in Finance & International Business from Penn State University and has earned accreditation as a Certified Management Accountant and a Certified Financial Manager. He also holds a California Real Estate Broker's License.</p>
            </div>
          </div>
        </div>

         <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam10" alt />
              <h4>Adam Tartakovsky</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Adam Tartakovsky is the Executive Vice President of Development for Crescent Heights, focusing on Seattle, San Francisco and Los Angeles. He attended the University of Pennsylvania Law School and the Wharton School of Business. He received bachelor's degrees in Environmental Science and International Politics &amp; Economics at UC Santa Barbara and Tel Aviv University. Adam is also active in various civic organizations focused on housing and urban planning, including the Urban Land Institute, the San Francisco Housing Action Coalition, the SF Planning and Urban Research Association (SPUR), and the Central City Association of Los Angeles. Adam is a native San Franciscan.</p>
            </div>
          </div>
        </div>

         <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam" alt />
              <h4>Hillary Newsom</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Hillary Newsom is a successful entrepreneur and non-profit leader. She built Plump Jack Wine from a single location into a vast retain and hotel business with 1,000 employees. She is also a successful non-profit leader, raising hundreds of thousands of dollars annually for different causes. She is a graduate of Georgetown University.</p>
            </div>
          </div>
        </div>

          <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam5" alt />
              <h4>James Sangiacomo</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>James Sangiacomo is a principal of Trinity Property. Trinity is among the largest owners of residential real estate in San Francisco. Most recently Sangiacomo led the development of 1900 housing units at 8th and Market in San Francisco which is widely considered one of the largest single project influxes of residential housing in San Francisco history. Sangiacomo is a native San Franciscan.</p>
            </div>
          </div>
        </div>

        <div class="md-layout-item md-xsmall-size-100 md-size-50">
          <div class="director blue">
            <div class="intro">
              <img v-bind:src="aboutTeam.aboutTeam" alt />
              <h4>Jerry Cullinane</h4>
              <h5>Board Member</h5>
            </div>
            <div class="bio">
              <p>Jerry Cullinane is the founder and principal of Cullinane Construction and is a general contractor with 30 years of construction in San Francisco multi-unit building. He has constructed or renovated over 200 multi-unit building in San Francisco and has deep experience in concrete and wood rough construction, code compliance and regulations, project pricing, engineering and construction processes and mechanisms. Jerry hails from Ireland and currently resides in San Francisco.</p>
            </div>
          </div>
        </div> -->

       

       

       

        

      

       
      </div>
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
      image: require("@/assets/img/san-francisco-affordable-housing-board-of-directors.jpg"),
      aboutTeam: {
        aboutTeam2: require("@/assets/img/staff/tim.jpg"),
        aboutTeam1: require("@/assets/img/staff/katy.jpg"),
        aboutTeam3: require("@/assets/img/staff/hilary.jpg"),
        aboutTeam4: require("@/assets/img/staff/mary.jpg"),
        aboutTeam5: require("@/assets/img/staff/james.jpg"),
        aboutTeam6: require("@/assets/img/staff/joe.jpg"),
        aboutTeam7: require("@/assets/img/staff/michael.jpg"),
        aboutTeam8: require("@/assets/img/staff/joey.jpg"),
        aboutTeam9: require("@/assets/img/staff/joey.jpg"),
        aboutTeam10: require("@/assets/img/staff/adam.jpg"),
        aboutTeam: require("@/assets/img/staff/fpo.jpg")
      }
      // aboutOffice: {
      //   aboutOffice1: require("@/assets/img/examples/office2.jpg"),
      //   aboutOffice2: require("@/assets/img/examples/office4.jpg"),
      //   aboutOffice3: require("@/assets/img/examples/office3.jpg"),
      //   aboutOffice4: require("@/assets/img/examples/office5.jpg"),
      //   aboutOffice5: require("@/assets/img/examples/office1.jpg")
      // }
    };
  },
  mounted: function () {
    let joey = document.querySelector("#joey");
    console.log(joey.clientHeight);
    let temp = document.querySelector("#temp");
    temp.style.height = joey.clientHeight + "px"
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
  h1.title, h4.title {
    color: white !important;
     text-shadow: 2px 2px 5px #000000;
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
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(0, 0, 0, 0.7);
}
.gray {
  background-color: rgba(72, 72, 72, 0.9);
  color: #fff;
}

@media (max-width: 900px) {
  .director {
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    display: block;
    background-color: #3c4858;
    color: #fff;
    .bio {
      text-align: center;
      padding-left: 0px;
    }
  }
}
.temp {
  min-height: 300px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  div {
    text-align: center;
  }
  h3, h5 {
    display: inline-block;
    height: 30px;
    width: 100%;
  }
  h3 {
    padding-bottom: 15px;
    border-bottom: 1px solid #484848;
    box-sizing: content-box;
  }
  h5 {
    padding-top: 1px;
    margin-top: 1px;
  }
}
</style>
