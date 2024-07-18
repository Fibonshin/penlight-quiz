import './Hinata.css';
import {Member,perfectMessage} from './data';
import { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import SelectQuestions from './SelectQuestions';
import Editorial from './Editorial';
import Penlight from './Penlight';
import { BsTwitterX } from "react-icons/bs";

function PenlightToMemberQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<{member:Member,options:string[]}[]>([]);
  const [category,setCategory] =useState<string>("");
  const [inEditorial,setInEditorial] = useState(false);
  const [answers,setAnswers] =useState<string[]>([]);
  const questionNumber=answers.length;
  const questionSum=questionsData.length;
  let WAs:{question:{member:Member,options:string[]},answer:string}[]=[];

  if(!inEditorial && questionNumber===questionSum){
    WAs=questionsData.map((question,idx) => ({question:question,answer:answers[idx]})).filter((wj)=> wj.question.member.name!==wj.answer);
  }

  function handleAnswer(myAnswer:string){
    if(myAnswer!==questionsData[questionNumber].member.name)setInEditorial(true);
    setAnswers([...answers,myAnswer]);
  }
  return (
    <>
      {
        questionSum===0 ?
        <SelectQuestions setQuestionsData={setQuestionsData} setPage={setPage} setCategory={setCategory}/>
        :
        <>
        <div className="home-button">
          <div onClick={()=>setPage(0)}>
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
            </div>
            <div className="lb-headline">選択肢</div>
            {
              questionsData[questionNumber].options.map((op,idx)=>
                <div key={idx}>
                  <button className='btn2' onClick={()=>handleAnswer(op)}>{op}</button>
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
                <h2 id='perf-msg'>{perfectMessage[Math.floor(Math.random()*perfectMessage.length)]}</h2>
              }
              <div className="lb-headline lb2">結果</div>
            </div>
            <button className='btn3' onClick={()=>{
              setAnswers([]);
              const prevQuestionData=questionsData.slice();
              const NextQuestionData:{member:Member,options:string[]}[]=[];
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
            <a className='share' href={`https://x.com/intent/post?text=日向坂46ペンライトQUIZ【${category}】%0A ${questionSum} 問中 ${questionSum-WAs.length} 問正解！&url=https://www.penlight-quiz.com/hinata&hashtags=日向坂46,ペンライトQUIZ`} target="_blank" rel="noreferrer noopener"><BsTwitterX size="17" /> 結果をシェア</a>
            {
              WAs.length !==0 &&
              <>
                <div className="lb-headline lb3">間違えた問題</div>
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
                          <td>{wa.question.member.color[0]}<br/>✕ {wa.question.member.color[1]}</td>
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