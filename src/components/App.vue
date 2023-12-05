

<template>
  <div class="container">
    <!-- <HelloWorld/>
    <myCanvas/>
    <table/> -->
    <el-button type="primary" @click="gotoEda2">Primary</el-button>
  </div>
</template>

<script setup>
// import HelloWorld from './components/swiper.vue'
// import myCanvas from './components/myCanvas.vue'
// import table from './components/table.vue'

const setCookie = (name, value, days) => {
 
 var domain, domainParts, date, expires, host;
 // 设置过期时间 格林威治时间 (GMT)
 if (days) {
     date = new Date();
     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
     expires = "; expires=" + date.toGMTString();
 } else {
     expires = "";
 }

 // 获取域名
 host = location.host;
 if (host.split('.').length === 1) {
     document.cookie = name + "=" + value + expires + "; path=/; domain=." + host;
 } else {
     domainParts = host.split('.');
     domainParts.shift();
     domain = '.' + domainParts.join('.');
     document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
     if (getCookie(name) == null || getCookie(name) != value) {
         domain = '.' + host;
         document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
     }
 }
}

const getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
        return unescape(arr[2])
    else
        return null
}


const gotoEda2 = ()=>{
  console.log('111111111111111')
  // document.cookie="username123=John Doeasssssssss;domian=.eda2.com;expires=Sat";
  setCookie('username123', 'abcdefrghu123', 8)
  window.location.href = 'https://www.eda2.com/reviseUserInfo?client=123'
}

</script>

<style scoped>
.container{
  /* background: #000; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

