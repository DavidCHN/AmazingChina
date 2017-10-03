import * as React from "react";

import { Fupincuoshi2 } from "./fupincuoshi2";
import { Fupincuoshi3 } from "./fupincuoshi3";
import { Icon, Button } from 'antd';

export interface FupincuoshiProps {

}

interface FupincuoshiStates {

}

export class Fupincuoshi extends React.Component<FupincuoshiProps, FupincuoshiStates>{
    constructor(props: FupincuoshiProps, state: FupincuoshiStates) {
        super(props);
    }

    private getMessage(text) {
        console.log(text);
        this.refs.test3.setValue(text);
        console.log(this.refs.test3.props)
    }
    refs: {
        [key: string]: any;
        test3: Fupincuoshi3;
    }
    render() {
        return (
            <div>
                <Fupincuoshi2 textValue="孙科丰" sendMessage={this.getMessage.bind(this)} />
                <Fupincuoshi3 ref="test3" textValue="">
                    <div>我是孩子！</div>
                </Fupincuoshi3>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
            </div>
        );
    };
}