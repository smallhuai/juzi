
import React, { PureComponent } from "react";
import SwiperCell from "@/components/main/index/section/HotsRecommend/swiper";
import { TheaterPlay } from "@/components/main/index/section/styled";
export class TheaterSwiper extends PureComponent {
    constructor() {
        super();
        this.state = {
            slidesPerView: 3,
        }
    }
    render() {
        return (
            <TheaterPlay>
                <SwiperCell id={`Theater${this.props.index}`} slidesPerView={this.state.slidesPerView}>
                    {
                        this.props.showList.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className={'time'}>
                                    {item.show_time}
                                    <span></span>
                                </div>
                                <div className={'pic'}>
                                    <img src={`${item.pic}`} alt="" />
                                </div>
                            </div>
                        ))
                    }

                </SwiperCell>
            </TheaterPlay>
        )
    }
}
