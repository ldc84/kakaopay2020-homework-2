<template>
  <div class="switch-box">
    <input 
      type="checkbox"
      :id="id" 
      :checked="checked"
      @change="changeSwitch"
    />
    <label :for="id">
      {{ checked }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    checked: Boolean
  },
  methods: {
    changeSwitch($evt){
      this.$emit('change', !$evt.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .switch-box {
    position:relative;
    input {
      position:absolute;
      top:0;
      left:0;
      width:0;
      height:0;
      opacity:0;
      z-index: 2;
    }
    label {
      position:relative;
      display:block;
      width:68px;
      height:32px;
      color:#333;
      border:1px solid #ccc;
      background-color:#f5f5f5;
      border-radius:20px;
      text-align:center;
      text-indent:-99999px;
      cursor: pointer;
      transition:all .2s ease-in-out;
      &:after {
        content:'';
        position:absolute;
        top:0;
        left:-1px;
        display:block;
        width:30px;
        height:30px;
        border:1px solid #ccc;
        background-color:#fff;
        border-radius:50%;
        transition:all .2s ease-in-out;
      }
    }
    input:checked + label {
      background-color:#4caf50;
      &:after {
        left:calc(100% - 31px);
      }
    }
  }
</style>
