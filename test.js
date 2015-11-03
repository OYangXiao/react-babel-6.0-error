import React from 'react';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          username:props.username
        }
    }

    static defaultPorps = {
        username:"apple"
    }

    render(){
        //the console.log function output an empty object here
        console.log(this.props);
        //so aparently here output an Object{username:undefined}
        console.log(this.state);
        
        //there is nothing wrong about this "this.click"
        return(
            <div>
                {
                <button onClick={this.click}>say hi</button>
            </div>
        )
    }

    click = (evt) =>{
        /*
          ** this would not build because of these "this" here
          ** message says:
          ** 'this' is not allowed before super() (This is an error on an internal node. Probably an internal error)
         */
        this.setState({username:"orange"});
        alert(this.state.username);

        //this works fine
        alert("hi");
    }
}

export default Test;
