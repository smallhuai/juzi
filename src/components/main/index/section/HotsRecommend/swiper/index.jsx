//swiper插件
import React, { PureComponent, Fragment } from "react";
import SwiperJs from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css"
class SwiperCell extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="swiper-container" id={this.props.id}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        new SwiperJs(`#${this.props.id}`, { slidesPerView: 3 })
    }
}
// id={this.props.id} `#id${this.props.id}`
export default SwiperCell;