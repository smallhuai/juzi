import React, { Fragment } from 'react';
import TopNav from "./topnav"
import { TopTheart } from "@/components/main/index/section/styled"
export default class extends React.Component {
    render() {
        return (
            <Fragment>
                <TopTheart>
                    <div>演出</div>
                </TopTheart>
                <TopNav></TopNav>
            </Fragment>
        )
    }
}