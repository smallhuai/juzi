// 热门演出的组件
import React, { PureComponent } from "react";
import { connect } from "react-redux"
import styled from "styled-components";
import { loadRecommendDataAsync } from "../../actionCreator";
import SwiperCell from "@/components/main/index/section/HotsRecommend/swiper";
import global from "@/core/global"
let r = global.r;
// 热门演出逻辑组件部分
class HotRecommend extends PureComponent {
    render() {
        if (this.props.hotsShowList) {
            return (
                <HotBox>
                    <div className={`hot`}>热门演出</div>
                    <SwiperCell>
                        {this.props.hotsShowList.map((item, index) => (
                            <div key={index} className="swiper-slide">
                                <a href={`${item.get("schedular_url")}`}>
                                    <div>
                                        <img src={`${item.get("pic")}`} alt="" />
                                    </div>
                                    <p>{item.get("show_name")}</p>
                                </a>
                            </div>
                        ))}
                    </SwiperCell>
                </HotBox>
            )
        } else {
            return null;
        }
    }
    componentDidMount() {
        this.props.getRecommentData.bind(this)(this.props.currentCity);
    }
    componentWillReceiveProps(props) {
        if (props.currentCity.name !== this.props.currentCity.name) {
            this.props.getRecommentData.bind(this)(props.currentCity);
        }
    }
}
// 热门演出样式部分
const HotBox = styled.div`
    background-color: #fff;
    padding:${r(20)};
    .hot{
        height:${r(40)};
        line-height:${r(40)};
        font-size:${r(20)};
        font-weight:700;
    }
    .swiper-container{
        width: 100%;
        height: ${r(180)};
        .swiper-slide{
            a{
                width:${r(107)};
                height: ${r(177)};
                display:block;
                div{
                    height:${r(145)};
                    width:${r(107)};
                    img{
                        width:100%;
                        height:auto;
                    }
                }
                p{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    color:#232323; 
                    padding-right:${r(20)};
                    font-weight:700; 
                    font-size:${r(14)}      
                }
            }
        }
    }
`
// 接口中的属性数据
const mapStateData = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        hotsShowList: state.getIn(['indexReducer', 'hotRecommendData', 'hots_show_list'])
    }
}
// 定义接口中的方法
const mapDispatchData = (dispatch) => {
    return {
        getRecommentData(currentCity) {
            dispatch(loadRecommendDataAsync(dispatch, currentCity))
        }
    }
}
export default connect(mapStateData, mapDispatchData)(HotRecommend)