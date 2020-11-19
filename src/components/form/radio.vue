<template>
  <div class="radio-type">
    <input 
      type="radio" 
      :value="label" 
      :id="id" 
      :name="name" 
      v-model="radioButtonValue"
    />
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    label: String,
    value: String,
  },
  computed: {
    radioButtonValue: {
      get: function() {
        return this.value
      },
      set: function() {
        this.$emit("change", this.label)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .radio-type {
    position:relative;
    input {
      position:absolute;
      top:0;
      left:0;
      width:0;
      height:0;
      opacity:0;
    }
    label {
      display:block;
      padding: 8px 15px;
      color:#333;
      font-size:14px;
      border:none;
      background-color:#f5f5f5;
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 
        0 2px 2px 0 rgba(0,0,0,.14), 
        0 1px 5px 0 rgba(0,0,0,.12);
      cursor: pointer;
      text-align:center;
    }
    input:checked + label {
      color:#fff;
      background-color:#666;
    }
  }
</style>
