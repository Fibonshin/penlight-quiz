import './Hinata.css';
import {Link} from 'react-router-dom';

function Hinata() {
  return (
    <div className='hinata'>
      <p>HINATA</p>
      <Link to="/">Home</Link>
      <br />
      <Link to="/hinata">hinata</Link>
    </div>
  );
}

export default Hinata;
