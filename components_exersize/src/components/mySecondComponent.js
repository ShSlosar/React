import React, { Component } from "react";

class MySecondComponent extends Component{
    render(){
        const {lastName} = this.props;
        const {age,hair} = this.props;
        return(
            <div>
                <h1>Name: {this.props.firstName}, {lastName}</h1>
                <h4>Age: {age}, Hair Color: {hair}</h4>
            </div>
        );
    }
}

export default MySecondComponent