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
                <!-- <img
                  src="@/assets/img/logo-white.png"
                  alt="Affordability Project Logo"
                  width="250"
                  height="auto"
                />-->
                <h1
                  class="title"
                >The San Francisco Bay Area has produced only 6% of the middle income housing inventory that is required to support its population.</h1>
                <h1 class="title">We are going to change that.</h1>
                <!-- <h4>Compared to the national average, a working class family needs to make an additional $83,000 per year to be able to live in San Francisco.</h4> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-blogs-1" style="display">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img :src="cardBlogPost.cardBlogPost1" alt />
              <h3 class="card-title">
                <router-link to="/donate">Help Our Cause - Donate!</router-link>
              </h3>
              <!-- <p class="card-description">
                If you believe that the Bay Area's working class are the life blood of our society and would like to help our cause to construct and subsidize middle income housing,
                <router-link to="/donate">please donate</router-link>.
              </p>-->
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img :src="cardBlogPost.cardBlogPost2" alt />
              <h3 class="card-title">
                <router-link to="/tenants">Need a Rent Break? Apply Here</router-link>
              </h3>
              <!-- <p class="card-description">
                If you are a middle income individual or family who could use a rent break and have interest in living in one of our projects,
                <router-link to="/tenants">we would love to hear from you</router-link>.
              </p>-->
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img :src="cardBlogPost.cardBlogPost3" alt />
              <h3 class="card-title">
                <router-link to="/corporations">Corporate Involvement</router-link>
              </h3>
              <!-- <p class="card-description">
                If you are a corporation who is interested in helping our cause,
                <router-link to="/corporations">we would love to partner</router-link>!
              </p>-->
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img :src="cardBlogPost.cardBlogPost4" alt />
              <h3 class="card-title">
                <router-link to="/donateHousing">Donate a Housing Unit</router-link>
              </h3>
              <!-- <p class="card-description">
                If you are a corporation who is interested in helping our cause,
                <router-link to="/corporations">we would love to partner</router-link>!
              </p>-->
            </div>
          </div>
        </div>
      </div>

      <banner
        title="Working Together for Meaningful Change"
        body="Our goal is to bring people and organizations together to solve the middle income housing crisis. We hope other non-profits, government agencies, developers, technology companies, activists and everyday folks will join our fight to build more middle income housing"
        :background="bannerImages.Banner1"
        colorstyle="lite"
      ></banner>
    </div>
  </div>
</template>

<script>
// import BlogCard from "@/components/cards/BlogCard.vue";
import Banner from "@/components/Banner.vue";
import Mixins from "@/plugins/basicMixins";
// import { BlogCard } from "@/components";
export default {
  name: "Home",
  components: {
    // BlogCard,
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
      // cardBlog: {
      //   cardBlog1: require("@/assets/img/examples/blog6.jpg"),
      //   cardBlog2: require("@/assets/img/examples/blog8.jpg"),
      //   cardBlog3: require("@/assets/img/examples/blog7.jpg")
      // },
      cardBlogPost: {
        cardBlogPost1: require("@/assets/img/donate.jpg"),
        cardBlogPost2: require("@/assets/img/nurse.jpg"),
        cardBlogPost3: require("@/assets/img/san-francisco-skyline.jpg"),
        cardBlogPost4: require("@/assets/img/donateHousing.jpg")
      },
      // cardBlogPost2: {
      //   cardBlogPost1: require("@/assets/img/examples/blog5.jpg"),
      //   cardBlogPost2: require("@/assets/img/examples/blog7.jpg")
      // },
      // cardBlogPost3: {
      //   cardBlogPost1: require("@/assets/img/examples/blog8.jpg")
      // },
      // cardBlogPost4: {
      //   cardBlogPost1: require("@/assets/img/bg5.jpg"),
      //   cardBlogPost2: require("@/assets/img/examples/blog6.jpg")
      // },
      // image: require("@/assets/img/examples/bg-pricing.jpg"),
      // cardProject3: {
      //   cardProject1: require("@/assets/img/examples/card-project1.jpg"),
      //   cardProject2: require("@/assets/img/examples/card-project2.jpg"),
      //   cardProject3: require("@/assets/img/examples/card-project3.jpg"),
      //   cardProject4: require("@/assets/img/examples/card-project4.jpg")
      // },
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

<style lang="scss" >
// #app #vue-material-kit-pro #toolbar {
//   // background-color: transparent !important;
// }

.home h1.title {
  font-size: 32px;
}
.home .page-header h4 {
  padding-bottom: 200px;
}

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

// .card-title a {
//   // text-decoration: underline !important;
//   &:hover {
//     // text-decoration: underline !important;
//   }
// }

// #greentemp {
//   background: url(@/assets/img/examples/bg-pricing.jpg);
// }

@media all and (max-width: 960px) {
  .home h1.title {
    font-size: 22px;
  }
  .home .page-header img {
    margin-top: 240px;
  }
  .md-card-form-horizontal .md-layout-item {
    margin-top: 1.5rem;
  }
}
</style>