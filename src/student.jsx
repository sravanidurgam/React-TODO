import './index.css'
function Student(props){
     return(
      <div className='student'>
         <p>Name={props.name}</p>
    <p>Age={props.age}</p>
    <p>student={props.isstudent ? "yes" : "No" } </p>
    <p>college={props.college}</p>
      </div>
     );
   

}
export default Student