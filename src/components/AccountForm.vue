<template>
  <form class="card elevation-1" @submit.prevent="handleSubmit">

    <div class="card-body">
      <div class="form-floating mb-3">
        <input name="name" class="form-control" placeholder="Name" type="text" required v-model="editable.name">
        <label for="name">Name:</label>
      </div>
      <div class="form-floating mb-3">
        <input name="picture" class="form-control" placeholder="Profile Picture" type="url" required
          v-model="editable.picture">
        <label for="picture">Picture:</label>
      </div>
      <div class="form-floating mb-3">
        <input name="cover-img" class="form-control" placeholder="cover Image" type="url" required
          v-model="editable.coverImg">
        <label for="cover-img">Cover Image:</label>
      </div>
      <div class="form-floating mb-3">
        <input name="cover-img" class="form-control" placeholder="cover Image" type="url"  v-model="editable.socialPlatform">
        <label for="cover-img">Social:</label>
      </div>
    </div>
    <div class="card-footer text-end">
      <button class="btn btn-outline-primary" type="submit">Save Account</button>
    </div>


  </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
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
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error(error, '[Editing Account]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>
