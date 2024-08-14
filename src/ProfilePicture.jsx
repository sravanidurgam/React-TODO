function ProfilePicture(){
  const imageurl='./src/assets/profile.jpg';
  const handClick =(e)=>e.target.style.display = "none";
  return(
  <img onClick={(e)=> handClick(e)} src={imageurl}></img>
  );
}
export default ProfilePicture;