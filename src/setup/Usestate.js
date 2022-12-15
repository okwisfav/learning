import React from 'react'
import {data} from '../data'


const Usestate = () => {
    const [people, setPeople] = React.useState(data);
    
// for removing each word
    const removeItem =(id) => {
       let newPeople = people.filter((person)=> person.id !== id)
       setPeople(newPeople)  
    }
  return (
     <>
      {people.map((person) =>{
        const {id, name} = person
        return <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>removeItem</button>
        </div> ;
      })}
        <button className='btn' onClick={() => setPeople([])}>
            clear item
        </button>
     </>
  )
}

export default Usestate;