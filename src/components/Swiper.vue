<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 10,
        // init: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // breakpoints: {
        //   "@0.00": {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   "@0.75": {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   "@1.00": {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   "@1.50": {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // },

        // slidesPerView:2.5,
        // spaceBetween: 30,
        // centeredSlides: true,
        // loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
    });
  },
};
</script>