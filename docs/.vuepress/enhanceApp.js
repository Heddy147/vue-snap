// Dirty Hack for non-working automatically registering components
// Issue: https://github.com/vuejs/vuepress/issues/1173#issuecomment-576155795

import Carousel from '../components/Carousel.vue'

export default ({ Vue }) => {
  Vue.component('VCarousel', Carousel);
}