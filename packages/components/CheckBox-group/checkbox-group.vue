<template>
  <div class="fool-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "foolCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this
    };
  },
  props: {
    value: {
      type: Array
    }
  }
};
</script>
