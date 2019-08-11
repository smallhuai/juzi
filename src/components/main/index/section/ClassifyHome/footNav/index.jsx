import React, { PureComponent } from "react";
import {withRouter} from "react-router-dom";
import { FootNative } from "@/components/main/index/section/styled"
const shou = require("../../../../../../imgs/shou.png");
// const shouse = require("../../../../../../imgs/shou1.png");
const ju = require("../../../../../../imgs/ju1.png");
// const juse = require("../../../../../../imgs/ju2.png");
const piao = require("../../../../../../imgs/piao.png");
const mine = require("../../../../../../imgs/mine.png");
class FoorNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navList: [{ name: "首页", ico: shou, path: "/index" }, { name: "剧院", ico: ju, path: "/ju" }, { name: "票夹", ico: piao, path: "/piao" }, { name: "我的", ico: mine, path: "/my" }]
    };
  }
  render() {
    return (
      <FootNative>
        {
          this.state.navList.map((item, index) => (
            <div key={index} className={'nav'} onClick={this.topath.bind(this,item)}>
              <div>
                <img src={`${item.ico}`} alt="" />
              </div>
              <p>{item.name}</p>
            </div>
          ))
        }
      </FootNative>
    );
  }
  topath(item) {
     return this.props.history.push(item.path)
  }
}
export default withRouter(FoorNav);