<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    ACCOUNT
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <p> {{ account.name }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
