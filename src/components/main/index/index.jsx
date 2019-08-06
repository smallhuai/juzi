import React, { Fragment } from 'react';
import City from "@/components/main/index/section/city"
import ClassifyHome from "@/components/main/index/section/ClassifyHome";
import styled from "styled-components";
// import { City, Banner, OperaClassfy,TabBarExample } from "@/components/main/index/section"
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
                {/* 剧种分类部分 */}
                {/* <OperaClassfy classify_list={this.props.indexTopData.get("classify_list")} /> */}
                {/* 底部导航部分 */}
                {/* <TabBarExample bottom_list={this.props.indexTopData.get("bottom_list")} /> */}
            </Fragment>
        )
    }
    componentDidMount() {

    }
}
const Indexdata = styled.div`
    width:100%;
`
export default Index;