import React, { PureComponent } from "react";
import {ShowData} from "@/components/main/index/section/styled"
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