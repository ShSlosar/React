import React, { Component } from "react";


class ThirdComponent extends Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.header}
                </h1>
                {this.props.children}
            </div>
        )
    }
}

export default ThirdComponent