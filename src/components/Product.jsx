import React from 'react'
import {Link,routerRedux,withRouter} from 'dva/router'
import {productUpdateList,productUpdateListAsync,productUpdateListHttp} from '../actions/index';
import {
    getProductApi,
    getUserApi,
    getPostApi
} from '../services/example';
class Product extends React.Component{
    clickProductList = (event)=>{
        const currentProduct = {name:'玉米1'}
        this.props.dispatch({
            type:"product/updateList",  // 第一种无副作用的写法
            payload:currentProduct
        })
    }
    clickAsyncProductList = ()=>{ // 第二种副作用的写法
        const currentProduct = {name:'玉米Async'}
        // this.props.dispatch({
        //     type:"product/updateListAsync",
        //     payload:currentProduct
        // })  
        this.props.dispatch(productUpdateList(currentProduct))  

    }
    clickHttpProductList = ()=>{
        this.props.dispatch({
            type:"product/updateListHttp",
            payload:{
                id:1001
            }
        }) 
    }
    clickGotoHandler = () =>{
        this.props.history.push('/');
    }
    clickGotoReduxHandler = ()=>{
        this.props.dispatch(routerRedux.push("/"))
    }
    componentDidMount(){
        getProductApi({
            product:'高粱'
        }).then((res)=>{
            console.log(1111111111111, res);
        })
        getUserApi({name:'yanyanshan'}).then((res)=>{
            console.log(1111111111111, res);
        })
        getPostApi().then((res)=>{
            console.log(444444444, res);
        })
    }
    render(){
        const {productList, dispatch} = this.props
        return(
            <div>
                
                Produc商品：{this.props.title}
                <ul>
                    {
                        productList.map((element,index) =>{
                            return <li key={index}>{element.name}</li>

                        })
                    }

                </ul>
                <button onClick={this.clickProductList}>添加商品列表</button>
                <button onClick={this.clickGotoHandler}>去首页</button>
                <button onClick={this.clickGotoReduxHandler}>redux去首页</button>
                <button onClick={this.clickAsyncProductList}>Async添加商品列表</button>
                <button onClick={this.clickHttpProductList}>Http添加商品列表</button>
                <Link to='/'>去首页</Link>
            </div>
        )
    }

}
export default withRouter(Product)