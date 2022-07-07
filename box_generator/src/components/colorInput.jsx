import React, {useState} from "react";

const ColorForm = (props) => {
    const [msg, setMsg] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(msg);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Color</h1>
            <input  
                className="mx-auto"
                type="text"
                placeholder="Enter a color here."
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }/>
            <input type="submit" value="Set Color and Add" />
        </form>
    );
};

export default ColorForm;