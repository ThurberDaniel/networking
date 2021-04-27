<template>
  <div class="card shadow m-3" style="width: 50rem;">
    <div class="card-body">
      <button v-if="state.account.id == postVal.creatorId">
        Delete
      </button>
      <router-link :to="{name: 'ProfileDetailPage', params: {id: postVal.creatorId}}">
        <h5 class="card-title">
          {{ postVal.creator.name }}
        </h5>
        <img :src="postVal.imgUrl">
        <img class="rounded-circle small-img position-absolute" :src="postVal.creator.picture" alt="Creator Photo">
      </router-link>
      <p class="card-text">
        {{ postVal.creator.github }}
      </p>
      <p>{{ postVal.creator.email }}</p>
      <p>{{ postVal.creator.class }}</p>
      <p>Total Likes:{{ postVal.creator.likes.length }}</p>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'
export default {
  name: 'PostsComponent',
  props: {
    postVal: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {}
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
