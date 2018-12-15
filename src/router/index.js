import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Dogs from "@/components/Dogs.vue";
import Locations from '@/components/Locations.vue';
import Contact from '@/components/Contact.vue';
import DogItem from '@/components/DogItem.vue'; ///@은 특정디렉토리인 src를 뜻한다
import DogNew from '@/components/DogNew.vue'; ///@은 특정디렉토리인 src를 뜻한다

/// router index.js 에서는 서버사이드에서 제공하는 라우팅을 사용하지 않아도 라우팅을 할수 있도록 도와주는 Vue router임.
/// 페이지를 서버에 요청하지 않아도 새로운 페이지로 이동할 수 있음.

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/Dogs",
      component: Dogs
    },
    {
      path: '/Locations',
      component: Locations
    },
    {
      path: '/Contact',
      component: Contact
    },
    {
      path: '/Dogs/new',
      component: DogNew
    },
    {
      path: '/Dogs/:dogId',
      component: DogItem
    }
  ] ///Route Parameters : In the :dogId component, detect route parameter and handle it 
  ///and make http request for correct resource
});
