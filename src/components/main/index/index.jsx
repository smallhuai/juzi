import React, { Fragment } from 'react';
import { connect } from "react-redux";
import City from "@/components/main/index/section/city"
import ClassifyHome from "@/components/main/index/section/ClassifyHome";
import HotsRecommend from "@/components/main/index/section/HotsRecommend";
import TourRecommed from "@/components/main/index/section/TourRecommed";
import GetFlowShow from "@/components/main/index/section/getFlowShow";
import HotTheater from "@/components/main/index/section/hotTheater";
import PullRefresh from "@/components/main/index/section/Pullrefresh";
import { TopNav } from "./section/styled";
import FoorNav from "@/components/main/index/section/ClassifyHome/footNav";
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            isCity: false
        }
    }
    render() {
        return (
            <Fragment>
                {/* 顶部城市部分 输入框和图片 */}
                <TopNav>
                    <City />
                    <input type="text" placeholder={'热门搜搜'}/>
                    <div className={'pic'}><img src={'https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png'} alt="" /></div>
                </TopNav>
                {/* classifyHome 首页分类部分  */}
                <PullRefresh>
                    <ClassifyHome />
                    {/* 热门推介部分 */}
                    <HotsRecommend />
                    {/* 循环演唱部分TourRecommed */}
                    <TourRecommed />
                    {/* 底部剧种展示部分 */}
                    <GetFlowShow />
                    {/* 剧院演出列表部分 */}
                    <HotTheater />
                    {/* 下拉更新部分 */}
                </PullRefresh>
                {/* 底部导航  */}
                {/* {this.props.bottomList && this.props.bottomList !== 0 ? < FoorNav bottomList={this.props.bottomList} /> : null} */}
            </Fragment>
        )
    }
    componentDidMount() {

    }
}

const mapStateData = (state) => {
    return {
        bottomList: state.getIn(["indexReducer", "indexTopData", "bottom_list"])
    }
}
const mapDispatchData = (dispatch) => {
    return {

    }
}
export default connect(mapStateData, mapDispatchData)(Index);