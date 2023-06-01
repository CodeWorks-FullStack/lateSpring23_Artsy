<template>
  <div class="profile-page">

    <div class="container">
      <div class="row mt-2" v-if="profile">
        <div class="col-md-8 m-auto">
          <div>
            <ProfileCard :profile="profile" />
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-md-8 m-auto" v-for="p in projects" :key="p.id">
          <ProjectCard :project="p" />
        </div>
      </div>

    </div>




  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { profileService } from '../services/ProfileService.js'
import { projectsService } from '../services/ProjectsService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const route = useRoute()

    async function getProfile() {
      try {
        await profileService.getProfileById(route.params.id)
      } catch (error) {
        Pop.error(error, '[Getting Profile]')
      }
    }

    async function getProjectsByProfile() {
      try {
        await projectsService.getProjectsByProfile(route.params.id)
      } catch (error) {
        Pop.error(error, '[Getting Projects]')
      }
    }


    onMounted(() => {
      getProfile()
      getProjectsByProfile()
    })


    return {
      profile: computed(() => AppState.activeProfile),
      projects: computed(() => AppState.projects)

    }
  }
}
</script>


<style lang="scss" scoped></style>
