import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { HotTheaterBox } from "@/components/main/index/section/styled";
import { loadHotTheaterData } from "../../actionCreator";
import SwiperCell from "../HotsRecommend/swiper";
class HotTheater extends PureComponent {
    render() {
        return (
            <Fragment>
                {this.props.hotTheaterData.size !== 0 ?

                    // {console.log(this.props.hotTheaterData)}
                    <HotTheaterBox>

                        <h1>热门场馆</h1>
                        <SwiperCell id={'hotTheater'}>
                            {this.props.hotTheaterData.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className={'top'}>
                                        <div className={'toppic'}><img src={`${item.get("pic")}`} alt="" /></div>
                                        <div className={'topRight'}>
                                            <h3>{item.get("name")}</h3>
                                            <p>{item.get("count")}在售演出</p>
                                        </div>
                                    </div>
                                    {
                                        item.get("showList").map((el, num) => (
                                            <div key={num} className={'bottom'}>
                                                <div className={'time'}>{el.get("show_time")}</div>
                                                <div className={'pics'}>
                                                    <img src={`${el.get('pic')}`} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))}
                        </SwiperCell>
                    </HotTheaterBox> : null}
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getTheaterData.bind(this)();
    }
}
const mapStateData = (state) => {
    return {
        hotTheaterData: state.getIn(["indexReducer", "hotTheaterData"])
    }
}
const mapDispatchData = (dispatch) => {
    return {
        getTheaterData() {
            dispatch(loadHotTheaterData(dispatch))
        }
    }
}
export default connect(mapStateData, mapDispatchData)(HotTheater)