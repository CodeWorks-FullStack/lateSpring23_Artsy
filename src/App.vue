<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>


  <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content" v-if="project">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">{{ project.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="text-center" v-for="img in project.projectImgs" :key="img">
            <img class="img-fluid mb-2" :src="img" :alt="'art by ' + project.creator.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      project: computed(() => AppState.activeProject)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
