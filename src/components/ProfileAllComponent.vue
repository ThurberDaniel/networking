<template>
  <div class="card shadow m-3" style="width: 50rem;">
    <div class="card-body">
      <router-link :to="{name: 'ProfileDetailPage', params: {id: allVal.id}}">
        <h5 class="card-title">
          {{ allVal.creator.name }}
        </h5>
        <img :src="allVal.imgUrl">
        <img class="rounded-circle small-img position-absolute" :src="allVal.creator.picture" alt="Creator Photo">
      </router-link>
      <p class="card-text">
        {{ allVal.creator.github }}
      </p>
      <p>{{ allVal.creator.email }}</p>
      <p>{{ allVal.creator.class }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAllComponent',
  props: {
    allVal: {
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
