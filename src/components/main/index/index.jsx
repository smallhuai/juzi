import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { loadCityDataAsync, loadIndexData } from "./actionCreator"
import { City, Banner, OperaClassfy,TabBarExample } from "@/components/main/index/section"
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            isCity: false
        }
    }
    render() {
        console.log(this.props.indexTopData.toJS());
        console.log(this.props.indexTopData.get("bottom_list"));
        return (
            <Fragment>
                {/* 城市部分 */}
                <City isCity={this.state.isCity} currentCity={this.props.currentCity} cityList={this.props.cityList} showcity={this.props.showcity.bind(this)}></City>
                {/* 轮播部分 */}
                <Banner slide_list={this.props.indexTopData.get("slide_list")}></Banner>
                {/* 剧种分类部分 */}
                <OperaClassfy classify_list={this.props.indexTopData.get("classify_list")} />
                {/* 底部导航部分 */}
                <TabBarExample bottom_list={this.props.indexTopData.get("bottom_list")}/>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
    }
}
// 获取页面中所需要的首页的数据
const mapStateToProps = (state) => {
    return {
        cityList: state.getIn(["indexReducer", "cityList"]),
        indexTopData: state.getIn(["indexReducer", "indexTopData"]),
        currentCity: state.getIn(["indexReducer", "currentCity"]),
    }
}
// 方法 初始化的时候调取城市的数据和首页的数据
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        // 写入 固定写法 type 必填项,定义常量
        dispatch(loadCityDataAsync(dispatch))
        this.props.getshoyedata(this.props.currentCity);
    },
    // 切换城市 
    showcity(el) {
        // 点击城市的时候 切换数据,传入首页获取数据时候所需要的城市的参数
        if (el.name) {
            let currentCity = {
                city_id: el.id,
                abbreviation: el.Abbreviation || "",
                name: el.name
            }
            //调用首页的接口
            this.setState({
                isCity: !(this.state.isCity)
            })
            this.props.getshoyedata(currentCity)
        } else {
            this.setState({
                isCity: !(this.state.isCity)
            })
        }
    },
    // 调取首页的数据
    getshoyedata(currentCity) {
        dispatch(loadIndexData(dispatch, currentCity))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);