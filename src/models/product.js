

import {
  getProductApi,
  getUserApi,
  getPostApi
} from '../services/example';
export default {

  namespace: 'product',

  state: {
    productList:[
      {name:'豆子'},
      {name:'玉米'},
    ] // 可以设置一些初始化的数据
  },
  reducers:{
    updateList(state,action){
      let currentProduct = deepClone(state);
      currentProduct.productList.push(action.payload)
      return currentProduct // state会被覆盖和更新


    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *updateListAsync({payload},{call,put}){  // 直接写，并没有实现真正的异步
      console.log('payload',payload);
      yield put({
        type:'updateList',
        payload,
      })
    },
    *updateListHttp({payload},{call,put}){
      // 网络请求
      const result = yield call(getProductApi,payload)
      const data = result.data
      console.log('updateListHttp',data);
      if(data){
        yield put({
          type:'updateList',
          payload:data,
        })
      }
    }

  },
  subscriptions: { // 可以看做是一个监听的操作，只要发生任何的事件操作，在这里都可以被监听到,里边的函数名称起什么名字其实不重要,都会执行
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('随便打印一些东西，看看有没有触发');
      window.onresize = ()=>{
        // const currentProduct = {name:'玉米Async'}
          // dispatch({
          //   type:"product/updateList",
          //   payload:currentProduct
          // })  
      }
    },
    hello({ispatch, history}) {
      console.log('hellohello');

    },
    setupHistory({ispatch, history}) {
      console.log('setupHistory');
      history.listen((location) =>{
        console.log('location',location);
      })

    }
  },
};
function deepClone(arr){
  let _obj = JSON.stringify(arr),
      objClone = JSON.parse(_obj);
  return objClone;

}