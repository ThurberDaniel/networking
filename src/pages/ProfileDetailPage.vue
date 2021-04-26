<template>
  <h1>{{ state.posty.creator.name }}</h1>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

export default {
  name: 'ProfileDetailPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      posty: computed(() => AppState.activePost),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)

    })

    onMounted(async() => {
      try {
        await postsService.getActive(route.params.id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
