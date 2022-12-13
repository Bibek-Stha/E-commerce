<template>
  <div id="app">
    <div v-if="loading == true" class="spin">
      <flower-spinner :size="200" color="#C17A74" />
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FlowerSpinner } from "epic-spinners";

export default {
  components: {
    FlowerSpinner,
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters({
      loading: "GET_SPINNER",
    }),
  },
};
</script>

<style>
  .spin{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
