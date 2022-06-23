import React, { Component } from 'react';

class Birthday extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ageChange: props.age
        }
    }
    increaseAge = () =>{
        this.setState({
            ageChange: this.state.ageChange + 1
        })
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Age: {this.state.ageChange}</p>
                <p>Hair color: {this.props.hair}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.name}</button>
            </div>
        )
    }
}


export default Birthday;