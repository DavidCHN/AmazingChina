import "../css/layer.css";
import * as React from "react";
import { Button, Select } from "antd";
import L from 'leaflet';
import { LeafLetMapExt } from "./map/leafletMapExt";
import { Map, MapMessageArgs } from "./map";
import { Messenger, MessageArgs } from "./services/messenger";
const Option = Select.Option;
export class SetAttributePanelMessageArgs extends MessageArgs {
    static Message = "NyxuPkwSM";

    body: JSX.Element;
}
export interface BeautifulCountryProps { }
export interface BeautifulCountryState {
    isMapCreated?: boolean;//map是否创建完成
    map?: LeafLetMapExt;//map
    layer?: any;
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
        let layer = L.esri.basemapLayer('Streets').addTo(this.geoMap);
        this.setState({ layer: layer });
    }

    onMapCreatedHandler(geoMap: LeafLetMapExt) {
        this.geoMap = geoMap;
        this.setState({
            isMapCreated: true,
            map: geoMap
        });
    }

    handleChange(value: any) {
        this.setBasemap(value);
        //console.log(value);
    }

    setBasemap(basemap) {
        let layer = this.state.layer;
        if (layer) {
            this.geoMap.removeLayer(layer);
        }
        layer = L.esri.basemapLayer(basemap);
        this.setState({ layer: layer });
        this.geoMap.addLayer(layer);
    }

    render() {
        return (
            <div>
                <Map ref="map" onMapCreated={this.onMapCreatedHandler.bind(this)} ></Map>
                <div id="basemaps-wrapper" className="leaflet-bar">
                    <Select defaultValue="Streets" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                        <Option value="Streets">街道</Option>
                        <Option value="Topographic">地形</Option>
                        <Option value="Imagery">影像</Option>
                    </Select>
                </div>
            </div>
        );
    }

}