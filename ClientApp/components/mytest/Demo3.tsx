import * as React from 'react'

 interface Demo3Propus{

 }
 interface Demo3States{

 }
 export class Demo3 extends React.Component<Demo3Propus,Demo3States>{
     constructor(props:Demo3Propus,states:Demo3States){
         super(props,states);
     }
     rander(){
         var arr=[<h1>hello world</h1>,
         <h2>react......</h2>]
         return <div>
        {arr}
         </div>
     }
 }