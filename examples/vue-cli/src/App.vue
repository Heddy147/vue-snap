<template>
  <carousel class="example-default">
    <slide class="carousel-slide">
      1
    </slide>
    <slide class="carousel-slide">
      2
    </slide>
    <slide class="carousel-slide">
      3
    </slide>
    <slide class="carousel-slide">
      4
    </slide>
    <slide class="carousel-slide">
      5
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}

.example-default .carousel-slide {
  height: 200px;
  font-size: 18px;
  color: #fff;
}

.example-default .carousel-slide:nth-child(n+1) {
  background: #2e5c8a;
}

.example-default .carousel-slide:nth-child(2n+1) {
  background: #336699;
}
</style>
