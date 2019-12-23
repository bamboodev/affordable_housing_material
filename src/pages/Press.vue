<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="img" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                </div>
                <div class="name">
                  <h3 class="title">Affordability Project</h3>
                  <h6>Media Kit</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process. We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-active="1"
              :tab-name="['Downloads', 'Profiles', 'Gallery']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout work">
                  <div class="md-layout-item md-size-60 md-small-size-100 mx-auto">
                    <h4 class="title">Latest Collections</h4>
                    <div class="md-layout collections">
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg1">
                          <template slot="cardContent">
                            <badge type="warning">Housing Report 2016</badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">California</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg2">
                          <template slot="cardContent">
                            <badge type="info">Landlord Survey</badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">Bay Area</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg3">
                          <template slot="cardContent">
                            <badge type="danger">Developer Guidelines</badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">Oakland</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg4">
                          <template slot="cardContent">
                            <badge type="success">Winter 2019</badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">San Francisco</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                    </div>
                  </div>
                  <div class="md-layout-item md-size-20 md-small-size-100 mx-auto stats">
                    <h4 class="title title-margin">Stats</h4>
                    <ul class="list-unstyled">
                      <li>
                        <b>60</b> Builders
                      </li>
                    </ul>
                    <hr />
                    <h4 class="title title-margin">About our Work</h4>
                    <p
                      class="description"
                    >We will identify San Franciscans who are eligible recipients of our donations and bring candidates through a vetting process.</p>
                    <hr />
                    <h4 class="title title-margin">Focus</h4>
                    <badge type="primary">Housing</badge>
                    <badge type="rose">Job Security</badge>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-40 md-small-size-100 mx-auto">
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile1"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">Gigi Hadid</h4>
                        <h6 class="card-category text-muted">Model</h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                  <div class="md-layout-item md-size-40 md-small-size-100 mx-auto">
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile2"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">Marc Jacobs</h4>
                        <h6 class="card-category text-muted">Designer</h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-40 md-small-size-100 mx-auto">
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile3"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">Kendall Jenner</h4>
                        <h6 class="card-category text-muted">Model</h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                  <div class="md-layout-item md-size-40 md-small-size-100 mx-auto">
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile4"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">George West</h4>
                        <h6 class="card-category text-muted">Model/Dj</h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 md-small-size-100 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 md-small-size-100 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, FullBgCard, ProfileCard, Badge } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Tabs,
    FullBgCard,
    ProfileCard,
    Badge
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  data() {
    return {
      image: require("@/assets/img/city-profile.jpg"),
      img: require("@/assets/img/faces/christian.jpg"),
      cardFullBg: {
        fullBg1: require("@/assets/img/examples/mariya-georgieva.jpg"),
        fullBg2: require("@/assets/img/examples/clem-onojeghuo.jpg"),
        fullBg3: require("@/assets/img/examples/olu-eletu.jpg"),
        fullBg4: require("@/assets/img/examples/floralia.jpg")
      },
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/avatar.jpg"),
        cardProfile2: require("@/assets/img/faces/marc.jpg"),
        cardProfile3: require("@/assets/img/faces/kendall.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg")
      },
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  }
};
</script>

<style lang="scss" >
body.profile-page {
  .section {
    padding: 0;
  }

  .profile-tabs ul {
    justify-content: center !important;
    display: inline-flex !important;
  }
}

// .profile-tabs /deep/ {
//   .md-card-tabs .md-list {
//     justify-content: center !important;
//     display: inline-flex !important;
//     border: 1px solid red;
//   }

//   [class*="tab-pane-"] {
//     margin-top: 3.213rem;
//     padding-bottom: 50px;

//     img:not(.img) {
//       margin-bottom: 2.142rem;
//     }
//   }
// }
</style>
