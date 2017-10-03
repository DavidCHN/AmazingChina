import * as React from 'react';

//负责参数类型和参数传递
interface Demo1Props{

}
//负责参数值改变的监听
interface Demo1State{
}


export class Demo1 extends React.Component<any,void>{

//构造函数
constructor(){
    super();
}
rander(){
    return<div>
        <h1>hello world!!!!</h1>
    </div>
}
}