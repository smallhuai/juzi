//swiper插件
import React, { PureComponent } from "react";
import SwiperJs from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css"
class SwiperCell extends PureComponent {
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    } 
    componentDidMount(){
        new SwiperJs ('.swiper-container',{slidesPerView :3})
    }   
}
export default SwiperCell;