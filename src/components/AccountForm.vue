<template>
  <form @submit.prevent="handleSubmit">


    <!-- <input type="text" required v-model="editable.name">
    <input type="text" required v-model="editable.picture">
    <input type="text" required v-model="editable.coverImg"> -->



  </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })


    return {
      editable,
      async handleSubmit() {
        try {

        } catch (error) {
          Pop.error(error, '[Editing Account]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>
