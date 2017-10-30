import * as React from "react";
import { GeoHeader } from "./geoHeader";
import { GeoMenu } from "./geoMenu";
import { BeautifulCountry } from "./BeautifulCountry";
import { AmazingChina } from "./AmazingChina";
import {China} from "./index";

export interface HomeState {
    currentModuleKey?: string;//当前模块的key值
    currentModule?: JSX.Element;
}
export interface HomeProps {

}

const Contents = {
    China:<China/>,
    BeautifulCountry: <BeautifulCountry />,
    AmazingChina: <AmazingChina />
}




export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps, state: HomeState) {
        super(props);
        this.state = {
            currentModule: Contents["China"]
        }
        document.title = "辉煌中国";
    }

    componentDidMount() {

    }

    private menuOnClickHandler(key: any) {
        this.setState({
            currentModule: Contents[key]
        });

    }

    render() {
        let height = $(window).height() - 50;
        return (
            <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
                <GeoHeader />
                <div style={{
                    position: "relative",
                    float: "left", width: "230px", height: "100%", top: "0px", bottom: "0px", right: "0px"
                }}>
                    <GeoMenu onClick={this.menuOnClickHandler.bind(this)} />
                </div>
                <div style={{  padding: "0px", position: "absolute", float: "left", left: "230px", height: height, top: "50px", bottom: "0px", right: "0px" }}>
                    {this.state.currentModule}
                </div>
            </div>
        );
    }
}