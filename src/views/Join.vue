<template>
  <div id="join">
    <h2>회원가입</h2>
    <form class="join-form" action="">
      <div class="form-control-box">
        <Input type="text" placeholder="아이디" v-model="id" />
      </div>
      <div class="form-control-box">
        <Input type="password" placeholder="비밀번호" v-model="password" />
      </div>
      <div class="form-control-box radio-flex">
        <Radio name="sex" id="sexMale" label="남자" v-model="selectedSex" @change="onChangeSex" />
        <Radio name="sex" id="sexfemale" label="여자" v-model="selectedSex" @change="onChangeSex" />
      </div>
      <Button text="가입하기" className="floating" @click.native="onRequest" />
    </form>
  </div>
</template>
<script>
import Input from '~@/form/input';
import Radio from '~@/form/radio';
import Button from '~@/form/button';

export default {
  components: {
    Input,
    Button,
    Radio
  },
  data(){
    return{
      id: '',
      password: '',
      selectedSex: '남자'
    }
  },
  methods: {
    onChangeSex(newValue){
      this.selectedSex = newValue;
    },
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
      .form-control-box {
        margin-top:10px;
        &.radio-flex {
          display:flex;
          width:100%;
          margin-top:20px;
          > div {
            width:50%;
          }
        }
      }
    }
  }
</style>
