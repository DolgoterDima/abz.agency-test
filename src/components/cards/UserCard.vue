<template>
  <article class="user-card">
    <img :src="photo" :alt="name" class="user-card__avatar" />
    <span class="user-card__name text-overflow" :content="name" v-tippy>{{
      name
    }}</span>
    <span
      class="user-card__position text-overflow"
      :content="position"
      v-tippy
      >{{ position }}</span
    >

    <a
      :href="`mailto:${email}`"
      :content="email"
      v-tippy
      class="user-card__email text-overflow"
    >
      {{ email }}
    </a>

    <a
      :href="`tel:${phone}`"
      :content="phone"
      v-tippy
      class="user-card__phone text-overflow"
    >
      {{ phone }}
    </a>
  </article>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
