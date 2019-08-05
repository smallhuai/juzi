import React, { PureComponent } from "react"
import { Operaclass } from "@/components/main/index/section/styled"
// 演唱会 音乐剧组件
export class OperaClassfy extends PureComponent {
    render() {
        if (this.props.classify_list) {
            return (
                <Operaclass>
                    {
                        this.props.classify_list.map((item, index) => (
                            <a href={`${item.get("url")}`} key={index}>
                                <div>
                                    <img src={`${item.get("pic")}`} alt="" />
                                </div>
                                <p>
                                    {item.get("name")}
                                </p>
                            </a>
                        ))
                    }
                </Operaclass>
            )
        } else {
            return null;
        }
    }
}