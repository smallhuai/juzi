import React, { PureComponent } from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import styled from "styled-components";
import global from "@/core/global";
let r = global.r;
export class Tourslipe extends PureComponent {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <TourBox>
                <WingBlank>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay={false}
                        infinite
                        afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.props.tourList.map((item, index) => (
                            <a
                                key={index}
                                href={`${item.tour_show_url}`}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: 210,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <div className={'pic'}>
                                    <img
                                        src={`${item.pic}`}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </div>
                                <p className={'Tourname'}>{item.show_name}</p>
                                <p className={'Tourcount'}>{item.schedular_num}场巡演</p>
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </TourBox>
        );
    }
}
// 巡回演唱的样式
const TourBox = styled.div`
    height:${r(190)}
    .space-carousel{
        .am-carousel-wrap-dot > span{
            display:inline ! important;
        }
        a{
            .pic{
                height:${r(140)};
                img{
                    width:auto;
                    height:100%;
                }
            }
            p{
                padding-top:${r(10)};
                text-align:center;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                color:#232323; 
                padding-right:${r(20)};
                font-weight:700; 
                font-size:${r(14)}      
            }
            p:nth-child(3){
                color:#666;
            }
        }
    }
`