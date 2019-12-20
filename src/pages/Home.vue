<template>
  <div class="wrapper">
    <div class="home">
      <div class="section section-header-2 pt-0 pb-0">
        <div class="page-header header-filter" :style="header('2')">
          <div class="container">
            <div class="md-layout">
              <div
                class="md-layout-item md-size-66 md-small-size-100 md-xlarge-size-80 mx-auto text-center"
              >
                <h1
                  class="title"
                >A working class family needs $83,000 more than the national average in order to afford to live in San Francisco.</h1>
                <h4>The monthly average cost of an apartment in San Francisco consumes over 35% of the before tax local median household income.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-blogs-1">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-small-size-100 mx-auto">
              <h2 class="title">The Problem</h2>
              <br />
              <blog-card
                card-plain
                type="horizontal"
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="cardBlogPost.cardBlogPost1"
              >
                <template slot="cardContent">
                  <h3 class="card-title">
                    <a href="javascript:void(0)">Shortage of Housing</a>
                  </h3>
                  <p class="card-description">
                    San Francisco is in the midst of the worst housing crisis in its history. Created by the rapid influx of new business and wealth, record spikes in the cost of San Francisco rents have caused an incredible shortage of housing amongst the City’s most economically vulnerable. Despite well intentioned local legislation, government leaders are consistently unable to reach their goals for housing production. As a result, living in San Francisco becomes increasingly more difficult by the year for San Francisco’s middle and low income households
                    <a
                      href="javascript:void(0)"
                    >Read More</a>
                  </p>
                </template>
              </blog-card>
              <blog-card
                card-plain
                type="horizontal"
                reverse-row
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="cardBlogPost.cardBlogPost2"
              >
                <template slot="cardContent">
                  <h3 class="card-title">
                    <a href="javascript:void(0)">The Worst Housing Crisis In Our History</a>
                  </h3>
                  <p class="card-description">
                    San Francisco is in the midst of the worst housing crisis in its history. Created by the rapid influx of new business and wealth, record spikes in the cost of San Francisco rents have caused an incredible shortage of housing amongst the City’s most economically vulnerable. Despite well intentioned local legislation, government leaders are consistently unable to reach their goals for housing production.
                    <a
                      href="javascript:void(0)"
                    >Read More</a>
                  </p>
                </template>
              </blog-card>
              <blog-card
                card-plain
                type="horizontal"
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="cardBlogPost.cardBlogPost1"
              >
                <template slot="cardContent">
                  <h3 class="card-title">
                    <a href="javascript:void(0)">Shortage of Housing</a>
                  </h3>
                  <p class="card-description">
                    San Francisco is in the midst of the worst housing crisis in its history. Created by the rapid influx of new business and wealth, record spikes in the cost of San Francisco rents have caused an incredible shortage of housing amongst the City’s most economically vulnerable. Despite well intentioned local legislation, government leaders are consistently unable to reach their goals for housing production. As a result, living in San Francisco becomes increasingly more difficult by the year for San Francisco’s middle and low income households
                    <a
                      href="javascript:void(0)"
                    >Read More</a>
                  </p>
                </template>
              </blog-card>
            </div>
          </div>
        </div>
      </div>

      <banner title="My good boy banner" :background="bannerImages.Banner1" colorstyle="lite"></banner>

      <!-- <parallax
        class="page-header header-filter header-small"
        parallax-active="true"
        :style="headerStyle"
      >-->
      <!-- <div class="container page-header header-filter" :style="header('3')">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
            <h1 class="title">Let's get started</h1>
            <h4>
              To get started, you will need to choose a plan for your needs. You
              can opt in for the monthly of annual options and go with one fo
              the three listed below.
            </h4>
          </div>
        </div>
      </div>-->
      <!-- </parallax> -->

      <!-- <div class="section section-projects-3 section-dark">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 justify-content-center mx-auto text-center"
            >
              <h6 class="text-muted">Our work</h6>
              <h2 class="title">Some of Our Awesome Products - 3</h2>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
              <profile-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="true"
                :card-image="cardProject3.cardProject1"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">Web Design</h6>
                  <h4 class="card-title">Famous Website Redesign</h4>

                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
              <profile-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="true"
                :card-image="cardProject3.cardProject2"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">Productivity Tools</h6>
                  <h4 class="card-title">Beautiful Desktop for Designers</h4>

                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
              <profile-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="true"
                :card-image="cardProject3.cardProject3"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">Android App</h6>
                  <h4 class="card-title">Analytics for Android</h4>

                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </template>
              </profile-card>
            </div>
            <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
              <profile-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="true"
                :card-image="cardProject3.cardProject4"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">Website</h6>
                  <h4 class="card-title">Behance Redesign</h4>

                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </template>
              </profile-card>
            </div>
          </div>
        </div>
      </div>-->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/cards/BlogCard.vue";
import Banner from "@/components/Banner.vue";
import Mixins from "@/plugins/basicMixins";
// import { BlogCard } from "@/components";
export default {
  name: "Home",
  components: {
    BlogCard,
    Banner
  },
  props: {
    // msg: String
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      companyName: null,
      companyEmail: null,
      companyPassword: null,
      toggledClass: false,
      headerImages: {
        Image1: require("@/assets/img/bg12.jpg"),
        Image2: require("@/assets/img/examples/office2.jpg"),
        Image3: require("@/assets/img/dg1.jpg"),
        Image4: require("@/assets/img/dg2.jpg"),
        Image5: require("@/assets/img/dg3.jpg")
      },
      cardBlog: {
        cardBlog1: require("@/assets/img/examples/blog6.jpg"),
        cardBlog2: require("@/assets/img/examples/blog8.jpg"),
        cardBlog3: require("@/assets/img/examples/blog7.jpg")
      },
      cardBlogPost: {
        cardBlogPost1: require("@/assets/img/examples/card-blog4.jpg"),
        cardBlogPost2: require("@/assets/img/office2.jpg")
      },
      cardBlogPost2: {
        cardBlogPost1: require("@/assets/img/examples/blog5.jpg"),
        cardBlogPost2: require("@/assets/img/examples/blog7.jpg")
      },
      cardBlogPost3: {
        cardBlogPost1: require("@/assets/img/examples/blog8.jpg")
      },
      cardBlogPost4: {
        cardBlogPost1: require("@/assets/img/bg5.jpg"),
        cardBlogPost2: require("@/assets/img/examples/blog6.jpg")
      },
      image: require("@/assets/img/examples/bg-pricing.jpg"),
      cardProject3: {
        cardProject1: require("@/assets/img/examples/card-project1.jpg"),
        cardProject2: require("@/assets/img/examples/card-project2.jpg"),
        cardProject3: require("@/assets/img/examples/card-project3.jpg"),
        cardProject4: require("@/assets/img/examples/card-project4.jpg")
      },
      bannerImages: {
        Banner1: require("@/assets/img/bg12.jpg")
      }
    };
  },
  methods: {
    header(nr) {
      return {
        backgroundImage: `url(${this.headerImages[`Image${nr}`]})`
      };
    }
  }
};
</script>

<style lang="scss">
.buttons {
  display: flex;
  align-items: center;
}

#headers {
  .el-carousel__container {
    height: 100vh !important;
  }
  .el-carousel {
    border-radius: 0 !important;
  }
}

.text-right {
  text-align: right;
}

.border-radius-0 {
  border-radius: 0;
}

.pb-0 {
  padding-bottom: 0 !important;
}
.pt-0 {
  padding-top: 0 !important;
}

// #greentemp {
//   background: url(@/assets/img/examples/bg-pricing.jpg);
// }

@media all and (max-width: 960px) {
  .md-card-form-horizontal .md-layout-item {
    margin-top: 1.5rem;
  }
}
</style>