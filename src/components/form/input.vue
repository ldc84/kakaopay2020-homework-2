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
  .input-box {
    input {
      width:100%;
      height:32px;
      line-height:30px;
      padding:0 10px;
      border:1px solid #ccc;
      background-color:#fff;
      box-sizing: border-box;
    }
  }
</style>
