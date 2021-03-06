import React from "react";

const SendArgComp = props => {
    const onClickHandler = (e, value) => {
        alert(`Movie: ${value}`);
    }
    return props.movies.map( (item, index) => {
        return <button onClick={ (e) => onClickHandler(e,item) }>{item}</button>
    });
}
export default SendArgComp;