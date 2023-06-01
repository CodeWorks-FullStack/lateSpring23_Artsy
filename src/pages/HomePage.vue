<template>
  <div class="home">

    <div class="container">
      <div class="row my-2">
        <div class="col-12" v-for="p in projects" :key="p.id">
          <ProjectCard :project="p" />
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { projectsService } from '../services/ProjectsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    async function getProjects(){
      try {
        await projectsService.getProjects()
      } catch (error) {
        Pop.error(error, '[Getting Projects]')
      }
    }


    onMounted(()=>{
      getProjects()
    })

    return {

      projects: computed(() => AppState.projects)

    }
  }
}
</script>

<style scoped lang="scss">
.home {

}
</style>
