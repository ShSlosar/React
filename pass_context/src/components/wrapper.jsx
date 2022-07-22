import React from "react";
import GrandChild from "./grandChildComp";

const AppWrapperComp = props => {
    return (
        <div>
            <h1>This is content.</h1>
            <GrandChild />
        </div>
    )
}

export default AppWrapperComp;