<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-fixed"
    :class="{
      [`md-${type}`]: !navbarTransparent,
      [extraNavClasses]: navbarTransparent,
      'md-transparent': navbarTransparent
    }"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <!-- <h3 class="md-title">{{ brand }}</h3> -->
        <!-- <md-button slot="title" to="/" class="md-button md-button-link md-white md-simple">
          <h3 class="md-title">{{ brand }}</h3>
        </md-button>-->
        <router-link to="/" class="md-title">{{ brand }}</router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section="false"></mobile-menu>
            <md-list>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      to="/about"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p>About</p>
                    </md-button>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <p>Management</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <router-link to="/directors">Board of Directors</router-link>
                        </li>
                        <li>
                          <router-link to="/development">Development Team</router-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <p>Surveys</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <router-link to="/survey">Tenants</router-link>
                        </li>
                        <li>
                          <router-link to="/survey">Landlords</router-link>
                        </li>
                        <li>
                          <router-link to="/survey">Developers</router-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      to="/press"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p>Press</p>
                    </md-button>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      to="/contact"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p>Contact</p>
                    </md-button>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button class="md-success md-round" to="/donate">
                      <md-icon>favorite</md-icon>Donate
                    </md-button>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
          "dark"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    navbarTransparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      docs_link:
        "https://demos.creative-tim.com/vue-material-kit-pro/documentation/",
      extraNavClasses: "",
      toggledClass: false,
      brand: "Affordability Project",
      linksSections: [
        { name: "janky headers", icon: "dns" },
        { name: "features", icon: "build" },
        { name: "blogs", icon: "list" },
        { name: "teams", icon: "people" },
        { name: "projects", icon: "assignment" },
        { name: "pricing", icon: "monetization_on" },
        { name: "testimonials", icon: "chat" },
        { name: "contacts", icon: "call" }
      ],
      linksExamples: [
        { name: "About Us", href: "about-us" },
        { name: "Blog Post", href: "blog-post" },
        { name: "Blog Posts", href: "blog-posts" },
        { name: "Contact Us", href: "contact-us" },
        { name: "Landing Page", href: "landing-page" },
        { name: "Login Page", href: "login-page" },
        { name: "Pricing Page", href: "pricing-page" },
        { name: "Shopping Cart", href: "shopping-cart" },
        { name: "Ecommerce Page", href: "ecommerce-page" },
        { name: "Product Page", href: "product-page" },
        { name: "Profile Page", href: "profile-page" },
        { name: "Signup Page", href: "signup-page" },
        { name: "Error Page", href: "error-page" }
      ]
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["index"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      console.log("navbar toggled");
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  }
};
</script>
