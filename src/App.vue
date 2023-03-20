<template>
  <div id="app" class="layout">
    <CHeader />
    <main class="main layout__main">

      <router-view />

    </main>
    <footer class="footer layout__footer"></footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import CHeader from "@/components/CHeader.vue";

export default {
  name: "App",
  components: {
    CHeader,
  },
  methods: {
    ...mapActions(["fetchToken"]),
  },
  mounted() {
    this.fetchToken();
  },
};
</script>
