import * as React from 'react';

interface PressState{
    count?:number;
}
interface PressProps{
    countProps?:number;
}
export default class PressCount extends React.Component<PressProps,PressState>{
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    componentWillReceiveProprs(nextProps:PressProps){
        let _self=this;
        if(nextProps.countProps!=_self.props.countProps){
            _self.setState({
                count:nextProps.countProps},()=>{
                    console.log(`已接受${nextProps.countProps}`);
                }
                );
        }

    }
    render(){
        return<div>
            <h1>increment按钮被点击了几次</h1>
        
            <p>这是我第一个程序</p>
            <p>Current count：<strong>{this.state.count}</strong></p>
        </div>
    }
}
