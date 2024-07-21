import './Sakura.css';
import {Link,} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import MemberToPenglightQuiz from './MemberToPenglightQuiz';
import PenlightToMemberQuiz from './PenlightToMemberQuiz';
import PenlightColorList from './PenlightColorList';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

function Sakura() {
  const [page,setPage]=useState(0);
  return (
    <div className='sakura'>
      <Helmet>
        <html className='sakura-html'/>
        <meta name="theme-color" content="#FFF" />
        <link rel="icon" href="https://penlight-quiz.com/sakura-favicon.ico" />
        <meta
          name="description"
          content="櫻坂46メンバーのペンライトカラーを2種類のクイズで覚えることができるサイトです!!"
        />
        <meta property="og:title" content="櫻坂46ペンライトQUIZ" />
        <meta property="og:description" content="櫻坂46メンバーのペンライトカラーを2種類のクイズで覚えることができるサイトです!!" />
        <meta property="og:image" content="https://penlight-quiz.com/sakura-og-image.png" />
        <meta property="og:url" content="https://penlight-quiz.com/sakura" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" href="https://penlight-quiz.com/sakura-logo192.png" />
        <link rel="manifest" href="https://penlight-quiz.com/manifest.json" />
        <title>櫻坂46ペンライトQUIZ</title>
      </Helmet>
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
          <p>櫻坂46</p>
          <p>ペンライト</p>
          <p>QUIZ</p>
        </div>
        <button className='btn1' onClick={()=> setPage(2)}>ペンライトカラー➔メンバー<br />4択QUIZ</button>
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
    </div>
  );
}

export default Sakura;