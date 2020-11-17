<template>
  <div id="join">
    <h2>회원가입</h2>
    <form class="join-form" action="">
      <Input type="text" placeholder="아이디" v-model="id" />
      <Input type="password" placeholder="비밀번호" v-model="password" />
    </form>
  </div>
</template>
<script>
import Input from '~@/form/input';

export default {
  components: {
    Input,
  },
  data(){
    return{
      id: '',
      password: '',
    }
  }
}
</script>


<style lang="scss" scoped>
  #join {
    h2 {

    }
    .join-form {
      
    }
  }
</style>
