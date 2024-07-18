import './Hinata.css';
import {Link,} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import MemberToPenglightQuiz from './MemberToPenglightQuiz';
import PenlightToMemberQuiz from './PenlightToMemberQuiz';
import PenlightColorList from './PenlightColorList';
import { useState } from 'react';

function Hinata() {
  const [page,setPage]=useState(0);
  return (
    <>
      {page===0 &&
      <>
        <div className="home-button">
          <div>
            <Link to="/">
              <IoMdHome color='#363636' size='50px' />
            </Link>
          </div>
        </div>
        <div className="title">
          <br />
          <p>日向坂46</p>
          <p>ペンライト</p>
          <p>QUIZ</p>
        </div>
        <button className='btn1' onClick={()=> setPage(2)}>ペンライト➔カラーメンバー<br />4択QUIZ</button>
        <br />
        <button className='btn1' onClick={()=> setPage(1)}>メンバー➔ペンライトカラー<br />QUIZ</button>
        <br />
        <button className='btn1' onClick={()=> setPage(3)}>ペンライトカラー<br />一覧表示</button>
        <div id='fibon'>
          developed by <a href="https://x.com/fiboooo_" target="_blank" rel="noreferrer noopener">fibon</a>
        </div>
      </>
      }
      {page===1 && <MemberToPenglightQuiz setPage={setPage}/> }
      {page===2 && <PenlightToMemberQuiz setPage={setPage}/> }
      {page===3 && <PenlightColorList setPage={setPage}/> }
    </>
  );
}

export default Hinata;