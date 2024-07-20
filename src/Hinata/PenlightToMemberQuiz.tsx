import './Hinata.css';
import {Member} from './data';
import { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import SelectQuestions from './SelectQuestions';
import Editorial from './Editorial';
import Penlight from './svgs';
import { MiniPenlight ,Circle,Cross} from './svgs';
import { BsTwitterX } from "react-icons/bs";

function PenlightToMemberQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<{member:Member,options:string[]}[]>([]);
  const [category,setCategory] =useState<string>("");
  const [inEditorial,setInEditorial] = useState(false);
  const [answers,setAnswers] =useState<string[]>([]);
  const [currentAnswer,setCurrentAnswer] = useState<null|string>(null);
  const [paused,setPaused]=useState(false);
  const [perfectMessage,setPerfectMessasge]=useState("");
  const questionNumber=answers.length;
  const questionSum=questionsData.length;
  let WAs:{question:{member:Member,options:string[]},answer:string}[]=[];

  if(!inEditorial && questionNumber===questionSum){
    WAs=questionsData.map((question,idx) => ({question:question,answer:answers[idx]})).filter((wj)=> wj.question.member.name!==wj.answer);
  }
  function handleJudge(myAnswer:string){
    setCurrentAnswer(myAnswer);
    setTimeout(()=> {setCurrentAnswer(null);handleAnswer(myAnswer)},500);
  }

  function handleAnswer(myAnswer:string){
    if(myAnswer!==questionsData[questionNumber].member.name)setInEditorial(true);
    setAnswers([...answers,myAnswer]);
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
              <div>{questionNumber+1}／{questionSum}</div>
              <Penlight lColor={questionsData[questionNumber].member.color[0]} rColor={questionsData[questionNumber].member.color[1]} borderColor="ホワイト"/>
              <h2 id='hoge3'><span>{questionsData[questionNumber].member.color[0]}</span><span> ✕ {questionsData[questionNumber].member.color[1]}</span></h2>
              {currentAnswer!==null && (currentAnswer===questionsData[questionNumber].member.name?<Circle/>:<Cross/>)}
              <div className="lb-headline lb1">選択肢</div>
            </div>
            {
              questionsData[questionNumber].options.map((op,idx)=>
                <div key={idx}>
                  <button className={`btn2 ${currentAnswer!==null?'disable-click':''} ${currentAnswer===op?'selected':''}`} onClick={()=>handleJudge(op)}>{op}</button>
                  <br />  
                </div>
              )
            }
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
              {WAs.length !==0 && <div className="lb-headline lb3">間違えた問題</div>}
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
            <a className='share' href={`https://x.com/intent/post?text=☀️日向坂46ペンライトQUIZ☀️%0Aペンライトカラー➔メンバー4択QUIZ【${category}】%0A%0A ${questionSum} 問中 ${questionSum-WAs.length} 問正解${WAs.length===0?'🎉':'！'}%0A&url=https://www.penlight-quiz.com/hinata&hashtags=日向坂46,ペンライトQUIZ`} target="_blank" rel="noreferrer noopener"><BsTwitterX size="17" /> 結果をシェア</a>
            {
              WAs.length !==0 &&
              <>
                <table>
                  <thead>
                    <tr>
                      <td>ペンライトカラー</td>
                      <td>答え</td>
                      <td>自分の回答</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      WAs.map((wa,idx)=> (
                        <tr key={idx}>
                          <td id='penpen'>
                            <MiniPenlight lColor={wa.question.member.color[0]} rColor={wa.question.member.color[1]} borderColor="ホワイト"/>
                            {wa.question.member.color[0]}<br/>✕ {wa.question.member.color[1]}
                          </td>
                          <td>{wa.question.member.name}</td>
                          <td>{wa.answer}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <button className='btn4' onClick={()=>{
                  setQuestionsData(WAs.map((wa)=>wa.question));
                  setAnswers([]);
                }}>間違えた問題だけやる</button>
              </>
            }
            
          </>
          }
        </>
      }
    </>
  );
}

export default PenlightToMemberQuiz;