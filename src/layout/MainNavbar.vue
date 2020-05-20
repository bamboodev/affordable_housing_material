<template>
  <md-toolbar id="toolbar" md-elevation="0" :class="navClass" :color-on-scroll="colorOnScroll">
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <!-- <h3 class="md-title">{{ brand }}</h3> -->
        <!-- <md-button slot="title" to="/" class="md-button md-button-link md-white md-simple">
          <h3 class="md-title">{{ brand }}</h3>
        </md-button>-->
        <!-- <router-link to="/" class="md-title">{{ brand }}</router-link> -->
        <router-link to="/" class="md-title">
          <img
            src="@/assets/img/logo-white.png"
            alt="Affordability Project Logo"
            width="150"
            height="auto"
          />
        </router-link>
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
                    <md-button
                      slot="title"
                      to="/projects"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p>Projects</p>
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
                      to="/directors"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p>Management</p>
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
      default: true
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      brand: "Affordability Project",
      navClass: "md-transparent"
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
      // console.log("navbar toggled");
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
  },
  watch: {
    $route() {
      // close mobile menu
      this.toggledClass = false;
      this.NavbarStore.showNavbar = false;
      // dark nav on contact
      if (this.$route.name === "contact") {
        this.navClass = "md-default";
      } else {
        this.navClass = "md-transparent";
      }
      // scroll position
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style lang="scss">
.wrapper {
  margin-top: -204px;
}
.md-toolbar {
  border-radius: 0px !important;
  padding-top: 25px !important;
}

.md-toolbar .md-title {
  height: auto !important;
}

@media all and (max-width: 960px) {
  .wrapper {
    margin-top: -148px;
  }
  .page-header .container:first-of-type {
    margin-top: 130px;
  }
  .main {
    margin-top: -20px !important;
  }
}
</style>