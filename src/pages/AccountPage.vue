<template>
  <div class="about text-center account-page">
    <div class="container-fluid my-2">
      <div class="row">
        <div class="col-md-3">

          <ProfileCard :profile="account" />

        </div>
        <div class="col-md-6 m-auto">

          <AccountForm />


        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang="scss">
.account-page {

}
</style>
