<template>
  <div class="ui-radio">
    <div class="ui-radio__item" v-for="item in data">
      <input
        :id="idFromLabel(item.name)"
        type="radio"
        @change="onChange"
        class="ui-radio__input"
        :value="item.id"
        :checked="item.id === 1"
        :name="name"
      />
      <label :for="idFromLabel(item.name)" class="ui-radio__label">
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiRadio",
  data() {
    return {
      inputOnFocus: false,
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    data: {
      type: Array,
      default: "",
    },
  },

  computed: {},
  methods: {
    idFromLabel(text) {
      return text.replaceAll(" ", "_").toLowerCase();
    },
    onChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style scoped></style>
