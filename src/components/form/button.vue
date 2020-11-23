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
      height: 46px;
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
      &:active {
        background-color:#999;
      }
    }
    &.block {
      > button {
        display:block;
        width:100%;
      }
    }
    &.btn-sm {
      > button {
        height:32px;
        padding-top:4px;
        padding-bottom:4px;
        font-size:14px;
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
