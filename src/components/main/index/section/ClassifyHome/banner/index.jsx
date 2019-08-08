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
        return (
            <BannerBox>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.props.slide_list.map((item, val) => (
                            <a
                                key={val}
                                href={`${item.url}`}
                                style={{ display: 'inline-block', width: '100%'}}
                            >
                                <img
                                    src={`${item.image_url}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top', height: 198 }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </BannerBox>
        )
    }
}