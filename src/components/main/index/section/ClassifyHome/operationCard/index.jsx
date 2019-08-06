// 商城卡片组件
import React, { PureComponent } from "react";
import styled from "styled-components";
import global from "@/core/global"
let r = global.r;
export class OparaCart extends PureComponent {
    render() {
        if (this.props.operation_list) {
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
                                            <p className={'cheng'}> {item.name}</p>
                                            <div dangerouslySetInnerHTML={{ __html: item.describe }} >
                                            </div>
                                        </div>
                                        <div className={'imgs'}>
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
                                            <p className={'cheng'}> {item.name}</p>
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
    width:${r(375)};
    margin:0 auto;
    height:${r(220)};
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
            color:#999;
           div{
               .cheng{
                color:#111 !important;
                font-size:${r(16)};
                padding-bottom:${r(4)};
                text-align:center;
               }
               .c_ff6{
                    font-size:${r(12)};
                    color:#f1b441;
               } 
            }
            .imgs{
                width:${r(50)};
                height:${r(50)};
                img{
                    width:100%;
                    height:auto;
                }
            }   
         }
    }
    div.firt{      
        a{
            height:${r(80)};
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
        align-items:center;
        width:${r(106)};
        height:${r(106)}
      }
    }
`