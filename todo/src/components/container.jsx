import React, {useState} from "react";
import StyledListItem from "./styledListItem";

const Container = props => {
    const [state, setState] = useState({
        todos : [],
        newItem: ""
    });
    const [isDone, setIsDone] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        setState({todos: [...state.todos, state.newItem],
            newItem: ""
        
        });
    };
    const onChangeItem = (e,value) => {
        e.preventDefault();
        setState({
            ...state,
            newItem: value
        });
    };


    return(
        <div>
            <form onSubmit={ e => handleFormSubmit(e)}>
                <input onChange={e => onChangeItem(e, e.target.value)} 
                    placeholder="Random task..." 
                    type="text" 
                    value={state.newItem}/>
                <button className="btn btn-primary" >Add to list.</button>
            </form>
            <div>
                <ul> // List Not done items need to be fixed.
                    {state.todos.map( (todo,index) => (
                        <StyledListItem key={index}>
                            {todo} 
                            <input 
                                type="checkbox" 
                                checked={state.isDone}
                                className={isDone ? "text-decoration-line-through" : ""}
                                onChange={e => setIsDone(e.target.checked)}/>
                        </StyledListItem>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Container;