// 商城卡片组件
import React, { PureComponent } from "react";
import styled from "styled-components";
import global from "@/core/global"
let r = global.r;
export class OparaCart extends PureComponent {
    render() {
        if (this.props.operation_list) {
            console.log(this.props.operation_list.toJS());
            let operation_listOne = this.props.operation_list.toJS().slice(0, 2);
            let operation_listTwo = this.props.operation_list.toJS().slice(2)
            return (
                <OparaCartList>
                    <div className={'firt'}>
                        {
                            operation_listOne.map((item, index) => {
                                return (
                                    <a href={`${item.url}`} key={index}>
                                        <div>
                                            <p> {item.name}</p>
                                            <div dangerouslySetInnerHTML={{ __html: item.describe }} >
                                            </div>
                                        </div>
                                        <div>
                                            <img src={`${item.pic}`} alt="" />
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className={'two'}>
                        {
                            operation_listTwo.map((item, index) => {
                                return (
                                    <a href={`${item.url}`} key={index}>
                                        <div>
                                            <p> {item.name}</p>
                                            <p dangerouslySetInnerHTML={{ __html: item.describe }} >
                                            </p>
                                        </div>
                                        <div className={'imgs'}>
                                            <img src={`${item.pic}`} alt="" />
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>


                </OparaCartList>
            )
        } else {
            return null;
        }
    }
}
const OparaCartList = styled.div`
    /* width:100%; */
    height:${r(247)};
    background:#fff;
    padding:0 ${r(12)};
    div.firt,div.two{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:space-between;
        background:#e3e3e3;
        padding:${r(10)};     
        a{
            background-color: #fff;
            display:block; 
            padding-left:${r(8)};
           div{
               p{
                color:#333 !important;
               }
                
            }

            .imgs{
                width:${r(60)};
                height:${r(60)};
                img{
                    width:100%;
                    height:auto;
                }
            }   
         }
    }
    div.firt{
        a{
            width:${r(160)};
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    div.two{
        padding-top:0;
      a{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:${r(106)};
        height:${r(106)}
      }
    }
`