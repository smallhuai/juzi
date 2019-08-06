import React, { PureComponent } from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import { BannerBox } from "@/components/main/index/section/styled"
// 轮播图的组件
export class Banner extends PureComponent {
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
        if (this.props.slide_list) {
            if (this.props.slide_list.size !== 0) {
            //    console.log(this.props.slide_list.toJS());   
                return (
                    <BannerBox>
                        <WingBlank>
                            <Carousel
                                autoplay={true}
                                infinite
                            >
                                {this.props.slide_list.map((item,val) => (
                                    <a
                                        key={val}
                                        href={`${item.get("url")}`}
                                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                        <img
                                            src={`${item.get("image_url")}`}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top',height:198 }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </a>
                                ))}
                            </Carousel>
                        </WingBlank>
                    </BannerBox>
                )
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}