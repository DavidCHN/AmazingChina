import * as React from "react";
import {Button} from "antd";

export interface AmazingChinaProps{}
export interface AmazingChinaState{}

export class AmazingChina extends React.Component<AmazingChinaProps,AmazingChinaState>{

    render(){
        return(
            <Button>this is AmazingChina</Button>
        );
    }
    
}