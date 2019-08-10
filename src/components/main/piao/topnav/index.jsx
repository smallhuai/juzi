import React, { PureComponent } from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
import { getCategoryData, getShowListData } from "../actionCreator";
import { PullShowData, Tabfixed } from "@/components/main/index/section/styled";
import CitySelect from "./city";
class TopNav extends PureComponent {
  constructor() {
    super();
    this.state = {
      cateGoryData: [],
      showList: [],
      currentCity: {
        city_id: "0",
        name: "全国"
      }
    }
  }
  render() {
    let tabs = []
    this.state.cateGoryData.map((item) => tabs.push({ title: item.name, category_id: item.category_id }))
    return (
      <div>
        <WhiteSpace />
        <Tabfixed>
          <div className={'tabs'}>
            <Tabs tabs={tabs} onTabClick={this.getClickData.bind(this)} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
            </Tabs>
          </div>
          <CitySelect />
        </Tabfixed>
        <PullShowData>
          {
            this.state.showList && this.state.showList.length !== 0 ? this.state.showList.map((item, index) => (
              <div key={index} className={'show'}>
                <div className={'pic'}>
                  <img src={`${item.pic}`} alt="" />
                </div>
                <div className={'decribe'}>
                  <p>
                    {`${item.show_time_top} `}
                    <span>{`${item.show_time_bottom}`}</span>
                  </p>
                  <p>
                    {item.name}
                  </p>
                  <p className={'place'}>
                    {`${item.city_name} | ${item.venue_name}`}
                  </p>
                  <p className={`price`}>
                    ￥ {`${item.min_price}`} <span>起</span>
                  </p>
                </div>
              </div>
            )) : null
          }
        </PullShowData>
        <WhiteSpace />
      </div>
    );
  }
  // 获取展示数据的文件
  getClickData(tab) {
    console.log(tab);
    let data = {};
    data.category = tab.category_id;
    data.city_id = this.state.city_id;
    // 演唱会  音乐会的数据
    getShowListData(data, (res) => {
      let showListMore = res.data.data.list
      console.log(showListMore);
      this.setState({
        showList: showListMore
      })
    })
  }
  componentDidMount() {
    // 获取顶部导航的数据
    getCategoryData((res) => {
      let showListCate = res.data.data.show_category_list
      showListCate.unshift({category_id:"0",name:"全国"})
      this.setState({
        cateGoryData: showListCate
      })
    });
  }
}
export default TopNav;