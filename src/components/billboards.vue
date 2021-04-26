<template>
  <div>
  </div>
</template>

<script>
import { billboardsService } from '../services/BillboardsService'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { computed, onMounted } from 'vue'

export default {
  name: 'Billboards',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
