import React,{useState} from 'react';
function ColorPicker(){
    const[color,setcolor]=useState("white");
    function updateColor(event) {
        setcolor(event.target.value);
    }
    return(
        <div className='colorpicker'>
           <h1>Colour Picker</h1>
           <div className='color-display' style={{backgroundColor:color}}>
           <p>selected colour :{color}</p>
           </div>
           <label>Select color</label>
           <input type="color" onChange={updateColor}/>
        </div>
    )
}
export default ColorPicker;