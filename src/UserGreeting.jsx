
function UserGreeting(props){
    const welcomemsg = <h2 className="welcome-msg">welcome {props.name}</h2>
    const loginmsg =   <h2 className="login-msg">please login to continue</h2>

    return (props.isloggedin ? welcomemsg : loginmsg);
    /*
  return (
    props.isloggedin ? 
    <h2 className="welcome-msg">welcome {props.name}</h2> : 
    <h2 className="login-msg">please login to continue</h2>
  )
    */
}
export default UserGreeting;