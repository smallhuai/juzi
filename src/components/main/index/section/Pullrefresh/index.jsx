import React, { PureComponent } from "react";
import { PullToRefresh } from 'antd-mobile';
import { connect } from "react-redux";
import { loadRecommedShowData } from "@/components/main/index/actionCreator";
import { PullShowData } from "@/components/main/index/section/styled"
class PullRefresh extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            down: false,
            page: 1
        };
    }
    render() {

        return (
            <div>
                {this.props.pullShowData && this.props.pullShowData !== 0 ?
                    <PullToRefresh
                        damping={60}
                        direction={'up'}
                        ref={el => this.ptr = el}
                        onRefresh={() => {
                            this.setState({
                                page: ++this.state.page
                            })
                            this.props.getPullShowData.bind(this, { cityAdd: this.props.currentCity.abbreviation, page: this.state.page })()

                        }}
                    >
                        {this.props.children}
                        <PullShowData>
                            <h1>为你推荐</h1>
                            {
                                this.props.pullShowData.map((item, index) => (
                                    <div key={index} className={'show'}>
                                        <div className={'pic'}>
                                            <img src={`${item.get("schePic")}`} alt="" />
                                        </div>
                                        <div className={'decribe'}>
                                            <p>
                                                {`${item.get("show_time")} `}
                                                <span>{`${item.get("week")}`}</span>
                                            </p>
                                            <p>
                                                {item.get("show_name")}
                                            </p>
                                            <p className={'place'}>
                                                {`${item.get("c_name")} | ${item.get("v_name")}`}
                                            </p>
                                            <p className={`price`}>￥ {`${item.get("low_price")}`} <span>起</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </PullShowData>
                    </PullToRefresh> : null
                }
            </div>);
    }
    componentDidMount() {
        this.props.getPullShowData.bind(this, { cityAdd: this.props.currentCity.abbreviation, page: this.state.page })()
    }
}
// 获取下拉中城市的数据和下拉的数据
const mapStateData = (state) => {
    return {
        currentCity: state.getIn(['indexReducer', 'currentCity']).toJS(),
        pullShowData: state.getIn(['indexReducer', 'pullShowData'])
    }
}
const mapDispatchData = (dispatch) => {
    return {
        getPullShowData(data) {
            dispatch(loadRecommedShowData(dispatch, data))
        }
    }
}
export default connect(mapStateData, mapDispatchData)(PullRefresh);