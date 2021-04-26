<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
    </div>
    <PostsComponent v-for="posty in state.showAll" :key="posty.creatorId" :post-val="posty" />
    <ProfileAllComponent v-for="oneProfileAll in state.oneShowAll" :key="oneProfileAll.id" :all-val="oneProfileAll" />
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import Notification from '../utils/Notification'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      showAll: computed(() => AppState.showAllPosts),
      oneShowAll: computed(() => AppState.showAllOne)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
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

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
