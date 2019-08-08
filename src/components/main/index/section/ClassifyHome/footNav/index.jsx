import React, { PureComponent } from "react";
import { TabBar } from 'antd-mobile';
import index from "../../..";
class FoorNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    console.log(this.props.bottomList.toJS());
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.props.bottomList.map((item, index) => (
            <TabBar.Item
              title={item.get("name")}
              key={index}
              icon={<div style={{
                width: '42px',
                height: '42px',
                background: `url(${item.get('pic')}) 1px 19px /  42px 42px no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${item.get('pic')}) 20px 20px /  21px 21px no-repeat`
              }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={""}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
            </TabBar.Item>
          ))}

        </TabBar>
      </div>
    );
  }
}
export default FoorNav;