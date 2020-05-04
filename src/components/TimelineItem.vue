<template>
  <section class="timeline-item">
    <div class="item">
      <span :style="getBackgroundColour(itemTimeline.color)" class="dot" />
      <h4 class="diploma-item">{{ itemTimeline.diploma }}</h4>
      <h3 class="title-item" v-html="itemTimeline.title" />
      <h4 class="title-item" v-html="itemTimeline.option" />
      <p class="location-item" v-html="itemTimeline.location" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    itemTimeline: {
      type: Object,
      default: () => ({})
    },
    colorDots: {
      type: String,
      default: '#2da1bf'
    },
    dateLocale: {
      type: String,
      default: ''
    }
  },
  methods: {
    getBackgroundColour(color) {
      return color ? `background:${color}` : `background:${this.colorDots}`
    },
    getFormattedDate(item) {
      const locale = this.dateLocale || 'fr'
      const nameMonth = item.from.toLocaleDateString(locale, { month: 'long' })
      if (item.showDayAndMonth) {
        const day = item.from.getDate()
        return `${day}. ${nameMonth}`
      }

      return nameMonth
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-item {
  .item {
    border-left: 5px solid #ccd5db;
    padding: 20px 0 20px 15px;
    position: relative;
  }
  .diploma-item {
    margin: 0;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
  }
  .title-item {
    // margin: 0;
    // padding: 5px 0;
    // font-size: 15px;

  }
  .location-item {
    margin: 0;
  }
  .dot {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: -10px;
    top: 26px;
  }
}
</style>
