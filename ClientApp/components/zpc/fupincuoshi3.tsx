import * as React from "react";

export interface Fupincuoshi3Props {
    textValue: string;
}

interface Fupincuoshi3States {
    textValue: string;
}

export class Fupincuoshi3 extends React.Component<Fupincuoshi3Props, Fupincuoshi3States>{
    constructor(props: Fupincuoshi3Props, state: Fupincuoshi3States) {
        super(props);
        this.state = {
            textValue: this.props.textValue
        };
    }

    public setValue(text: string) {
        this.setState({
            textValue: text
        }, () => {
            console.log("状态更新完")
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
                <input ref="test1" type="text" value={this.state.textValue} />
                <input ref="button" type="button" value="回复" />
                {this.props.children}
            </div>
        );
    };
}