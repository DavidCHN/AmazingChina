import * as React from "react";
import { Messenger, MessageArgs } from "../services/messenger";
import { LeafLetMapExt } from "./leafletMapExt";

export class MapMessageArgs extends MessageArgs {
    map: LeafLetMapExt;
}

export interface MapProps {
    //mapOptions: MapOptions;//初始化地图所需的图层
    onMapCreated: (map: LeafLetMapExt) => void;//map创建完成时的回调函数
    // style?: any;
}

interface MapStates {

};

export class Map extends React.Component<MapProps, MapStates>{
    geoMap: LeafLetMapExt;

    constructor(props: MapProps, state: MapStates) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        this.geoMap = new LeafLetMapExt(this.refs.map, {
            center: [36, 120],
            zoom: 7
        });
        this.props.onMapCreated(this.geoMap);
    }

    refs: {
        map: HTMLDivElement;
    }
    render() {
        return (
            <div ref="map" id='map' style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden"}}>
                {this.props.children}
            </div>
        );
    }

}
