import "../css/layer.css";
import * as React from "react";
import { Button,Select } from "antd";
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
        L.esri.basemapLayer('Topographic').addTo(this.geoMap);
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

    setBasemap(basemap: any) {
        var layer = L.esri.basemapLayer('Topographic');
        var layerLabels;
        if (layer) {
            this.geoMap.removeLayer(layer);
          }
      
          layer = L.esri.basemapLayer(basemap);
      
          this.geoMap.addLayer(layer);
      
          if (layerLabels) {
            this.geoMap.removeLayer(layerLabels);
          }
      
          if (basemap === 'ShadedRelief'
           || basemap === 'Oceans'
           || basemap === 'Gray'
           || basemap === 'DarkGray'
           || basemap === 'Imagery'
           || basemap === 'Terrain'
         ) {
            layerLabels = L.esri.basemapLayer('ImageryLabels');
            this.geoMap.addLayer(layerLabels);
          }
    }

    render() {
        return (
            <div>
                <Map ref="map" onMapCreated={this.onMapCreatedHandler.bind(this)} ></Map>
                <div id="basemaps-wrapper" className="leaflet-bar">
                    <Select defaultValue="Topographic" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                        <Option value="Topographic">地形</Option>
                        <Option value="Streets">街道</Option>
                        <Option value="NationalGeographic">国家地理</Option>
                        <Option value="Oceans">海洋</Option>
                        <Option value="Gray">灰阶</Option>
                        <Option value="DarkGray">黑灰</Option>
                        <Option value="Imagery">影像</Option>
                        <Option value="ShadedRelief">地形阴影</Option>
                    </Select>
                </div>
            </div>

        );
    }

}