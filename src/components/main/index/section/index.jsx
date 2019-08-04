import React, { PureComponent } from 'react';
import { CityWrap, ButtonCity, Operaclass } from "./styled"
import { Carousel, WingBlank, TabBar } from 'antd-mobile';

// 城市的组件
export class City extends PureComponent {
    render() {
        if (this.props.cityList.size !== 0) {
            return this.props.isCity ? (
                <CityWrap>
                    <div className="left">
                        <ul>
                            {this.props.cityList.map((item, index) => (
                                <li key={index}>
                                    <h1 className={'upercity'}>{item.get("id")}</h1>
                                    <ol>
                                        {item.get("list").map((el, ind) => (
                                            <li className={'citys'} key={ind} onClick={this.props.showcity.bind(this, el.toJS())}>{el.get("name")}</li>
                                        ))}
                                    </ol>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            {this.props.cityList.map((item, index) => (
                                <li key={index}>{item.get("id")}</li>
                            ))}
                        </ul>
                    </div>
                </CityWrap>
            ) : (
                    <ButtonCity onClick={this.props.showcity.bind(this)}>{this.props.currentCity.get("name")}</ButtonCity>
                )
        } else {
            return null;
        }
    }
}
// 轮播图的组件
export class Banner extends PureComponent {
    state = {

    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            });
        }, 100);
    }
    render() {
        if (this.props.slide_list) {
            console.log(this.props.slide_list.toJS());
            return (
                <WingBlank style={{ margin: 0 }}>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.props.slide_list.map((item, val) => (
                            <a
                                key={val}
                                href={`${item.get("url")}`}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`${item.get("image_url")}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            );
        } else {
            return null;
        }

    }
}
// 演唱会 音乐剧组件
export class OperaClassfy extends PureComponent {
    render() {
        if (this.props.classify_list) {
            console.log(this.props.classify_list.toJS());
            return (
                <Operaclass>
                    {
                        this.props.classify_list.map((item, index) => (
                            <a key={index}>
                                <div>
                                    <img src={`${item.get("pic")}`} alt="" />
                                </div>
                                <p>
                                    {item.get("name")}
                                </p>
                            </a>
                        ))
                    }
                </Operaclass>
            )
        } else {
            return null;
        }
    }
}
// 底部导航栏
export class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }
    renderContent(pageText) {
        if (this.props.bottom_list) {
            return (
                <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                    <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                    <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                                hidden: !this.state.hidden,
                            });
                        }}
                    >
                        Click to show/hide tab-bar
                    </a>
                    <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                                fullScreen: !this.state.fullScreen,
                            });
                        }}
                    >
                        Click to switch fullscreen
            </a>
                </div>
            );
        } else {
            return null;
        }

    }
    render() {
        if (this.props.bottom_list) {
            return (
                <div style={this.state.fullScreen ? { position: 'fixed', height: "500px", width: '100%', bottom: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                        tabBarPosition="bottom"
                    >
                        <TabBar.Item
                            title="Life"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                            data-seed="logId"
                        >
                            {this.renderContent('Life')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Koubei"
                            key="Koubei"
                            badge={'new'}
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                            }}
                            data-seed="logId1"
                        >
                            {this.renderContent('Koubei')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Friend"
                            key="Friend"
                            dot
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }}
                        >
                            {this.renderContent('Friend')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="My"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                            {this.renderContent('My')}
                        </TabBar.Item>
                    </TabBar>
                </div>
            );
        } else {
            return null;
        }
    }
}




