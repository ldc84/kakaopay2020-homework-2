<template>
  <div :class="`button ${className}`">
    <button type="button" @click="click">
      {{ text }}
    </button>
  </div>  
</template>

<script>
export default {
  props: {
    text: String,
    className: String,
  },
  methods: {
    click(){
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    display:inline-block;
    > button {
      height: 36px;
      padding: 8px 15px;
      color:#333;
      font-size:18px;
      border:none;
      background-color:#f5f5f5;
      border-radius: 4px;
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 
        0 2px 2px 0 rgba(0,0,0,.14), 
        0 1px 5px 0 rgba(0,0,0,.12);
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    &.floating {
      position:fixed; 
      bottom:10px;
      left:10px;
      right:10px;
      > button {
        display:block;
        width:100%;
      }
    }
  }
</style>
