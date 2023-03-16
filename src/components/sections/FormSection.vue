<template>
  <section class="form-section">
    <h2 class="form-section__title">Working with POST request</h2>

    <ValidationObserver tag="div" v-slot="{ invalid, validated }">
      <form class="form-section__form" @submit.prevent="onSubmit" ref="form">
        <ValidationProvider
          rules="name"
          v-slot="{ errors }"
          tag="div"
          class="form-section__input"
        >
          <UiInput
            class="form-section__input"
            label="Your name"
            v-model="form.name"
            :errors="errors"
            @input="(val) => (form.name = val)"
          />
        </ValidationProvider>

        <ValidationProvider
          rules="email"
          v-slot="{ errors }"
          tag="div"
          class="form-section__input"
        >
          <UiInput
            class="form-section__input"
            label="Email"
            v-model="form.email"
            :errors="errors"
            @input="(val) => (form.email = val)"
          />
        </ValidationProvider>

        <ValidationProvider
          rules="phone"
          v-slot="{ errors }"
          tag="div"
          class="form-section__input"
        >
          <UiInput
            class="form-section__input"
            label="Phone"
            v-model="form.phone"
            @input="(val) => (form.phone = val)"
            :errors="errors"
            helper-text="+38 (XXX) XXX - XX - XX"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          tag="div"
          class="form-section__input form-section__input--radio"
        >
          <span class="form-section__label"> Select your position </span>
          <UiRadio
            name="position"
            class="form-section__input"
            :data="positionsArr"
            @change="(val) => (form.position = val)"
          />
        </ValidationProvider>

        <button
          type="submit"
          :disabled="invalid || !validated"
          class="form-section__button button"
          :class="(invalid || !validated) && 'button--disabled'"
        >
          Sign up
        </button>
      </form>
    </ValidationObserver>
  </section>
</template>
<script>
import UiInput from "@/components/ui/UiInput.vue";
import UiRadio from "@/components/ui/UiRadio.vue";

export default {
  name: "FormSection",
  components: { UiInput, UiRadio },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        position: "",
        photo: "",
      },
      positionsArr: [],
    };
  },
  methods: {
    async fetchPositions() {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );
      const positionsInfo = await response.json();
      this.positionsArr = positionsInfo.positions;
    },
    onSubmit() {
      console.log(this.form);
    },
  },
  mounted() {
    this.fetchPositions();
  },
};
</script>
