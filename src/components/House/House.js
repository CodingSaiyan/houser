import React from 'react';

function House(props) {
    return (
        <div>
           House Functional Component
           
           <h2>{props.house.name}</h2>
           <h3>{props.house.address}</h3>
           <h3>{props.house.city}</h3>
           <h3>{props.house.state}</h3>
           <h3>{props.house.zip}</h3>
           <button onClick={props.deleteHouse}>DELETE</button>
        </div>
    )
}

export default House