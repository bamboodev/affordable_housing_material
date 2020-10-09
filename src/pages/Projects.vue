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
            <h1 class="title">Projects</h1>
            <h4>The Affordability Project's first non-profit housing development will be 5250 3rd Street which will be 96 affordable units intended for nurses, teachers and other middle income professionals and families.</h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-about-description text-center ">
        <div class="container">
          <div class="md-layout md-gutter">
             <div class="md-layout-item md-size-33 md-small-size-100">
              <img :src="projects.project525_2" alt= />
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img :src="projects.project525_1" alt= />
            </div>
           
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img :src="projects.project525_3" alt= />
            </div>
          </div>
          <!-- <div class="md-layout md-gutter"> -->
            <!-- <div class="md-layout-item md-size-100">
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            </div> -->
          <!-- </div> -->
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
      },
       projects: {
        project525_1: require("@/assets/img/projects/5250/96-affordable-housing-units.jpg"),
        project525_2: require("@/assets/img/projects/5250/affordable-housing.jpg"),
        project525_3: require("@/assets/img/projects/5250/san-francisco-affordable-housing-project.jpg"),
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
