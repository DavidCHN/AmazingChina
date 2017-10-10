import * as React from "react";
import { Button } from "antd";
import L from 'leaflet';
import { LeafLetMapExt } from "./map/leafletMapExt";
import { Map, MapMessageArgs } from "./map";
import { Messenger, MessageArgs } from "./services/messenger";

export class SetAttributePanelMessageArgs extends MessageArgs {
    static Message = "NyxuPkwSM";

    body: JSX.Element;
}
export interface BeautifulCountryProps { }
export interface BeautifulCountryState {
    isMapCreated?: boolean;//map是否创建完成
    map?: LeafLetMapExt;//map
}

export class BeautifulCountry extends React.Component<BeautifulCountryProps, BeautifulCountryState>{
    geoMap: LeafLetMapExt;
    constructor(props: BeautifulCountryProps, state: BeautifulCountryState) {
        super(props);
        this.state = {
            isMapCreated: false,
            map: this.geoMap,
        };
        
    }


    componentDidMount() {
        L.esri.basemapLayer('ShadedRelief').addTo(this.geoMap);
    }

    onMapCreatedHandler(geoMap: LeafLetMapExt) {
        this.geoMap = geoMap;
        this.setState({
            isMapCreated: true,
            map: geoMap
        });

    }

    render() {
        return (
            <div>
                <Map ref="map" onMapCreated={this.onMapCreatedHandler.bind(this)} ></Map>
            </div>

        );
    }

}