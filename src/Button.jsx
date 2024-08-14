function Button(){

const handclick = (e) => e.target.textContent = "sorry !!";
 return(<button onClick= {(e) => handclick(e)}>clickme</button>)
}
export default Button;