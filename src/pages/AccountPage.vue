<template>
  <div class="about text-center account-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card account-card">
            <div class="card-body">
              <p class="text-center">
                <img class="rounded-circle account-picture" :src="account.picture" :alt="account.name">
              </p>
              <p> <i class="mdi mdi-account"></i> Name: <b>{{ account.name }}</b></p>
              <!-- NOTE keep it simple silly (KISS) -->
              <p v-if="account.socialPlatform"> <i class="mdi mdi-social-distance-6-feet"></i> Social: <b>{{
                account.socialPlatform }}</b></p>
            </div>
          </div>
        </div>
        <div class="col-md-9">

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
      account: computed(() => AppState.account),
      coverImg: computed(() => `url(${AppState.account?.coverImg})`)

    }
  }
}
</script>

<style scoped lang="scss">
.account-page {


  .account-card{
    background-image: v-bind(coverImg);
  }

  .account-picture {
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

}
</style>
