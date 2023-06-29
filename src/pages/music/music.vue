<template>
  <view class="music">music</view>
</template>

<script lang="ts" setup>
import { addStyle } from '@/tools/function'
let style = {
  backgroundColor: '#ffffff',
  marginBottom: '9px'
}

let newStyle = addStyle(style, 'string')
console.log(newStyle)
</script>

<style lang="scss" scoped></style>
