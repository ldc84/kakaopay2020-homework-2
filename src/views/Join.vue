<template>
  <div id="join">
    <h2>회원가입</h2>
    <form class="join-form" action="">
      <Input type="text" placeholder="아이디" v-model="id" ref="id" />
      <Input type="password" placeholder="비밀번호" v-model="password" />
      <Button text="가입하기" className="floating" @click.native="onRequest" />
    </form>
  </div>
</template>
<script>
import Input from '~@/form/input';
import Button from '~@/form/button';

export default {
  components: {
    Input,
    Button
  },
  data(){
    return{
      id: '',
      password: '',
    }
  },
  methods: {
    onRequest(){
      // validation check
      if(this.id === ''){
        alert('아이디를 입력해주세요!');
        return
      }else if(this.password === ''){
        alert('비밀번호를 입력해주세요!');
        return
      }
      alert('회원가입이 완료되었습니다.');
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
