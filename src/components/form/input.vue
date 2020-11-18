<template>
  <div class="input-box">
    <input 
      :type="type" 
      :value="value" 
      :placeholder="placeholder" 
      :class="className" 
      @input="myValue" 
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    type: String,
    placeholder: String,
    className: String,
    size: String,
  },
  methods: {
    myValue($evt){
      this.$emit('input', $evt.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
