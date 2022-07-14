import React, {useState} from "react";

const FruitForm = props => {
    const [selectedFruit, setSelectedFruit] = useState(props.fruits[0]);
    const [isTasty, setIsTasty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`The ${selectedFruit} is ${isTasty ? '' : 'not'} tasty.`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <select 
            value={selectedFruit}
            onChange={e => setSelectedFruit(e.target.value)}>
                {props.fruits.map((fruit,index) => 
                    <option 
                    key={index}
                    value={fruit}>
                        {fruit}
                    </option>
                )}
            </select>
            <label>
                <input type="checkbox" 
                checked={isTasty} 
                onChange={e => setIsTasty(e.target.checked)}/>
                Is it Tasty?
            </label>
            <button>Take a Bite!</button>
        </form>
    );
}

export default FruitForm;