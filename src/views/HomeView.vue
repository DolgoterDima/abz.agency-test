<template>
  <div class="home-page">
    <FirstSection />

    <UserSection />

    <FormSection />
  </div>
</template>

<script>
import UserSection from "@/components/sections/UserSection.vue";
import FormSection from "@/components/sections/FormSection.vue";
import FirstSection from "@/components/sections/FirstSection.vue";
export default {
  name: "HomeView",
  components: {
    FirstSection,
    FormSection,
    UserSection,
  },
};
</script>
