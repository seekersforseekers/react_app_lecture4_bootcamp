import React from 'react';
class greetings extends Component{
    constructor(props){//use to intialize local state object
    
        super(props)//will call constructor of paren class
        { 
            this.state={Message:"You Typed button",count:0}
        }
    }
    increment(){
        this.state.count=this.state.count+1

    }

    render(){
        return (<div>
       count-{this.state.count}
      <h1>this.state.Message</h1>
       <button onclick={()=>this.increment()}></button>
        </div>
        );
    }

}
export default greetings