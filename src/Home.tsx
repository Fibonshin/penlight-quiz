import './Home.css';
import {useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet';


function Home() {
  const navigate=useNavigate();
  return (
    <div className='home'>
    <Helmet>
      <html className='home-html'/>
      <meta name="theme-color" content="#E5E5E5" />
      <link rel="icon" href="https://penlight-quiz.com/favicon.ico" />
      <meta
        name="description"
        content="各坂道のメンバーのペンライトカラーを2種類のクイズで覚えることができるサイトです!!"
      />
      <meta property="og:title" content="ペンライトQUIZ" />
      <meta property="og:description" content="各坂道のメンバーのペンライトカラーを2種類のクイズで覚えることができるサイトです!!" />
      <meta property="og:image" content="https://penlight-quiz.com/og-image.png" />
      <meta property="og:url" content="https://penlight-quiz.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="apple-touch-icon" href="https://penlight-quiz.com/logo192.png" />
      <link rel="manifest" href="https://penlight-quiz.com/manifest.json" />
      <title>ペンライトQUIZ</title>
    </Helmet>
    <div className="space"></div>
    <div className="title">
          <br />
          <p>ペンライト</p>
          <p>QUIZ</p>
        </div>
    <button id='sakura' onClick={()=> navigate("/sakura")}>櫻坂46</button>
    <br />
    <button id='nogi' onClick={()=> navigate("/nogi")}>乃木坂46</button>
    <br />
    <button id='hinata' onClick={()=> navigate("/hinata")}>日向坂46</button>
    <div id='fibon'>
      developed by <a href="https://x.com/fiboooo_" target="_blank" rel="noreferrer noopener">fibon</a>
    </div>
    </div>
  );
}

export default Home;
