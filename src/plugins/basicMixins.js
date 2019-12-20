import {
  API_KEY
} from "../API_KEY";
import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.KEY = API_KEY;

const InitMap = {
  methods: {
    initMap(google) {
      // Regular Map
      const myLatlng = new google.maps.LatLng(37.773972, -122.431297);
      const mapOptions = {
        zoom: 10,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        disableDefaultUI: true, // a way to quickly hide all controls
        zoomControl: true,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
              "color": "#ebe3cd"
            }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#523735"
            }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#f5f1e6"
            }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#c9b2a6"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#dcd2be"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ae9e90"
            }]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "poi",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#93817c"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#a5b076"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#447530"
            }]
          },
          {
            "featureType": "road",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f1e6"
            }]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#fdfcf8"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f8c967"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#e9bc62"
            }]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e98d58"
            }]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#db8555"
            }]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#806b63"
            }]
          },
          {
            "featureType": "transit",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#8f7d77"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#ebe3cd"
            }]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#b9d3c2"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#92998d"
            }]
          }
        ]
      };

      const map = new google.maps.Map(
        document.getElementById("contactUs2Map"),
        mapOptions
      );

      const marker = new google.maps.Marker({
        position: myLatlng,
        title: "Regular Map!"
      });

      marker.setMap(map);
    }
  },
  mounted() {
    GoogleMapsLoader.load(google => {
      this.initMap(google);
    });
  }
};

const HeaderImage = {
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};

const VerticalNav = {
  methods: {
    scrollToElement(elem) {
      let element_id = document.getElementById(elem);
      if (element_id) {
        element_id.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      }
    },
    scrollListener() {
      var contentSections = document.getElementsByClassName("cd-section");
      var navigationItems = document
        .getElementById("cd-vertical-nav")
        .getElementsByTagName("a");

      for (let i = 0; i < contentSections.length; i++) {
        var activeSection =
          parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
        if (
          contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop <
          window.pageYOffset &&
          contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop >
          window.pageYOffset
        ) {
          navigationItems[activeSection].classList.add("is-selected");
        } else {
          navigationItems[activeSection].classList.remove("is-selected");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};

const ShoppingCart = {
  computed: {
    shoppingTotal() {
      return this.shoppingCartTable.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
    }
  },
  methods: {
    increaseQuantity(item) {
      item.qty++;
      this.computeAmount(item);
    },
    decreaseQuantity(item) {
      if (item.qty > 1) {
        item.qty--;
        this.computeAmount(item);
      }
    },
    computeAmount(item) {
      item.amount = item.qty * item.price;
    }
  }
};

const Mixins = {
  InitMap,
  VerticalNav,
  ShoppingCart,
  HeaderImage
};

export default Mixins;