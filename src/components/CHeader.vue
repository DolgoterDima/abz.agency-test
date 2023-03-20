<template>
  <header class="header layout__header">
    <div class="header__container container">
      <router-link to="/" class="header__logo-link">
        <img src="@/assets/images/logo.svg" class="header__logo" alt="logo" />
      </router-link>
      <nav class="header__nav nav">
        <router-link
          :to="{ path: '/', hash: '#users-section' }"
          class="nav__link button"
          >Users</router-link
        >

        <router-link
          :to="{ path: '/', hash: '#sign-up-section' }"
          class="nav__link button nav__link--offset"
        >
          Sign up
        </router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "CHeader",
};
</script>
