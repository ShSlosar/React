import React, {useReducer} from "react";

const initialState ={
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state,action){
    return{
        ...state,
        [action.type]: action.payload
    };
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleChange(e) {
        let currentError = null;
        let emailRe = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if(e.target.name == 'firstName' || e.target.name == 'lastName'){
            if(e.target.value.length === 0){
                currentError = 'Field is Required.';
            }
            else{
                currentError = null;
            }
        }
        else{
            if(!e.target.value.match(emailRe)){
                currentError = 'Invalid Email'
            }
            else{
                currentError = null;
            }
        }
        dispatch({
            type: e.target.name,
            payload: {
                value: e.target.value,
                error: currentError
            }
        });
    }


    
    return (
        <div>
            <h2>Registration Form</h2>
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                    {state.firstName.error !== null && (
                        <p style={{color:'red'}}>{state.firstName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                    {state.lastName.error !== null && (
                        <p style={{color:'red'}}>{state.lastName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                    {state.email.error !== null && (
                        <p style={{color:'red'}}>{state.email.error}</p>
                    )}
                </label>
            </div>
        </div>
    );
}
export default Form