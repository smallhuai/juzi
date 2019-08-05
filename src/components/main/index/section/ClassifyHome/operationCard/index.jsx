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
    width:100%;
    height:${r(247)};
    border: 1px solid #000;
    background:#fff;
    div.firt,div.two{
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:space-between;
        background:#e3e3e3;      
        a{
            display:block; 
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
        height:${r(90)};
        padding:0 ${r(12)}
        a{
            border: 1px solid #000;
            width:${r(169)};
            display:flex;
            justify-content:center;
            align-items:center;
        }
    } 
`