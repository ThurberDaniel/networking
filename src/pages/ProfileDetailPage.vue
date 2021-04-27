<template>
  <!-- you cannot access the property of a computed because this template tries to load before the data has returned
you can prevent this with a v-if -->
  <div v-if="state.activeProfile">
    <h1 class="text-danger">
      {{ state.activeProfile.name }}'s Networking Page
    </h1>

    <div class="card m-3 p-3 shadow" style="width:450px ">
      <button v-if="state.account.id && isAuthentic == state.activeProfile.id">
        Edit
      </button>
      <button v-if="state.account.id && isAuthentic == state.activeProfile.id">
        Delete
      </button>
      <img class="card-img-top" :src="state.activeProfile.picture" alt="Card image">
      <div class="card-img-overlay">
        <h4 class="card-title">
          {{ state.activeProfile.name }}
        </h4>
        <p class="card-text">
          Total likes: {{ state.activeProfile.subs.length }}
        </p>
      </div>
      <button v-if="state.account.id == state.activeProfile.id" class="bg-warning">
        edit
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { accountService } from '../services/AccountService'

export default {
  name: 'ProfileDetailPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      // posty: computed(() => AppState.activePost),
      user: computed(() => AppState.user),
      // FIXME watch the activePosts
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    })

    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        // FIXME Get the profile's posts from the post api ('api/profile/:id/posts')
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
 img{
   width: 100%
 }

 .small-img{
   width: 5em;
   left: 100px;
//    top: -75px
 }

</style>
