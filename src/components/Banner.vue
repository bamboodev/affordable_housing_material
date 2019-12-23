<template>
  <div class="section" :style="showImage(background)">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-80 md-small-size-100 mx-auto">
          <h2 class="title" :style="showColor(colorstyle)">{{ title }}</h2>
          <h4 :style="showColor(colorstyle)">{{ body }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    body: {
      type: String,
      default:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vero repudiandae saepe exercitationem error, asperiores dolores similique voluptatibus aperiam, tempora fugiat facere ex tenetur commodi suscipit cum earum quas excepturi molestiae voluptate quia. Enim quas placeat similique dolore officiis animi omnis ratione doloremque beatae aliquam nulla expedita, dolorem quis quam."
    },
    background: {
      type: String,
      default: "@/assets/img/housing-crisis.jpg"
    },
    colorstyle: {
      type: String
    }
  },
  methods: {
    showImage(image) {
      return {
        backgroundImage: `url(${image})`,
        opacity: 1
      };
    },
    showColor(colorstyle) {
      switch (colorstyle) {
        case "lite":
          return {
            color: `#fff !important`
          };
        default:
          return {
            color: `#000 !important`
          };
      }
    }
  }
};
</script>
<style></style>
