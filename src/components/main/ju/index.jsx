import React, { Fragment } from 'react';
import { TopTheart } from "@/components/main/index/section/styled";
import ContenPullReferesh from "./section"
class Theater extends React.Component {
    render() {
        return (
            <Fragment>
                {/*头部  */}
                <TopTheart>
                    <div>剧院</div>
                </TopTheart>
                {/* 循环的部分 */}
                <ContenPullReferesh theatrelist={this.props.theatrelist}>
                    
                 </ContenPullReferesh>
                {/* 底部 */}
            </Fragment>
        )
    }
}
export default Theater