import "../css/layer.css";
import * as React from "react";
import { Button, Select } from "antd";
import L from 'leaflet';
import { LeafLetMapExt } from "./map/leafletMapExt";
import { Map, MapMessageArgs } from "./map";
import { Messenger, MessageArgs } from "./services/messenger";
import { geoGson } from "./dataSource/china";
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
    geojson?:any;
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
        let _self = this;
        let layer = L.esri.basemapLayer('Streets').addTo(this.geoMap);
        let geojson = L.geoJSON(geoGson.json, { style: _self.style.bind(_self), onEachFeature: _self.onEachFeature.bind(_self) }).addTo(this.geoMap);
        this.setState({ layer: layer,geojson:geojson });
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

    style(feature) {
        let _self = this;
        return {
            fillColor: _self.getColor(feature.properties.childNum),
            weight: 2,
            opacity: 0.5,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.6
        };
    }

    getColor(d) {
        return d > 39 ? '#800026' :
            d > 35 ? '#BD0026' :
                d > 30 ? '#E31A1C' :
                    d > 25 ? '#FC4E2A' :
                        d > 20 ? '#FD8D3C' :
                            d > 10 ? '#FEB24C' :
                                d > 5 ? '#FED976' :
                                    '#FFEDA0';
    }

    onEachFeature(feature, layer) {
        let popup = L.popup();
        let _self = this;
        let e = layer.target;
        console.log(feature + "BB" + layer);
        layer.on("click", function (e) {
            _self.geoMap.fitBounds(e.target.getBounds());
            popup.setLatLng(e.latlng).setContent("You clicked the map at " + feature.properties.name).openOn(_self.geoMap);
        });
        layer.on("mouseover", function (e) {
            var layer = e.target;

            layer.setStyle({
                weight: 2,
                color: '#EE0000',
                dashArray: '3',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.chrome && !L.Browser.edge) {
                layer.bringToFront();
            }

        });
        layer.on("mouseout", function (e) {
          _self.state.geojson.resetStyle(e.target);
        });
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