import React, { PureComponent, Fragment } from "react";
import { getCityData } from "../actionCreator";
import { CityContend } from "@/components/main/index/section/styled"
class CitySelect extends PureComponent {
    constructor() {
        super();
        this.state = {
            currentCity: {
                city_id: "0",
                name: "全国"
            },
            cityList: [],
            iscity: true,
            stclik: false,
            currentIndex: "",
        }
    }
    render() {      
        return (
            <Fragment>
                {
                    this.state.iscity ? <div onClick={this.haddleCity.bind(this)} className={'city'}>{this.state.currentCity.name}</div> :
                        <CityContend>
                            <div className={'left'}>
                            </div>
                            <div className={'right'}>
                                <h1>城市</h1>
                                <ul>
                                    {
                                        this.state.cityList.map((item, index) => (
                                            <li key={index} className={`${this.state.currentIndex === index ? 'active' : ''}`} onClick={this.hiddleNative.bind(this, item, index)}>
                                                {item.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className={'empty'}></div>
                                <div className={'showNot'}>
                                    <span>重置</span>
                                    <span onClick={this.hiddleCityitem.bind(this)}>确定</span>
                                </div>
                            </div>
                        </CityContend>
                }
            </Fragment>

        )
    }
    // 初始化城市数据,
    componentDidMount() {
        getCityData((res) => {
            let cityListAll = res.data.data.city_list;
            cityListAll.unshift({
                city_id: "0",
                name: "全国"
            });
            this.setState({
                cityList: cityListAll
            })
        })
    }
    // 处理城市显示的界面
    haddleCity() {
        this.setState({
            iscity: !this.state.iscity
        })
    }
    // 点击城市的时候切换样式
    hiddleNative(item, index) {
        this.setState({
            currentIndex: index,
            currentCity: item
        }) 
        this.props.hiddleCity(item)
    }
    // 点击的时候 切换城市
    hiddleCityitem() {
        this.setState({
            iscity: !this.state.iscity
        })
    }
}

export default CitySelect;
