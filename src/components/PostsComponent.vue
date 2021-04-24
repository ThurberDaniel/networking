<template>
  <div class="card" style="width: 45rem;">
    <img :src="postVal.imgUrl">
    <div class="card-body">
      <h5 class="text-danger">
        {{ postVal.creator.name }}
      </h5>
      <p class="text-center">
        {{ postVal.creator.email }}
      </p>
      <p class="text-center">
        {{ postVal.creator.picture }}
      </p>
      <p class="text-center">
        {{ postVal.creator.bio }}
      </p>
      <p class="text-primary">
        {{ postVal.creator.class }}
      </p>
    </div>
  </div>
  <!-- <div class="project-photo col-md-3">
    <div class=" position-relative">
      <router-link :to="{name: 'AccountDetails', params: {id: postVal.id}}">
      <img :src="postVal.imgUrl">
      <p>{{ postVal.creator }}</p>
      <p>{{ postVal.creator.email }}</p>
      <p>{{ postVal.creator.name }}</p>
      <p>{{ postVal.creator.bio }}</p>
      <p>{{ postVal.creator.class }}</p>

      <img class="rounded-circle small-img position-absolute" :src="postVal.creator.picture" alt="Creator Photo">
      <div class="text-left">
        <h4>{{ postVal.title }}</h4>
      </div>
      </router-link>
    </div>
  </div> -->
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
   left: 210px;
   top: -75px
 }
</style>
