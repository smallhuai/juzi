import React, { Fragment } from 'react';
import City from "@/components/main/index/section/city"
import ClassifyHome from "@/components/main/index/section/ClassifyHome";
import HotsRecommend from "@/components/main/index/section/HotsRecommend";
import TourRecommed from "@/components/main/index/section/TourRecommed";
import GetFlowShow from "@/components/main/index/section/getFlowShow";
import HotTheater from "@/components/main/index/section/hotTheater";
// import styled from "styled-components";
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
                {/* 城市部分 */}
                <City />
                {/* classifyHome 首页分类部分  */}
                <ClassifyHome />
                {/* <Banner slide_list={this.props.indexTopData.get("slide_list")}></Banner> */}
                {/* 热门推介部分 */}
                <HotsRecommend />
                {/* 循环演唱部分TourRecommed */}
                <TourRecommed/>
                {/* 底部剧种展示部分 */}
                <GetFlowShow/>
                {/* 剧院演出列表部分 */}
                <HotTheater/>
            </Fragment>
        )
    }
    componentDidMount() {

    }
}
// const Indexdata = styled.div`
//     width:100%;
// `
export default Index;