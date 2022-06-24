import React, {useState} from 'react';

const StatefulComponent = props =>{
    const [state, setState] = useState({
        clicks: 0
    });
    const clickHandler = () => {
        console.log(state);
        setState({
            clicks: state.clicks + 1
        });
    }
    return(
        <div>
            <button onClick={clickHandler}>You have clicked the button {state.clicks} times</button>
        </div>
    );
}

export default StatefulComponent;