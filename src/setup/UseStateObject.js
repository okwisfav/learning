import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
    name:'peter', 
    age:24, 
    message: 'random message',
});

const [name, setName] = useState('peter')
const [age, setAge] = useState(24)
const [message, setMessage] = useState('random message')
//change  the message only. 
const changeMessage =() => {
    // setPerson({...person, message:'random message'});
    setMessage('hello world');
}
   return(
     <>
       <h3>{name}</h3>
        <h3>{age}</h3>
       <h3>{message}</h3>
       <button className='btn' onClick={changeMessage}>
        changeMessage
       </button>
     </>
   )
}

export default UseStateObject