import React, {useContext} from "react";
import MyContext from "../context/myContext";

const GrandChild = (props) =>{
    const context = useContext(MyContext);
    return(
        <div>
            <h3>Hello {context}</h3>
        </div>
    )
};

export default GrandChild;