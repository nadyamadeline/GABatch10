import React,{useState} from 'react';
import removeCard from './BP_fans'

function FanCard(props){

    return(
        <div className='fan-card'>
            <h4>Fan {props.id}</h4>
            <h4>{props.name}</h4>
            <button onClick={() => removeCard(item.id) }>Remove me.</button>
        </div>
    )
}

export default FanCard;