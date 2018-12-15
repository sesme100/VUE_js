// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// vmfhwprxmdml Base 파일이며 전역설정을 하려면 main.js를 수정하면 됨
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
/* npm install vue-router --save 이렇게 다운받음.. 
그래서 라우터 파일안에 index.js자동생성됨  라우터 기본설정은 이파일에 자동으로 생성
라우팅된 내용은 index.js에 저장됨*/
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
