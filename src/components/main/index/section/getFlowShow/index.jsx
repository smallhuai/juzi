import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { loadFloorShowDataAsync } from "../../actionCreator";
import SwiperCell from "@/components/main/index/section/HotsRecommend/swiper";
import { ShowHeaderData } from "./showDataHeader";
import styled from "styled-components";
import global from "@/core/global"
let r = global.r;
class FloorShow extends PureComponent {
    constructor() {
        super();
        this.state = {
            bg: ['rgb(138, 124, 149)', 'rgba(53,37,37,1)', 'rgb(70, 59, 50)', 'rgb(113, 148, 90)', 'rgb(37, 40, 38)', 'rgb(69, 41, 29)']
        }
    }
    render() {
        return (
            <Fragment>
                {/* 底部剧种展示的部分 */}
                {this.props.floorShowData && this.props.floorShowData !== 0 ?
                    <FloorShowBox>
                        {this.props.floorShowData.map((item, index) => (
                            <div key={index}>
                                {item.get("list").slice(1).size > 2 ?
                                    (
                                        <div>
                                            <h1>{item.get("title")}</h1>
                                            {/* 底部剧种页面展示的头部 */}
                                            <ShowHeaderData floorShowData={item.get("list").slice(0, 1)} bg={this.state.bg} index={index} />
                                            {/* 展示轮播的部分 */}
                                            <SwiperCell id={`floorShow${index}`}>
                                                {item.get("list").slice(1).map((el, num) => (
                                                    <div key={num} className="swiper-slide">
                                                        <a href={`${el.get("url")}`}>
                                                            <div>
                                                                <img src={`${el.get("pic")}`} alt="" />
                                                                <div className={'ico'} dangerouslySetInnerHTML={{ __html: el.get("ico") }} ></div>
                                                            </div>
                                                            <div>
                                                                <p>{el.get("schedular_name")}</p>
                                                                <p className={'price'}>
                                                                    ￥ {el.get("low_price")}
                                                                    <span> 起</span>
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                ))}
                                            </SwiperCell>
                                        </div>
                                    ) : null
                                }
                            </div>
                        ))}
                    </FloorShowBox>
                    : null
                }
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getFloorShowData.bind(this, this.props.currentCity)()
    }
    componentWillReceiveProps(props) {
        if (props.currentCity.name !== this.props.currentCity.name) {
            this.props.getFloorShowData.bind(this, props.currentCity)()
        }
    }
}
const mapStateData = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        floorShowData: state.getIn(["indexReducer", "floorShowData"])
    }
}
const mapDispatchData = (dispatch) => {
    return {
        getFloorShowData(currentCity) {
            dispatch(loadFloorShowDataAsync(dispatch, currentCity))
        }
    }
}
// 底部展示的样式 
const FloorShowBox = styled.div`
   width:${r(375)};
    margin:0 auto;
    background-color: #fff;  
    h1{
        height:${r(50)};
        line-height:${r(50)};
        font-weight:700;
        padding:0 ${r(20)};
    }
    .swiper-container{
        padding:0 ${r(20)};
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
                .price{
                    padding:${r(5)} 0;
                    color:#f96939;
                    font-weight:0;
                    span{
                        color:#666;
                    }
                }
            }
        } 
    }
`
export default connect(mapStateData, mapDispatchData)(FloorShow);