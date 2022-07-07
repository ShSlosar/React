import React, {useState} from "react";
import StyledInput from "./colorInput";
import StyledBox from "./styledBox";
import StyledBtn from "./styledBtn";

const BoxGenerator = props => {
    const colorfield = React.createRef();
    const widthfield = React.createRef();

    const [state, setState] = useState({
        boxes: [],
        newColor: "",
        newWidth: 0
    });

    const btnHandler = e =>{
        try {
            e.preventDefault();
            setState({
                boxes: [...state.boxes, {
                    color: state.newColor,
                    width: state.newWidth
                }],
                newColor: "",
                newWidth: 0
            });
            colorfield.current.value = "";
            widthfield.current.value = "";
        }
        catch{
            console.error();
        }
    };
    const colorHandler = e => {
        e.preventDefault();
        setState({
            ...state,
            newColor: e.target.value
        });
    };
    const widthHandler = e => {
        e.preventDefault();
        setState({
            ...state,
            newWidth: e.target.value
        });
    };

    return (

        <div>
            <StyledInput 
            className="mx-auto"
            placeholder="Color Ex: red, blue, green"
            ref={colorfield}
            onChange={colorHandler}
            />
            <StyledInput 
            className="mx-auto"
            placeholder="Width Ex: 20px, 50px, 100px"
            ref={widthfield}
            onChange={widthHandler}
            />
            <StyledBtn onClick={btnHandler} className="mx-auto">Add new box</StyledBtn>
            <div className="d-flex justify-content-center m-2">
                {state.boxes.map((box, index) => (
                    <StyledBox 
                    className="m-2"
                    key={index}
                    bgColor={box.color}
                    width={box.width}
                    height={box.width}
                    />
                ))}
            </div>
        </div>
    );
};

export default BoxGenerator;