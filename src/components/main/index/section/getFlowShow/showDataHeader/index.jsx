import React, { PureComponent } from "react";
import styled from "styled-components";
import global from "@/core/global"
let r = global.r;
export class ShowHeaderData extends PureComponent {
    render() {
        return (
            <ShowData>
                {
                    this.props.floorShowData.map((item, index) => (
                        <div key={index} className={'show'} style={{ background: `${this.props.bg[this.props.index]}` }}>
                            <div className={'pic'}>
                                <img src={`${item.get("pic")}`} alt="" />
                                <div className={'ico'} dangerouslySetInnerHTML={{ __html: item.get('ico') }}></div>
                            </div>
                            <div className={'decribe'}>
                                <p>
                                    {`${item.get("date")} `}
                                    <span>{`${item.get("week")}`}</span>
                                </p>
                                <p>
                                    {item.get("schedular_name")}
                                </p>
                                <p>
                                    {`${item.get("city_name")} | ${item.get("venue_name")}`}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </ShowData>
        )
    }
}
const ShowData = styled.div`
    width:${r(375)};
    margin:0 auto;
    margin-bottom:${r(15)};
    .show{
        display:flex;
        padding:${r(12)} ${r(18)};
        .pic{
            height:${r(145)};
            width:${r(106)};
        img{
            width:auto;
            height:100%;
        }
        }    
    }
    .decribe{
        color:#fff;
        padding:${r(15)} 0;
        padding-left:${r(25)};
       p{
           padding-bottom:${r(12)};       
       }
       p:nth-child(1){
           font-size:${r(18)};
           span{
                font-size:${r(12)};
           }
       }
       p:nth-child(2){
           font-size:${r(18)};
           font-weight:700;
       }
    }
`