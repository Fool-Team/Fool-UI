<template>
  <div
    :class="carouselClasses"
    ref="root"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div class="fool-carousel__container" :style="{height: height + 'px'}">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="arrow === 'always' || hover"
          class="fool-carousel__arrow fool-carousel__arrow--left"
          @click="onArrowClick(-1)"
        >👈</button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="arrow === 'always' || hover"
          class="fool-carousel__arrow fool-carousel__arrow--right"
          @click="onArrowClick(1)"
        >👉</button>
      </transition>
      <slot />
    </div>
    <ul :class="indicatorsClasses" ref="indicators">
      <li
        v-for="(item, index) in $slots.default.length"
        :key="index"
        :class="indicatorClasses"
        @mouseenter="handleIndicatorHover(index, activeIndex)"
        @click.stop="handleIndicatorClick(index, activeIndex)"
      >
        <button class="fool-carousel__button"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import Carousel from './carousel'

export default {
  name: 'foolCarousel',
  props: {
    initialIndex: {
      // 	初始状态激活的幻灯片的索引，从 0 开始
      type: Number,
      default: 0
    },
    trigger: {
      // 	指示器的触发方式
      type: String,
      default: 'hover' // hover | click
    },
    autoplay: {
      // 	是否自动切换
      type: Boolean,
      default: false
    },
    interval: {
      // 自动切换的时间间隔，单位为毫秒
      type: Number,
      default: 3000
    },
    arrow: {
      // 切换箭头的显示时机
      type: String,
      default: 'houver' // always | hover | never
    },
    direction: {
      // 展示的方向
      type: String,
      default: 'horizontal' // horizontal | vertical
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    height: Number
  },
  data () {
    return {
      carousel: null,
      hover: false
    }
  },
  computed: {
    carouselClasses () {
      const classes = ['fool-carousel', `fool-carousel--${this.direction}`]
      return classes
    },
    indicatorsClasses () {
      const classes = [
        'fool-carousel__indicators',
        `fool-carousel__indicators--${this.direction}`
      ]
      return classes
    },
    indicatorClasses () {
      const classes = [
        'fool-carousel__indicator',
        `fool-carousel__indicator--${this.direction}`
      ]
      return classes
    },
    arrowDisplay () {
      return this.arrow !== 'never'
    },
    activeIndex () {
      return this.carousel.activeIndex
    }
  },
  methods: {
    onArrowClick (step) {
      this.carousel.animationStep(step)
    },
    onCarouselButtonClick (index) {
      this.carousel.animationTo(index)
    },
    handleMouseEnter () {
      this.hover = true
      if (this.autoplay && this.pauseOnHover) this.carousel.pausePlay()
    },
    handleMouseLeave () {
      this.hover = false
      if (this.autoplay) this.carousel.autoPlay()
    },
    handleIndicatorHover (to, from) {
      if (this.trigger !== 'hover') return
      this.carousel.animationTo(to, from)
    },
    handleIndicatorClick (to, from) {
      this.carousel.animationTo(to, from)
    }
  },
  mounted () {
    this.carousel = new Carousel(
      this.$refs.root,
      'fool-carousel__item',
      this.$refs.indicators,
      this.initialIndex,
      this.autoplay,
      this.interval,
      this.direction
    )
  }
}
</script>

<style lang="scss">
@use '../../theme-thalk/carousel.scss' as *;
</style>