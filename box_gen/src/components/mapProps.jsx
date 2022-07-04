import React from 'react';

    
const Drinks = (props) => {
    
    return ( 
        <ul>
            { props.drinkList.map( (item, i) => 
                <li key={ i }>{ item }</li> ) }
        </ul>
    ); 
}
    
export default Drinks;