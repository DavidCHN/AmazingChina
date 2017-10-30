import * as React from "react";
import {Avatar} from "antd";
export interface GeoHeaderState {

}
export interface GeoHeaderProps {

}

/**
 * GeoHeader
 */
export class GeoHeader extends React.Component<GeoHeaderProps, GeoHeaderState> {
    constructor(props: GeoHeaderProps, state: GeoHeaderState) {
        super(props);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div style={{ height: "50px", backgroundColor: "#232d3c" }}>
                <div style={{ position: "absolute",left:"10px", height: "50px" }}>
                    <img style={{ height: "100%", position: "absolute" }} src={require("./img/userManager.png")} alt="地理信息系统后台管理" />
                </div>
                <div style={{ position: "absolute", right:"5px",top: "10px", height: "40px",color:"white" }}>
                <Avatar src={require("./img/timg.jpg")}/>当前登录：David
                </div>
            </div>
        );
    }
}