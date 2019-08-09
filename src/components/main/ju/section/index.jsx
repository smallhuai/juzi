import React, { PureComponent } from "react"
import { PullToRefresh } from 'antd-mobile';
import { connect } from 'react-redux';
import { loadTheaterListData } from "../actionCreator";
import { TheaterList } from "@/components/main/index/section/styled";
import {TheaterSwiper} from "./swiper";
class ContenPullReferesh extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            down: false,
            height: document.documentElement.clientHeight,
            page: 1
        };
    }
    componentDidMount() {
        this.props.getTheaterData.bind(this, this.state.page)()
    }
    render() {
        console.log(this.props.theatrelist);
        return (
            <TheaterList>
                {
                    this.props.theatrelist && this.props.theatrelist.length !== 0 ?
                        <PullToRefresh
                            damping={60}
                            ref={el => this.ptr = el}
                            style={{
                                height: this.state.height,
                                overflow: 'auto',
                            }}
                            direction={'up'}
                            onRefresh={() => {
                                this.setState({
                                    page: ++this.state.page
                                })
                                this.props.getTheaterData.bind(this, this.state.page)()
                            }}
                        >
                            {this.props.theatrelist.map((item, index) => (
                                <div key={index}>
                                    <div className={'total'}>
                                        <div className={'top'}>
                                            <div className={'toppic'}><img src={`${item.pic}`} alt="" /></div>
                                            <div className={'topRight'}>
                                                <h3>{item.name}</h3>
                                                <p>{item.count}在售演出</p>
                                            </div>
                                        </div>
                                        <TheaterSwiper showList={item.showList} index={index}/>
                                    </div>
                                </div>
                            ))}
                        </PullToRefresh> : null
                }
            </TheaterList>);
    }
}
const mapStateData = (state) => {
    return {
        theatrelist: state.getIn(['juReducer', 'theartList'])
    }
}
const mapDispatchData = (dispatch) => {
    return {
        getTheaterData(data) {
            dispatch(loadTheaterListData(dispatch, data))
        }
    }
}
export default connect(mapStateData, mapDispatchData)(ContenPullReferesh)