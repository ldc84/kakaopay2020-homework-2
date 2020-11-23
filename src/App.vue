<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/join">회원가입</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  html,
  body {
    margin:0;
    padding:0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 0.6rem 1rem 0;
    background-color:#ffdf00;
    text-align:left;
    a {
      position:relative;
      display:inline-block;
      height:30px;
      margin:0 5px;
      padding:0 10px;
      color: #222;
      font-size:14px;
      font-weight: bold;
      text-decoration: none;
      opacity: 0.6;
      &:after {
        content:'';
        position:absolute;
        bottom:0;
        left:50%;
        width:0;
        height:2px;
        background-color:#222;
        transition:all .3s ease-in-out;
      }
      &.router-link-exact-active {
        opacity: 1;
        &:after {
          left:0;
          width:100%;
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
