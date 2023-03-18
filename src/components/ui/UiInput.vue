<template>
  <div class="ui-input" :class="{ 'ui-input--error': !!errors?.length }">
    <input
      :id="idFromLabel"
      type="text"
      :value="value"
      @input="onInput"
      @focus="isInputInFocus(true)"
      @blur="isInputInFocus(false)"
      class="ui-input__input"
    />
    <label
      :for="idFromLabel"
      class="ui-input__label"
      :class="{ 'ui-input__label--active': isLabelActive }"
    >
      {{ label }}
    </label>

    <div class="ui-input__text">
      <span v-if="!!errors.length" v-text="errors[0]"> </span>
      <span v-else v-text="helperText"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiInput",
  data() {
    return {
      inputOnFocus: false,
    };
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    helperText: {
      type: String,
      default: "",
    },

    errors: {
      type: Array,
      default: [],
    },
  },
  computed: {
    isLabelActive() {
      return !!this.value.length || this.inputOnFocus;
    },

    idFromLabel() {
      return this.label.replaceAll(" ", "_").toLowerCase();
    },
  },
  methods: {
    isInputInFocus(status = false) {
      this.inputOnFocus = status;
    },
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped></style>
