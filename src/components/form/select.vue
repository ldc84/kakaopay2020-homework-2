<template>
  <div class="select-box">
    <select 
      v-model="value" 
      @input="myValue" 
    >
      <option disabled value="">선택</option>
      <option 
        v-for="(item, index) in items" 
        :key="index" 
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    items: Array,
  },
  methods: {
    myValue($evt){
      console.log('test')
      this.$emit('input', $evt.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-box {
    select {
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
