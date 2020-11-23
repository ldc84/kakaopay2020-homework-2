<template>
  <div id="home">
    
    <h1>카카오페이</h1>
    <p>사내 시스템 개발을 위한 UI 컴포넌트 개발</p>
    <Button text="회원가입으로 가기" className="block btn-sm" @click="$router.push('/join')" />
  </div>
</template>

<script>
import Button from '~@/form/button';
export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
  #home {
    padding:30px;
  }
</style>
