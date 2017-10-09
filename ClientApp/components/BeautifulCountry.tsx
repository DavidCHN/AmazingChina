import * as React from "react";
import {Button} from "antd";
import  L from 'leaflet';

export interface BeautifulCountryProps{}
export interface BeautifulCountryState{}

export class BeautifulCountry extends React.Component<BeautifulCountryProps,BeautifulCountryState>{
    constructor(props:BeautifulCountryProps,state:BeautifulCountryState){
        super(props);
    }
    componentDidMount(){
        let map = L.map('map').setView( [29,103], 4);
        
        L.esri.basemapLayer('Streets').addTo(map);
        
    }

    render(){
        return(
            <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden"}} id="map"></div>
    
        );
    }
    
}