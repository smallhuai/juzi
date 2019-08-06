import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux"
import { loadIndexData } from "@/components/main/index/actionCreator";
import { Banner } from "./banner";
import { OperaClassfy } from "./oparaClassfy";
import { Adlist } from "./ad_list";
import { OparaCart } from "./operationCard"
class ClassifyHome extends PureComponent {
    render() {
        return (
            <Fragment>
                {/* 轮播组件 Banner*/}
                {this.props.indexTopData.get("slide_list") && this.props.indexTopData.get("slide_list").size ? <Banner slide_list={this.props.indexTopData.get("slide_list")} /> : null}
                {/* 戏种分类 OperaClassfy*/}
                <OperaClassfy classify_list={this.props.indexTopData.get("classify_list")} />
                {/* 广告部分 */}
                <Adlist ad_list={this.props.indexTopData.get("ad_list")} />
                {/* vip OparaCart部分 */}
                <OparaCart operation_list={this.props.indexTopData.get("operation_list")} />
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getClassifyHomeData.bind(this)(this.props.currentCity);
    }
    // 监听城市的变化的时候,就将变化后的城市信息传入接口当中
    componentWillReceiveProps(props) {
        if (props.currentCity.get("name") !== this.props.currentCity.get("name")) {
            this.props.getClassifyHomeData.bind(this)(props.currentCity);
        }
    }
}
// 定义属性
const mapStatedata = (state) => {
    return {
        indexTopData: state.getIn(["indexReducer", "indexTopData"]),
        currentCity: state.getIn(["indexReducer", "currentCity"]),
    }
}
const mapDispatchdata = (dispatch) => ({
    getClassifyHomeData(currentCity) {
        let targetcity = currentCity.toJS()
        dispatch(loadIndexData(dispatch, targetcity))
    }
})
export default connect(mapStatedata, mapDispatchdata)(ClassifyHome)
