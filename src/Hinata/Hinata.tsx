import './Hinata.css';
import {Link, useNavigate} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import MemberToPenglightQuiz from './MemberToPenglightQuiz';
import PenlightToMemberQuiz from './PenlightToMemberQuiz';
import PenlightColorList from './PenlightColorList';
import { useState } from 'react';

function Hinata() {
  const [page,setPage]=useState(0);
  const navigate=useNavigate();
  return (
    <div className='hinata'>
      {page===0 &&
      <>
        <div className="homeButton">
          <div>
            <Link to="/">
              <IoMdHome color='black' size='50px' />
            </Link>
          </div>
        </div>
        <div className="title">
          <br />
          <p>日向坂46</p>
          <p>ペンライト</p>
          <p>QUIZ</p>
        </div>
        <button className='btn1' onClick={()=> setPage(1)}>メンバー➔ペンライトカラー<br />QUIZ</button>
        <button className='btn1' onClick={()=> setPage(2)}>ペンライト➔カラーメンバー<br />4択QUIZ</button>
        <button className='btn1' onClick={()=> setPage(3)}>ペンライトカラー<br />一覧表示</button>
      </>
      }
      {page===1 && <MemberToPenglightQuiz setPage={setPage}/> }
      {page===2 && <PenlightToMemberQuiz setPage={setPage}/> }
      {page===3 && <PenlightColorList setPage={setPage}/> }
    </div>
  );
}

export default Hinata;