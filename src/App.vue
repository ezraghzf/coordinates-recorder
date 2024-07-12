<script setup>
import CoordsTracker from './components/CoordsTracker.vue';
import CoordsListItem from './components/CoordsListItem.vue';
import { useGeolocation } from '@vueuse/core'
import { watch, ref } from 'vue'

const coordsArr = ref([])
const { coords } = useGeolocation()
const saveCoords = () => {
  const coordSnapshot = {lat: coords.value.latitude, long: coords.value.longitude, alt: coords.value.altitude, timestamp: new Date()}
  coordsArr.value.push(coordSnapshot)
}
const removeCoords = (index) => {
  coordsArr.value.splice(index,1)
}
</script>

<template>
  <CoordsTracker :coords="coords"></CoordsTracker>
  <button type="button" @click="saveCoords">New</button>
  <div class="list-item-container">
    <CoordsListItem v-for="(cord, idx) in coordsArr" :key="idx" :index="idx" @remove="removeCoords">
      {{ cord }}
    </CoordsListItem>
  </div>

</template>

<style scoped>
.list-item-container{
  gap: 5px;
  display: flex;
  flex-direction: column;
}
</style>
