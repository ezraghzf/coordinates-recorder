<script setup>
import { watch, ref } from 'vue'

defineProps({
  msg: String,
  coords: Object
})
//watch(coords => console.log('wtf'))


</script>
<template>
  <div class="item">
    {{ coords.altitude }} - {{ coords.latitude }} - {{ coords.longitude }}
  </div>
</template>
<style scoped>
.item {
  border-radius: 2rem;
  background-color: darkgray;
  padding: 1rem 2rem;
}
</style>