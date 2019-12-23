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

      <banner
        title="Working Together for Meaningful Change"
        :background="bannerImages.Banner1"
        colorstyle="lite"
      ></banner>
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
        // Image1: require("@/assets/img/bg12.jpg"),
        Image2: require("@/assets/img/san-francisco.jpg")
        // Image3: require("@/assets/img/dg1.jpg"),
        // Image4: require("@/assets/img/dg2.jpg"),
        // Image5: require("@/assets/img/dg3.jpg")
      },
      cardBlog: {
        cardBlog1: require("@/assets/img/examples/blog6.jpg"),
        cardBlog2: require("@/assets/img/examples/blog8.jpg"),
        cardBlog3: require("@/assets/img/examples/blog7.jpg")
      },
      cardBlogPost: {
        cardBlogPost1: require("@/assets/img/san-francisco.jpg"),
        cardBlogPost2: require("@/assets/img/san-francisco-housing.jpg")
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
        Banner1: require("@/assets/img/housing-crisis.jpg")
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