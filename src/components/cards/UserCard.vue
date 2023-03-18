<template>
  <article class="user-card">
    <img
      :src="photo"
      width="70"
      height="70"
      :alt="name"
      class="user-card__avatar"
      loading="lazy"
    />
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
      default: "Name",
    },
    phone: {
      type: String,
      default: "+380666666666",
    },
    email: {
      type: String,
      default: "asdasdasd@gmail.com",
    },
    position: {
      type: String,
      default: "1",
    },
    photo: {
      type: String,
      default: "@/assets/images/photo-cover.svg",
    },
  },
};
</script>
