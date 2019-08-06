// 热门演出的组件
import React,{PureComponent} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import {loadRecommendDataAsync} from "../../actionCreator";
import { from } from "rxjs";
class HotRecommend extends PureComponent{
    render(){
        return (
            <HotBox></HotBox>
        )
    }
}
const HotBox=styled.div`
`
// 接口中的属性数据
const mapStateData=(state)=>{
  
}
// 定义接口中的方法
const mapDispatchData=(dispatch)=>{
    return{
        getRecommentData(){
            dispatch(loadRecommendDataAsync()) 
        }
    }
}
export default connect(mapStateData,mapDispatchData)(HotRecommend)