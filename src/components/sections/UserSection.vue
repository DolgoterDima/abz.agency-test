<template>
  <section class="users-section" id="users-section">
    <h2 class="users-section__title">Working with GET request</h2>
    <div class="users-section__users">
      <UserCard
        v-if="getUsers"
        class="users-section__user"
        v-for="(user, index) in getUsers"
        :key="index"
        v-bind="user"
      />
      <span v-else>No users</span>
    </div>
    <button
      v-if="currentPage !== getUsersTotalPages"
      type="button"
      class="button users-section__button"
      @click="fetchUsers"
    >
      Show more
    </button>
  </section>
</template>
<script>
import UserCard from "@/components/cards/UserCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UserSection",
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters("users", ["getUsers", "getUsersTotalPages"]),
  },
  methods: {
    ...mapActions("users", ["fetchUsersAction"]),

    fetchUsers() {
      this.currentPage++;
      this.fetchUsersAction(this.currentPage);
    },
  },
  components: {
    UserCard,
  },
  mounted() {
    this.fetchUsersAction(this.currentPage);
  },
};
</script>
