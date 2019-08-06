import React, { PureComponent} from "react";
import { Carousel, WingBlank } from 'antd-mobile';
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
        console.log(this.props.tourList.toJS());
        return (
            <WingBlank>
                <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    infinite
                    afterChange={index => this.setState({ slideIndex: index })}
                >
                    {this.props.tourList.map((item, index) => (
                        <a
                            key={index}
                            href={`${item.get("tour_show_url")}`}
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <img
                                src={`${item.get("pic")}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <p>{item.get("show_name")}</p>
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}