import React, {useState} from 'react'
function MyComponent(){
     
    const[count,setCount]=useState(0);
    
    const[name,setname]=useState();
    
    const[student,statusStudent]=useState();
    
    const isstudent=()=>{
        statusStudent(!student)
    }


    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
    }
    const reset=()=>{
       setCount(0);
    }
    const updatename=()=>{
        setname("sravani");
    }
    return (
        <div>
        
            <p className='counter'>{count}</p>
            
            <div className='button'>
            
            
            <button className='increase' onClick={increase}>Increase</button>
            <button className='reset' onClick={reset}>Reset</button>
            <button className='decrease' onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}
export default MyComponent;