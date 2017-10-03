import * as React from 'react';

interface CounterState {
    currentCount?: number;
}
interface CounterPorps{
    count?:number;
    onTest?:(n:number)=>void;
}
export  class Counter extends React.Component<CounterPorps, CounterState> {
    constructor(props:CounterPorps,states:CounterState) {
        super(props,states);
        this.state = { currentCount: 0 };
    }
    sendMessage(){
        let _self=this;
        _self.props.onTest(_self.state.currentCount);
    }

    handleChange(value){
        let _self=this;
        _self.setState({
            currentCount:value.target.value
        },()=>{console.log(`已发送，_self.state.message`)}
        );
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button onClick={this.incrementCounter}>Increment</button>
        </div>;
    }

    incrementCounter() {
        if(this.props.onTest){
            this.props.onTest(this.state.currentCount++);
        }
    }
}
