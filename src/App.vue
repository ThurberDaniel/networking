<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div>
      <Billboards />
    </div>
    <div class="bg-warning text-light text-center p-4">
      Made with Power by DANIEL
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      billboards: computed(() => AppState.billboards)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
