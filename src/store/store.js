import Vue from "vue";
import Vuex from "vuex"; /// plug in 다운받은 vuex를 불러와서 플러그인해줌

Vue.use(Vuex); /// connecting by Vuex plug-in
/* 1.Vuex 사용 선언, 플러그인 사용, 뷰를 사용하는 모든 곳에 특정기능을 전역으로 뿌려줌 = global functionality, store.js 를 어느곳에서나 이기능 사용가능 */
/*main.js 랑 연결하여 사용 */

// 하기의 storage는 스크립트에 표시될 storage로 dogInfo를 받아줘서 웹에 for로 돌려서 사용할 수 있게 끔 보여준다.
const storage = {
  fetch() {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) != "loglevel:webpack-dev-server") {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  }
};

export default new Vuex.Store({
  /// Centeralized data store which can be accessed by all components in an app.
  state: {
    dogInfo: storage.fetch(),
    puppies: [
      {
        id: 0,
        name: "Pinky",
        breed: "Mix",
        Age: "0.5",
        description: "lovely"
      }
    ]
  },
  mutations: {
    /// mutations를 쓰는 이유는 상태의 변형 or 이벤트가 일어날때마다 상태체크하면서 기록& 편집함 store 디버깅을 할때 전체적으로 파악하기 쉬움
    /// 각개의 컴포넌트에서 methods 프로퍼티를 쓰지 않고 store 에서 mutations 프로퍼티에서 모든 정보의 상태체크와 변화체크를 하기 위함
    addNumber(state, newCount) {
      if (!newCount) {
        state.count++;
      } else {
        state.count += newCount;
      }
    },
    onUpload(
      state,
      newName,
      inputAge,
      inputBreed,
      inputDescription,
      selectedFile
    ) {
      if (newName != "") {
        const obj = {
          name: newName,
          breed: inputBreed,
          age: inputAge,
          desc: inputDescription,
          file: selectedFile // 객체화 해야함
        };
        localStorage.setItem(newName, JSON.stringify(obj)); // key, value로 로컬스토리지에 들어감
        return state.dogInfo.push(obj);
      }
    }
  },
  getters: {
    /// getter을 쓰는이유: store에 있는 정보를 이용하여 응용한 정보들을 밖으로 내보낼건데 많은 컴포넌트에 복붙하지 않고 여기서 쏴줌..
    /// 각개 컴포넌트의 computed 에서 getter 를 받아 변형된 정보를 받아옴
    storeddogInfo(state) {
      return state.dogInfo;
    },
    count(state) {
      return state.count;
    },
    gettinginfo: state => {
      return state.puppies; /// Home.vue 내용연결
    },
    getSingleDoggy(state) {
      return function(id) {
        return state.puppies.find(puppy => puppy.id === parseInt(id));
      }; /// DogItem.vue 내용연결
    }
  },
  actions: {
    /// communicate with servers
    /// 디스패치의 경우 액션이 일어날 경우에 타임셋팅에 따라 상태를 계속 기록
    // addNumber(context, newCount) {
    //   context.commit("addNumber", newCount);
  } /// 첫번째 파라미터는 액션이름 addNumber, 두번째 파라미터는 addNumber의 파라미터
});
