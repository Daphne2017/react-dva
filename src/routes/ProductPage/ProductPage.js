import React from "react"
import Product from "../../components/Product"
import { connect } from 'dva'
class IndexPage extends React.Component{
    render(){
        console.log("this.props",this.props);
        const {productList , dispatch, history} = this.props
        return (
            <div>
                <Product title='商品类型' productList={productList} dispatch={dispatch}></Product >
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        productList: state.product.productList
    }
}
export default connect(mapStateToProps)(IndexPage)