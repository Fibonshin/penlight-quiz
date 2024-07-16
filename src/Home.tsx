import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <p>HOME</p>
      <Link to="/">Home</Link>
      <br />
      <Link to="/hinata">hinata</Link>
    </div>
  );
}

export default Home;
