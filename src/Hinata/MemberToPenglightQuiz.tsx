import './Hinata.css';
import {Member,Color,transColor} from './data';
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
  const [perfectMessage,setPerfectMessasge]=useState("");
  const questionNumber=answers.length;
  const questionSum=questionsData.length;
  let WAs:{question:{member:Member,options:string[]},answer:{l:Color,r:Color}}[]=[];

  useEffect(()=>{
    if(centered)return;
    let targetL = document.getElementById('l2');
    let targetR = document.getElementById('r2');
    if(targetL && targetR){
      targetL.scrollIntoView();
      targetR.scrollIntoView();
      setCentered(true);
    }
  });

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
          </>
          :
          <>
          </>
          }
        </>
      }
    </>
  );
}

export default MemberToPenglightQuiz;