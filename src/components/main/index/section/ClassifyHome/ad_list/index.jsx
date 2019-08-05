// 广告的组件
import React, { PureComponent } from "react";
import styled from "styled-components";
import global from "@/core/global"
let r = global.r;
export class Adlist extends PureComponent {
    render() {
        if (this.props.ad_list) {
            return (
                <AdDiv>
                    {this.props.ad_list.get("advert1").map((item, index) => (
                        <a href={`${item.get("url")}`} key={index}>
                            <img src={`${item.get("pic")}`} alt=""  />
                        </a>
                    ))}
                </AdDiv>
            )
        } else {
            return null;
        }
    }
}
const AdDiv = styled.div`
    width:100%;
    display:flex;
    height:${r(132)};
    padding:0 ${r(12)};
    padding-bottom:${r(20)};
    background:#fff;
    img{
        width:100%;
        height:auto;
    }
`
// export default Ad_list;