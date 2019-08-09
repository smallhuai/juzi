import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
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
        url:[shou,ju,piao,mine],
        name:["首页","剧院","票夹","我的"]
    };
  }
  render() {
    return (
      <FootNative>
        <Link to={'/index'}>
          <div className={'nav'}>
            <div>
              <img src={`${shou}`} alt="" />
            </div>
            <p>首页</p>
          </div>
        </Link>

        <Link to={'/ju'}>
          <div className={'nav'}>
            <div>
              <img src={`${ju}`} alt="" />
            </div>
            <p>剧院</p>
          </div>
        </Link>
        <Link to={'piao'}>
          <div className={'nav'}>
            <div>
              <img src={`${piao}`} alt="" />
            </div>
            <p>票夹</p>
          </div>
        </Link>
        <Link to={'/mine'}>
          <div className={'nav'}>
            <div>
              <img src={`${mine}`} alt="" />
            </div>
            <p>我的</p>
          </div>
        </Link>
      </FootNative>
    );
  }
}
export default FoorNav;