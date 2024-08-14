import React,{useState} from 'react';
function Component(){
    const[car,setcar]=useState({
        Name:'Benz',
        color:'white',
        year:2017
        
    });
    function updateName(event){
      setcar(c=>({...c,Name:event.target.value}));
    }
    function updateColor(event){
       setcar(c=>({...c,color:event.target.value}));
    }
    function updateYear(event){
      setcar(c=>({...c,year:event.target.value}));
    }
    return(
        <div>
         <h2>CarName:{car.Name}</h2>
         <h2>CarColor:{car.color}</h2>
         <h2>CarYear:{car.year}</h2>
         <input type='text' value={car.color} onChange={updateColor}/><br/>
         <input type='text' value={car.Name} onChange={updateName}/><br/>
         <input type='number' value={car.year} onChange={updateYear}/>


        </div>
    )
}
export default Component;