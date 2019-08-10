import React, { PureComponent, Fragment } from "react";
import { getCityData } from "../actionCreator";
import { CityContend } from "@/components/main/index/section/styled"
import { dim } from "ansi-colors";
class CitySelect extends PureComponent {
    constructor() {
        super();
        this.state = {
            currentCity: {
                city_id: "0",
                name: "全国"
            },
            cityList: [],
            iscity: true
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
                                            <li key={index}>
                                                {item.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </CityContend>
                }

            </Fragment>

        )
    }
    // 初始化城市数据,
    componentDidMount() {
        getCityData((res) => {
            let cityListAll=res.data.data.city_list;
            cityListAll.unshift(this.state.currentCity);
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
}

export default CitySelect;
