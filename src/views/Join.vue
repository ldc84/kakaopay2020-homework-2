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
      <div class="form-control-box radio-flex mt-20">
        <Radio name="sex" id="sexMale" label="남자" v-model="selectedSex" @change="onChangeSex" />
        <Radio name="sex" id="sexfemale" label="여자" v-model="selectedSex" @change="onChangeSex" />
      </div>
      <div class="form-control-box select-flex mt-20">
        <span>생일</span>
        <div class="sel-group-1">
          <SelcetBox v-model="selectedBirth.selectedYear" :items="selectedBirth.years" />
          <SelcetBox v-model="selectedBirth.selectedMonth" :items="selectedBirth.months" />
          <SelcetBox v-model="selectedBirth.selectedDay" :items="selectedBirth.days" />
        </div>
      </div>
      <div class="form-control-box select-flex">
        <span>전화</span>
        <div class="sel-group-2">
          <SelcetBox v-model="selectedTel.selected" :items="selectedTel.numbers" />
          <Input type="text" v-model="selectedTel.otherNumber" />
          <Button text="인증" className="block btn-sm" @click.native="onPhoneConfirm" />
        </div>
      </div>
      <div class="form-control-box select-flex" v-if="selectedTel.confirm">
        <span></span>
        <div class="sel-group-3">
          <Input type="text" placeholder="인증번호" v-model="selectedTel.confirmNum" />
          <Button text="확인" className="block btn-sm" @click.native="onPhoneConfirmResult" />
        </div>
      </div>
      <div class="form-control-box check-flex mt-20">
        <span>모든 약관 내용에 동의 합니다.</span>
        <div>
          <SwitchBox id="agree" :checked="agree" v-model="agree" @change="onChangeAgree" />
        </div>
      </div>
      <Button text="가입하기" className="floating" @click.native="onRequest" />
    </form>
  </div>
</template>
<script>
import Input from '~@/form/input';
import Radio from '~@/form/radio';
import Button from '~@/form/button';
import SelcetBox from '~@/form/select';
import SwitchBox from '~@/form/switch';

export default {
  components: {
    Input,
    Button,
    Radio,
    SelcetBox,
    SwitchBox
  },
  data(){
    return{
      id: '',
      password: '',
      selectedSex: '남자',
      selectedBirth: {
        selectedYear: '',
        years: ['2000년', '1999년', '1998년', '1997년', '1996년', '1995년', '1994년', '1993년', '1992년', '1991년', '1990년', '1989년', '1988년', '1987년', '1986년', '1985년', '1984년', '1983년', '1982년', '1981년', '1980년', '1979년', '1978년', '1977년', '1976년', '1975년', '1974년', '1973년', '1972년', '1971년', '1970년'],
        selectedMonth: '',
        months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        selectedDay: '',
        days: ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일']
      },
      selectedTel: {
        selected: '',
        numbers: ['010', '011', '017', '018', '019'],
        otherNumber: '',
        confirm:false,
        confirmNum:''
      },
      agree: true
    }
  },
  methods: {
    onChangeSex(newValue){
      this.selectedSex = newValue;
    },
    onChangeAgree(val){
      this.agree = !this.agree;
    },
    onPhoneConfirm(){
      if(this.selectedTel.selected === ''){
        alert('전화 앞자리를 선택 해주세요!');
        return
      }else if(this.selectedTel.otherNumber === ''){
        alert('전화 번호를 입력 해주세요!');
        return
      }else {
        this.selectedTel.confirm = true;
        alert('전화 번호로 전송된 인증번호를 입력해주세요');
      }
    },
    onPhoneConfirmResult(){
      this.selectedTel.confirmNum ? alert('확인이 완료 되었습니다.') : alert('인증번호를 입력해주세요.');
    },
    onRequest(){
      // validation check
      if(this.id === ''){
        alert('아이디를 입력 해주세요!');
        return
      }else if(this.password === ''){
        alert('비밀번호를 입력 해주세요!');
        return
      }else if(this.selectedBirth.selectedYear === ''){
        alert('생일 연도를 선택 해주세요!');
        return
      }else if(this.selectedBirth.selectedMonth === ''){
        alert('생일 월을 선택 해주세요!');
        return
      }else if(this.selectedBirth.selectedDay === ''){
        alert('생일 일을 선택 해주세요!');
        return
      }else if(this.selectedTel.selected === ''){
        alert('전화 앞자리를 선택 해주세요!');
        return
      }else if(this.selectedTel.otherNumber === ''){
        alert('전화 번호를 입력 해주세요!');
        return
      }else if(!this.agree){
        alert('약관에 동의 해주세요!');
        return
      }
      alert('회원가입이 완료되었습니다.');
    }
  }
}
</script>


<style lang="scss" scoped>
  #join {
    padding:1rem;
    h2 {
      text-align:left;
    }
    .mt-20 {
      margin-top:20px !important;
    }
    .join-form {
      .form-control-box {
        margin-top:10px;
        &.radio-flex {
          display:flex;
          width:100%;
          > div {
            width:50%;
          }
        }
        &.select-flex {
          display:flex;
          justify-content: space-between;
          align-items: center;
          width:100%;
          > span {
            width:16%;
            color:#222;
            font-size:14px;
            text-align:left;
          }
          .sel-group-1 {
            display:flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            > .select-box {
              width:30%;
              &:first-child {
                width:36%;
              }
            }
          }
          .sel-group-2 {
            display:flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            .select-box {
              width:30%;
            }
            .input-box {
              width:46%;
            }
            .button {
              width:20%;
            }
          }
          .sel-group-3 {
            display:flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            .input-box {
              width:78%;
            }
            .button {
              width:20%;
            }
          }
        }
        &.check-flex {
          display:flex;
          justify-content: space-between;
          align-items: center;
          width:100%;
          > span {
            width:80%;
            color:#222;
            font-size:16px;
            text-align:center;
          }
        }
      }
    }
  }
</style>
