<template>
  <div class="card shadow m-3" style="width: 50rem;">
    <div class="card-body">
      <router-link :to="{name: 'ProfileDetailPage', params: {id: postVal.creatorId}}">
        <!-- FIXME add a delete button v-if="state.account.id == postVal.creatorId" -->
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
      <p>Total Likes:{{ postVal.creator.likes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsComponent',
  props: {
    postVal: {
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
 img{
   width: 100%
 }

 .small-img{
   width: 5em;
   left: 100px;
//    top: -75px
 }
</style>
