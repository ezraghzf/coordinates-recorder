<script setup>
defineProps({
  msg: String,
  index: Number
})
</script>
<template>
<div class="item">
  <div class="item-action"><button @click="$emit('remove',index)">X</button></div>
  <div class="item-content">
    <slot></slot>
  </div>
</div>
</template>
<style scoped>
.item {
  border-radius: .5rem;
  background-color: darkgray;
  display: flex;
  padding: .5rem;
}
.item-action {
  margin-right: .5rem;
  font-size: xx-small;
}
</style>