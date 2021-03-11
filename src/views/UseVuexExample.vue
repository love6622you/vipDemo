<template>
  <div>Vuex Setting</div>
  <p>{{ fullName }} : {{ userEmail }}</p>
  <button @click="getUserFail">Fail</button>
  <button @click="getUserInfo">Fetch</button>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup(props) {
    const store = useStore();

    // state
    const userEmail = computed(() => store.state.profile.user?.email || 'noEmail');

    // getter
    const fullName = computed(() => store.getters['profile/fullName']);

    // commit mutation
    const getUserFail = () => {
      store.commit('profile/profileError');
    };

    // dispatch action
    const getUserInfo = () => {
      store.dispatch('profile/ActionsGetUserInfo');
    };

    onMounted(() => {
      console.log('---onMounted---');
    });

    return {
      getUserInfo,
      userEmail,
      getUserFail,
      fullName,
    };
  },
});
</script>

<style lang="scss" scoped></style>
