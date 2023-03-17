<template>
  <div class="ui-file" :class="{ 'ui-file--error': !!errors?.length }">
    <input
      ref="fileInput"
      type="file"
      @change="onFileInputChange"
      class="ui-file__input"
    />

    <div
      class="ui-file__drop-zone"
      @dragover.prevent="onDragOver"
      @dragleave="onDragLeave"
      @drop="onFileDrop"
      @click="onDropZoneClick"
      :class="{ 'ui-file__drop-zone--active': isDragging }"
    >
      <span class="ui-file__button"> Upload </span>
      <div class="ui-file__field">
        <span v-if="!file">Upload your photo</span>
        <span class="ui-file__file-name" v-else>{{ file.name }}</span>
      </div>
    </div>
    <div class="ui-file__text">
      <span v-if="!!errors.length" v-text="errors[0]"> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiFile",
  data() {
    return {
      file: null,
      isDragging: false,
    };
  },
  props: {
    errors: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onDropZoneClick() {
      this.$refs.fileInput.click();
    },
    onFileInputChange(event) {
      const file = event.target.files[0];
      this.file = file;
      this.$emit("file-uploaded", file);
    },
    onFileDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      this.file = file;
      this.isDragging = false;
      this.$emit("file-uploaded", file);
    },
    onDragOver(event) {
      event.preventDefault();
      this.isDragging = true;
    },
    onDragLeave(event) {
      this.isDragging = false;
    },
  },
};
</script>
