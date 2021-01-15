import React, {useState} from 'react';
import FanCard from './BP_fanCard'

const Fans = () => {

const Fan = []
const [data, setData] = useState(Fan);
const [name, setName] = useState('');

// track input state
function changeHandler(event) {
    setName(event.target.value);
  }

// add fans
const addCard = () => {
   const newData = {
       id: data.length+1,
       name
   }
   const newArr=[...data];
   let result = newArr.concat(newData); // react can't use push & pop
   setData(result);
   setName('');
}

// delete fans
const removeCard = (id) => {
    const newArr=[...data];
    const result = newArr.filter((item) => item.id !== id);
    setData(result);
}


return(
    <div className='fan'>
        <h1>Are You a Fan?</h1>
        <input type="text" value={name} onChange={changeHandler} placeholder='Enter your name!'/>
        <button onClick={addCard}>Add me!</button>
        
        
        <div className='fc-display'>
        {data.map((item)=>(
            <ul>
                <li key={item.id}>
                    {/* Start card component */}
                    
                {/* <div className='fan-card'>
            <h4>Fan {item.id}</h4>
            <h4>{item.name}</h4>
            <button onClick={()=>removeCard(item.id)}>Remove me.</button>
        </div> */}
        
        {/* End card component */}

        <FanCard id={item.id} name={item.name}/>
                </li>
            </ul>
        ))}
        </div>
        
    </div>
)

}

export default removeCard;