<template>
  <section class="timeline">
    <div v-if="hasItems" class="wrapper-timeline">
      <div
        v-for="(timelineContent, timelineIndex) in dataTimeline"
        :key="timelineIndex"
        :class="wrapperItemClass()"
      >
        <div class="section-year">
          <span v-if="hasFromYear(timelineContent)" class="year">
            <span v-if="hasToYear(timelineContent)" class="yearTo">{{getToYear(timelineContent)}}</span>
            {{ getFromYear(timelineContent) }}
          </span>
        </div>
        <TimelineItem
          :item-timeline="timelineContent"
          :date-locale="dateLocale"
          :color-dots="colorDots"
        />
      </div>
    </div>
    <p v-else>{{ messageWhenNoItems }}</p>
  </section>
</template>

<script>
import TimelineItem from './PTrainingItem.vue'

export default {
  name: 'Timeline',
  components: {
    TimelineItem
  },
  props: {
    timelineItems: {
      type: Array,
      default: () => []
    },
    messageWhenNoItems: {
      type: String,
      default: ''
    },
    colorDots: {
      type: String,
      default: '#2da1bf'
    },
    uniqueTimeline: {
      type: Boolean,
      default: false
    },
    uniqueYear: {
      type: Boolean,
      default: false
    },
    order: {
      type: String,
      default: ''
    },
    dateLocale: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasItems() {
      return !!this.timelineItems.length
    },
    dataTimeline() {
      if (this.order === 'desc')
        return this.orderItems(this.timelineItems, 'desc')
      if (this.order === 'asc')
        return this.orderItems(this.timelineItems, 'asc')
      return this.timelineItems
    }
  },
  methods: {
    stringToDate(dateString){
      return(new Date(dateString.split('-')[0], dateString.split('-')[1],dateString.split('-')[2]));
    },
    wrapperItemClass() {
      return {
        'wrapper-item': true,
        'unique-timeline': true
      }
    },
    checkYearTimelineItem(timelineIndex) {
      const previousItem = this.dataTimeline[timelineIndex - 1]
      const nextItem = this.dataTimeline[timelineIndex + 1]
      const currentItem = this.dataTimeline[timelineIndex]
      if (!previousItem || !nextItem) {
        return false
      }
      const fullPreviousYear = this.getToYear(previousItem)
      const fullNextYear = this.getToYear(nextItem)
      const fullCurrentYear = this.getToYear(currentItem)
      return (
        (fullPreviousYear === fullCurrentYear &&
          fullCurrentYear === fullNextYear) ||
        fullCurrentYear === fullNextYear
      )
    },
    getFromYear(date) {
      var dateFrom = new Date(date.from.split('-')[0])
      return dateFrom.getFullYear()
    },
    getToYear(date) {
      var dateTo = new Date(date.to.split('-')[0])
      return dateTo.getFullYear()
    },
    hasFromYear(dataTimeline) {
      return (
        Object.prototype.hasOwnProperty.call(dataTimeline,'from') && dataTimeline.from !== undefined
      )
    },
     hasToYear(dataTimeline) {
      return (
        Object.prototype.hasOwnProperty.call(dataTimeline,'to') && dataTimeline.to !== undefined
      )
    },
    getTimelineItemsAssembled(items) {
      const itemsGroupByYear = []
      items.forEach(item => {
        const fullTime = item.from.getTime()
        if (itemsGroupByYear[fullTime]) {
          return itemsGroupByYear[fullTime].push(item)
        }
        itemsGroupByYear[fullTime] = [item]
      })
      return itemsGroupByYear
    },
    orderItems(items, typeOrder) {
      const itemsGrouped = this.getTimelineItemsAssembled(items)
      const keysItemsGrouped = Object.keys(itemsGrouped)
      const timeItemsOrdered = keysItemsGrouped.sort((a, b) => {
        if (typeOrder === 'desc') {
          return b - a
        }
        return a - b
      })
      return timeItemsOrdered.map(timeItem => itemsGrouped[timeItem]).flat()
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  text-align: left;
  width: 100%;
  // max-width: 500px;
  .wrapper-timeline {
    position: relative;
  }
  .wrapper-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    // margin-bottom: 10px;
    .section-year {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      padding: 15px;
      font-weight: bold;
      font-size: 18px;
      .year {
        margin: 0;
        text-align: right;
      }
      .yearTo{
        margin-right: 0px;
      }
    }
    &.unique-timeline {
      margin-bottom: 0;
    }
  }
}
</style>
