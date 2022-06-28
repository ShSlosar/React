import React, {useState} from "react";

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUserNameError] = useState("")
    const [EmailError, setEmailError] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleUserName =(e)=> {
        setUsername(e.target.value);
        if(e.target.value.length < 3) {
            setUserNameError("username must be longer")
        }
        else{
            setUserNameError("");
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length < 4){
            setEmailError("Email must be longer")
        }
        else{
            setEmailError("");
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {username, email, password};
        setUsername("");
        setEmail("");
        setPassword("");
        console.log("Welcome User! ", newUser);
        setHasBeenSubmitted(true);
    };
    const formMessage = () => {
        if(hasBeenSubmitted){
            return "Thanks for submitting the form!";
        }
        else{
            return "Please submit the form.";
        }
    };
    return(
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thanks for stopping by!</h3>:
                <h3>Welcome!</h3>
            }
            <h3>{formMessage()}</h3>
            <div>
                {
                    usernameError ?
                    <p style={{color:'red'}} >{usernameError}</p>:
                    ''
                }
                <label>Username: </label> 
                <input type="text" onChange={ (e) => handleUserName(e) } value={username} />
            </div>
            <div>
                {
                    EmailError?
                    <p style={{color:'red'}}>{EmailError}</p>:
                    ''
                }
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => handleEmail(e) } value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>User Name: {username}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </form>
    );
};

export default UserForm;