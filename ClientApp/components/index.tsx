import * as React from "react";
import { Button, Carousel } from "antd";

export interface ChinaProps { }
export interface ChinaState { }

export class China extends React.Component<ChinaProps, ChinaState>{

    render() {
        let browserHeight = $(window).height(); //浏览器可视高度
        return (
            <div>

                <Carousel autoplay>
                    <div style={{ position: "relative", height: browserHeight - 50, width: "600px", background: "#364d79" }}>
                        <img style={{ height: "100%", width: "100%" }} src={require("./img/01.jpg")} />
                    </div>
                    <div style={{ position: "relative", height: browserHeight - 50, width: "600px", background: "#364d79" }}>
                        <img style={{ height: "100%", width: "100%" }} src={require("./img/02.jpg")} />
                    </div>
                    <div style={{ position: "relative", height: browserHeight - 50, width: "600px", background: "#364d79" }}>
                        <img style={{ height: "100%", width: "100%" }} src={require("./img/03.jpg")} />
                    </div>
                    <div style={{ position: "relative", height: browserHeight - 50, width: "600px", background: "#364d79" }}>
                        <img style={{ height: "100%", width: "100%" }} src={require("./img/04.jpg")} />
                    </div>
                </Carousel>
            </div>

        );
    }

}