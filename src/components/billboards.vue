<template>
  <div>
    ADS
    <!-- <img :src="billboard.tall">
    <img :src="billboard.tall"> -->
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Billboards',
  props: {
    billboard: {
      type: Object,
      required: true

    }
  },
  set() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

//post component from homepage (homepage v-for)
post component (styling) post component
v-if="value.smoething" :src="value.something"
post componenet {{post.likes.length}}*likes*
post component delete button  v-if state.account && state.account.id == post.creatorId @click="deletepost" **return**> postsService.deletepost(props.post.id)
profile page ** add watch to get page to get new porfiles info On Mounted change to watchefffect profilepage
POST SERVICE async  deletepost(id)  await api.delete(api/post/ +id)  appstate.psots = appstate.post.filter
dont set account as null in appstate
post componenet
script setup state reactive  account: computed ((apppstate.account)) return state
//
