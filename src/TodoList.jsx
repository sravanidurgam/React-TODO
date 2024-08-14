import React,{useState} from 'react';
function TodoList(){
    const[tasks,setTasks]=useState(["wake up at 6AM","Go to jogging","Eating Breakfast"]);
    const[newtask,setnewTask]=useState("")
    
    function updateTask(event){
       setnewTask(event.target.value)
    }
    function addTask(){
       if(newtask.trim() != ""){
        setTasks(t =>[...t,newtask]);
        setnewTask("");
       }
    }
    function deleteTask(index){
      const updatedtasks=tasks.filter((ele,i)=> i !== index);
      setTasks(updatedtasks);
    }
    function moveTaskUp(index){
       if(index > 0){
         const updatedtasks =[...tasks];
          [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]]
          setTasks(updatedtasks);

       }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedtasks =[...tasks];
             [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]]
             setTasks(updatedtasks);
   
          }
    }
    return (
        <div className='todo-list'>
        <h1>To Do List App</h1>
        <div>
        <input className='inputType' type="text" placeholder='Enter your Task here' value={newtask} onChange={updateTask}/>
        <button className='add-button' onClick={addTask}>ADD</button>
        
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                <button className='up-button' onClick={()=>moveTaskUp(index)}>UP</button>
                <button className='down-button' onClick={()=>moveTaskDown(index)}>Down</button>

                </li>
            )}
        </ol>
        </div>
    )
}
export default TodoList;