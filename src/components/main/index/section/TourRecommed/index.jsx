// 循环演出的组件部分
import React,{PureComponent} from "react";
class TourRecommed extends React.PureComponent{
    render(){
        return (
            <div></div>
        )
    }
}
// 接口中的属性
const mapStateData=(state)=>{
    return{

    }
}
// 接口中的方法
const mapDispatchData=(dispatch)=>{
    return{
        getTourData(currentCity){
            dispatch(loadTourRecommendDataAsync(currentCity))
        }
    }
}
export default TourRecommed;