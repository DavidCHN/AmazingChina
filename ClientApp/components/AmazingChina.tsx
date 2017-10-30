import * as React from "react";
import { Button, Col, Row, Calendar, Card, Table,Avatar  } from "antd";
import 'isomorphic-fetch';

export interface AmazingChinaProps { }
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

 export interface AmazingChinaState {
    forecasts: WeatherForecast[];
    loading: boolean;
}
interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export class AmazingChina extends React.Component<AmazingChinaProps, AmazingChinaState>{
    constructor(){
        super();
        this.state = { forecasts: [], loading: true };
        fetch('api/SampleData/WeatherForecasts')
        .then(response => response.json() as Promise<WeatherForecast[]>)
        .then(data => {
            this.setState({ forecasts: data, loading: false });
        });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : AmazingChina.renderForecastsTable(this.state.forecasts);

        return <div>
            <h1>天气预报</h1>
            <p>从服务器读取数据.</p>
            { contents }
        </div>;
    }

    private static renderForecastsTable(forecasts: WeatherForecast[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>日期</th>
                    <th>摄氏度. (C)</th>
                    <th>华氏度. (F)</th>
                    <th>天气情况</th>
                </tr>
            </thead>
            <tbody>
            {forecasts.map(forecast =>
                <tr key={ forecast.dateFormatted }>
                    <td>{ forecast.dateFormatted }</td>
                    <td>{ forecast.temperatureC }</td>
                    <td>{ forecast.temperatureF }</td>
                    <td>{ forecast.summary }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
    

}