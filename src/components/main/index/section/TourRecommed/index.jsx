// 循环演出的组件部分
import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { loadTourRecommendDataAsync } from "@/components/main/index/actionCreator";
import { Tourslipe } from "./tour";
import styled from "styled-components";
import global from "@/core/global";
let r = global.r;
class TourRecommed extends PureComponent {
    render() {
        return (
            <Fragment>
                {this.props.tourList && this.props.tourList.size !== 0 ? <TourBox>
                    <div className={'sing'}>巡回演唱</div> <Tourslipe tourList={this.props.tourList.toJS()} /></TourBox> : null}
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getTourData.bind(this)(this.props.currentCity)
    }
    componentWillReceiveProps(props) {
        if (props.currentCity.name !== this.props.currentCity.name) {
            this.props.getTourData.bind(this)(props.currentCity)
        }
    }
}
// 接口中的属性
const mapStateData = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        tourList: state.getIn(["indexReducer", "tourRecommendData", "tour_show_list"])
    }
}
// 接口中的方法
const mapDispatchData = (dispatch) => {
    return {
        getTourData(currentCity) {
            dispatch(loadTourRecommendDataAsync(dispatch, currentCity))
        }
    }
}
// 循环演唱的组件的样式
const TourBox = styled.div`
    width:${r(375)};
    margin:0 auto;
    overflow:hidden;
    .sing{
        padding:0 ${r(20)};
        height:${r(60)};
        line-height:${r(60)};
        font-size:${r(20)};
        font-weight:700;
    }
`
export default connect(mapStateData, mapDispatchData)(TourRecommed);