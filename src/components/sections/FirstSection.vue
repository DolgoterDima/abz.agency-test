<template>
  <section class="first-section container">
    <div class="first-section__content">
      <h1 class="first-section__title">
        Test assignment for front-end developer
      </h1>
      <span class="first-section__subtitle">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </span>
      <router-link
        :to="{ path: `${$publicPath}`, hash: '#sign-up-section' }"
        class="first-section__button button"
      >
        Sign up
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "FirstSection",
};
</script>
