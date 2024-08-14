import profile from './assets/profile.jpg';
import './index.css'; 

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profile} alt="profile picture" />
      <h2 className="card-title">Sravani Durgam</h2>
      <p className="card-text">Studying final engineering in stream of computer science</p>
    </div>
  );
}

export default Card;
