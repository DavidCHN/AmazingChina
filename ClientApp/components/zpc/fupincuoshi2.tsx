import * as React from "react";

export interface Fupincuoshi2Props {
    sendMessage?: (message: string) => void;
    textValue?: string;
}

interface Fupincuoshi2States {
    textValue?: string;
}

export class Fupincuoshi2 extends React.Component<Fupincuoshi2Props, Fupincuoshi2States>{
    constructor(props: Fupincuoshi2Props, state: Fupincuoshi2States) {
        super(props);
        this.state = {
            textValue: this.props.textValue ? this.props.textValue : "MO"
        };
    }
    private onClickHandler(e) {
        console.log(e)
        this.props.sendMessage(this.refs.test1.value);
    }

    private change(e) {
        this.setState({
            textValue: e.target.value
        },()=>{
            console.log();
            
        });
    }
    refs: {
        [key: string]: any;
        test1: HTMLInputElement;
        button: HTMLInputElement;
    }
    render() {
        return (
            <div>
                <input ref="test1" type="text" value={this.state.textValue} onChange={this.change.bind(this)} />
                <input ref="button" type="button" value="发送" onClick={this.onClickHandler.bind(this)} />
            </div>
        );
    };
}