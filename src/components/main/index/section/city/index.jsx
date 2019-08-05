import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadCityDataAsync } from "@/components/main/index/actionCreator";
import { CityWrap, ButtonCity } from "@/components/main/index/section/styled";
// 城市的组件
class City extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isCity: false,
            currentCity: {
                city_id: " 0",
                abbreviation: "",
                name: "全国"
            }
        }
    }
    render() {
        return this.state.isCity ? (
            <CityWrap>
                <div className="left">
                    <ul>
                        {this.props.cityList.map((item, index) => (
                            <li key={index}>
                                <h1 className={'upercity'}>{item.get("id")}</h1>
                                <ol>
                                    {item.get("list").map((el, ind) => (
                                        <li className={'citys'} key={ind} onClick={this.props.showcity.bind(this, el.toJS())}>{el.get("name")}</li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        {this.props.cityList.map((item, index) => (
                            <li key={index}>{item.get("id")}</li>
                        ))}
                    </ul>
                </div>
            </CityWrap>
        ) : (
                // {this.props.showcity.bind(this)}>{this.props.currentCity.get("name")}
                // {this.props.currentCity.get("name")}
                <ButtonCity onClick={this.props.showcity.bind(this)}>{this.state.currentCity.name}</ButtonCity>
            )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)(this.state.currentCity);
    }
}
const mapStateToProps = (state) => {
    return {
        cityList: state.getIn(["indexReducer", "cityList"]),
    }
}
// 方法 初始化的时候调取城市的数据和首页的数据
const mapDispatchToProps = (dispatch) => ({
    pageInit(targetcity) {
        dispatch(loadCityDataAsync(dispatch, targetcity))
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
                isCity: !(this.state.isCity),
                currentCity: currentCity
            })
            this.props.pageInit(currentCity)
            //     this.props.getshoyedata(currentCity)
        } else {
            this.setState({
                isCity: !(this.state.isCity)
            })
        }
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(City);