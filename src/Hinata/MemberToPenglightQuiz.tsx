import './Hinata.css';
import {Member,Color} from './data';
import { useEffect, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import SelectQuestions from './SelectQuestions';
import Editorial from './Editorial';
import Penlight from './svgs';
import { MiniPenlight ,Circle,Cross} from './svgs';
import { BsTwitterX } from "react-icons/bs";
import ColorPicker from './ColorPicker';

function MemberToPenglightQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<{member:Member,options:string[]}[]>([]);
  const [category,setCategory] =useState<string>("");
  const [inEditorial,setInEditorial] = useState(false);
  const [answers,setAnswers] =useState<{l:Color,r:Color}[]>([]);
  const [currentAnswer,setCurrentAnswer] = useState<{l:Color,r:Color}>({l:'パステルブルー',r:'パステルブルー'});
  const [paused,setPaused]=useState(false);
  const [centered,setCentered]=useState(false);
  const [judge,setJudge]=useState<null|boolean>(null);
  const [perfectMessage,setPerfectMessasge]=useState("");
  const questionNumber=answers.length;
  const questionSum=questionsData.length;
  let WAs:{question:{member:Member,options:string[]},answer:{l:Color,r:Color}}[]=[];

  if(!inEditorial && questionNumber===questionSum){
    WAs=questionsData.map((question,idx) => ({question:question,answer:answers[idx]})).filter((wj)=>
      (JSON.stringify(Object.values(wj.answer).sort()))!==JSON.stringify(wj.question.member.color.slice().sort())
    );
  }

  useEffect(()=>{
    if(centered)return;
    let targetL = document.getElementById('l2');
    let targetaL = document.getElementById('al2');
    let targetR = document.getElementById('r2');
    let targetaR = document.getElementById('ar2');
    if(targetL && targetR && targetaL && targetaR){
      targetaL.scrollIntoView();
      targetL.scrollIntoView();
      targetaR.scrollIntoView();
      targetR.scrollIntoView();
      setCentered(true);
    }
  });

  function handleJudge(){
    setJudge((JSON.stringify(Object.values(currentAnswer).sort()))===JSON.stringify(questionsData[questionNumber].member.color.slice().sort()));
    setTimeout(()=>{handleAnswer()},500);
  }

  function handleAnswer(){
    if((JSON.stringify(Object.values(currentAnswer).sort()))!==JSON.stringify(questionsData[questionNumber].member.color.slice().sort()))setInEditorial(true);
    setJudge(null);
    setCentered(false);
    setAnswers([...answers,currentAnswer]);
    setCurrentAnswer({l:'パステルブルー',r:'パステルブルー'})
  }
  return (
    <>
      {
        questionSum===0 ?
        <SelectQuestions setQuestionsData={setQuestionsData} setPage={setPage} setCategory={setCategory} setPerfectMessasge={setPerfectMessasge}/>
        :
        <>
          {
            paused && 
            <>
              <div className="cover-all" onClick={()=>setPaused(false)}>
              </div>
              <div className="ask-gohome">
                <h3>ホーム画面へ戻りますか？</h3>
                <button className='btn-no' onClick={()=>setPaused(false)}>いいえ</button>
                <button className='btn-yes' onClick={()=>setPage(0)}>はい</button>
              </div>
            </> 
          }
          <div className="home-button">
            <div onClick={()=>setPaused(true)}>
              <IoMdHome color='#363636' size='50px' />
            </div>
          </div>
          {
          inEditorial?
          <Editorial member={questionsData[questionNumber-1].member} idx={questionNumber} total={questionSum} toNext={()=>setInEditorial(false)}/>
          :
          questionNumber < questionSum?
          <>
          <div className="question">
            {judge!==null && (judge?<Circle/>:<Cross/>)}
            <div>{questionNumber+1}／{questionSum}</div>
            <h1>{questionsData[questionNumber].member.name}</h1>
            <br />
          </div>
          <Penlight lColor={currentAnswer.l} rColor={currentAnswer.r}/>
          <br />  
          <div className="color-text">
            <h4>{currentAnswer.l}</h4>
            <h4>{currentAnswer.r}</h4>
            <div className="lb-headline lbl">左</div>
            <div className="lb-headline lbr">右</div>
          </div>
          <ColorPicker currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} target='l'/>
          <ColorPicker currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} target='r'/>
          <button className={judge!==null?'disable-click':''} id="goto-answer" onClick={handleJudge}>答え合わせ</button>
          </>
          :
          <>
            <div className="question">
              <div></div>
              <div className="show-category">{category}</div>
              <h1 id="kekkahappyo-">{questionSum}問中<span id={(WAs.length===0 && questionSum >= 4) ? 'perfect':''}> {questionSum-WAs.length} </span>問正解</h1>
              {
                (WAs.length===0 && questionSum >= 4) &&
                <h2 id='perf-msg'>{perfectMessage}</h2>
              }
              <div className="lb-headline lb2">結果</div>
            </div>
            <button className='btn3' onClick={()=>{
              setAnswers([]);
              const prevQuestionData=questionsData.slice();
              const NextQuestionData:typeof questionsData=[];
              while(prevQuestionData.length > 0){
                const i=Math.floor(Math.random()*prevQuestionData.length);
                NextQuestionData.push(prevQuestionData[i]);
                prevQuestionData.splice(i,1);
              }
              setQuestionsData(NextQuestionData);
            }}>もう一度やる</button>
            <br /> 
            <button className='btn3' id="goto-home" onClick={()=>{setPage(0)} }>ホームに戻る</button>
            <br />
            <a className='share' href={`https://twitter.com/intent/tweet?text=☀️日向坂46ペンライトQUIZ☀️%0Aメンバー➔ペンライトカラーQUIZ【${category}】%0A%0A ${questionSum} 問中 ${questionSum-WAs.length} 問正解${WAs.length===0?'🎉':'！'}%0A&url=https://penlight-quiz.com/hinata&hashtags=日向坂46,ペンライトQUIZ`} target="_blank" rel="noreferrer noopener"><BsTwitterX size="17" /> 結果をシェア</a>
            {
              WAs.length !==0 &&
              <div className='wa-list'>
                {WAs.length !==0 && <div className="lb-headline lb3">間違えた問題</div>}
                <table className='tb1'>
                  <thead>
                    <tr>
                      <td>名前</td>
                      <td>答え</td>
                      <td>自分の回答</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      WAs.map((wa,idx)=> (
                        <tr key={idx}>
                          <td>{wa.question.member.name}</td>
                          <td id='penpen'>
                            <MiniPenlight lColor={wa.question.member.color[0]} rColor={wa.question.member.color[1]} height={30} borderColor="ホワイト"/>
                            {wa.question.member.color[0]}<br/>✕ {wa.question.member.color[1]}
                          </td>
                          <td id='penpen'>
                            <MiniPenlight lColor={wa.answer.l} rColor={wa.answer.r} height={30} borderColor="ホワイト"/>
                            {wa.answer.l}<br/>✕ {wa.answer.r}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <button className='btn4' onClick={()=>{
                  setQuestionsData(WAs.map((wa)=>wa.question));
                  setAnswers([]);
                }}>間違えた問題だけやる</button>
              </div>
            }

          </>
          }
        </>
      }
    </>
  );
}

export default MemberToPenglightQuiz;