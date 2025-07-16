import React,{useState} from 'react'

function MyComponents() {
    const [name,setName] = useState();
    const [quantity , setQuesntity] = useState();


    function handleNameChange(event){
       setName(event.target.value);
    }

    function handleQuesntityChange(event){
        setQuesntity(event.target.value);
    }

  return (
    <div>
      <input value={name} onChange={handleNameChange}/> 
      <p >name: {name}</p>

    <input value={quantity} onChange={handleQuesntityChange} type='number'/>
     <p >Quentity: {quantity}</p> 

    </div>
  )
}

export default MyComponents
