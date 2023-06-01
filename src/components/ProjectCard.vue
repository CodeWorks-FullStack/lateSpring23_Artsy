<template>
  <div class="project-card elevation-1">
    <div class="d-flex gap-3 align-items-center">
      <img class="project-cover-img" :src="project.coverImg" :alt="project.title">
      <div>
        <p class="fs-3">
          {{ project.title }}
        </p>
        <p>
          <button class="btn btn-outline-secondary" @click="setActiveProject" title="See More"
            data-bs-target="#projectModal" data-bs-toggle="modal">
            <i class="mdi mdi-file-image"></i>
            {{ project.projectImgs.length }}
          </button>
        </p>
        <router-link :to="{name: 'Profile', params: { id: project.creatorId }}">
          <p>
            <img class="project-artist rounded-circle" :src="project.creator.picture" :alt="project.creator.name">
            <em>
              By {{ project.creator.name }}
            </em>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { Project } from '../models/Project.js';

export default {
  props: {
    project: { type: Project, required: true }
  },
  setup(props) {
    return {
      setActiveProject() {
        AppState.activeProject = props.project
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.project-card {
  --backgroundColor: rgb(255, 255, 255);

  background-color: var(--backgroundColor);
  margin-bottom: 2rem;

  .project-cover-img {
    max-width: 350px;
    max-height: 350px;
    object-fit: contain;
  }

  .project-artist {
    height: 60px;
    aspect-ratio: 1/1;
    object-fit: cover;

  }


}
</style>
