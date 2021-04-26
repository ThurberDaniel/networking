<template>
  <div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'SearchRes',
  setup() {
    return {
      searching: computed(() => AppState.activeProfile)
    }
  }

}
</script>

<style scoped>

</style>
