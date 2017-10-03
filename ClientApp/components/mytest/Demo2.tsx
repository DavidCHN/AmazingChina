import * as React from 'react';

interface Demo2Props {

}
interface Demo2States {

}
export class Demo2 extends React.Component<Demo2Props, Demo2States>{
    constructor(props: Demo2Props, states: Demo2States) {
        super(props, states);
        this.state = {

        }
    }


    rander() {
        var names:string[] = ['ddd', 'dddd', 'dddddd'];
        return <div>
            {
                //该方法是遍历数组中的每个值，name代替的是每次遍历得到数组里面的值
                names.map(function (name) {
                    return <div>Hello, {name}!</div>
                })}
        </div>
    }
}