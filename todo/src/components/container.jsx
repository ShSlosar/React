import React, {useState} from "react";
//import StyledListItem from "./styledListItem";

const Container = props => {
    const [state, setState] = useState({
        todos : [],
        newItem: ""
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        if(state.newItem.length == 0){
            return;
        }
        const todoItem = {
            text: state.newItem,
            complete: false
        };
        setState({todos: [...state.todos, todoItem],
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
    const handleDelete = (delIdx) => {
        const filteredTodos = state.todos.filter((_todo, index)=>{
            return index != delIdx;
        });
        setState({todos: filteredTodos});
    };
    const handleChecked = (index) => {
        const updatedTodos = state.todos.map((todo, idx) =>  {
            if (index == idx) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setState({todos: updatedTodos});
    };

    return(
        <div className="mx-auto">
            <form onSubmit={ e => handleFormSubmit(e)}>
                <input onChange={e => onChangeItem(e, e.target.value)} 
                    placeholder="Random task..." 
                    type="text" 
                    value={state.newItem}/>
                <button className="btn btn-primary" >Add to list.</button>
            </form>
            <div>
                <ul>
                    {state.todos.map( (todo,index) => {
                        const todoClasses = [];
                        if (todo.complete){
                            todoClasses.push("line-through");
                        }
                        return(
                            <li className={todoClasses.join(" ")} key={index}>
                                {todo.text} 
                                <input type="checkbox"
                                    checked={todo.complete}
                                    onChange={(e) => {
                                        handleChecked(index)
                                    }}
                                />
                                <button 
                                className="btn-sm btn-dark" 
                                onClick={e => handleDelete(index)}>
                                    Delete
                                    </button>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        </div>
    );
}
export default Container;