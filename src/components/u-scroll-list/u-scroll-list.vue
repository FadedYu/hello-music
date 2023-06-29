<template>
  <view
    class="u-scroll-list"
    ref="u-scroll-list"
  >
    <!-- #ifdef APP-NVUE -->
    <!-- nvue使用bindingX实现，以得到更好的性能 -->
    <scroller
      class="u-scroll-list__scroll-view"
      ref="uScrollListScrollView"
      scroll-direction="horizontal"
      :show-scrollbar="false"
      :offset-accuracy="1"
      @scroll="nvueScrollHandler"
    >
      <view class="u-scroll-list__scroll-view__content">
        <slot />
      </view>
    </scroller>
    <!-- #endif -->
  </view>
</template>

<!-- <script src="./scrollWxs.wxs" module="wxs" lang="wxs"></script> -->

<script setup lang="ts">
import { toPx, addStyle, addUnit } from '@/tools/function/index'
import { useScrollListProps as props } from './useScrollListProps'
import { nvueScroll } from './nvue'
import { ref, reactive, computed } from 'vue'

interface LineStyle {
  width?: string
  backgroundColor?: string
}

/**
 * 响应式属性
 */
let scrollWidth = ref(0)
let scrollInfo = reactive({
  scrollLeft: 0,
  scrollWidth: 0,
})

let uScrollListScrollView = ref(null)
let uScrollListIndicatorLineBar = ref(null)

/**
 * 计算属性
 */
const lineStyle = computed(() => {
  const style: LineStyle = {}
  // 指示器整体的样式，需要设置其宽度和背景色
  style.width = addUnit(props.indicatorWidth)
  style.backgroundColor = props.indicatorColor
  return style
})

const nvueScrollHandler = () => {}
</script>

<style lang="less" scoped></style>
