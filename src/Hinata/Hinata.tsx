import './Hinata.css';
import {Link, useNavigate} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

function Hinata() {
  const navigate=useNavigate();
  return (
    <div className='hinata'>
      <div className="homeButton">
        <Link to="/">
          <IoMdHome color='black' size='50px' />
        </Link>
      </div>
      <div className="title">
        <br />
        <p>日向坂46</p>
        <p>ペンライト</p>
        <p>QUIZ</p>
      </div>
      <button className='btn1' onClick={()=> navigate('/')}>メンバー➔ペンライトカラー<br />QUIZ</button>
      <button className='btn1' onClick={()=> navigate('/')}>ペンライト➔カラーメンバー<br />4択QUIZ</button>
      <button className='btn1' onClick={()=> navigate('/')}>ペンライトカラー<br />一覧表示</button>
    </div>
  );
}

export default Hinata;