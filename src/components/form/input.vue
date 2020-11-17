<template>
  <div class="input-box">
    <input :type="type" :placeholder="placeholder" :class="className" />
  </div>  
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    className: String,
    size: String,
  }
}
</script>

<style lang="scss" scoped>
  
</style>
