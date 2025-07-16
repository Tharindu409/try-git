import React , {useState} from 'react';

function Counter() {
  const [count,setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1);
  }
  const decrement =()=>{
     setCount(count-1);
  }
  const rest=()=>{
    setCount(0);
  }
  return (
    <div className='counter-container'>
        <p className='count-dipslay'>{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={rest}>Reset</button>

        <button className='counter-button' onClick={increment}>increment</button>



    </div>
  );


}

export default Counter
