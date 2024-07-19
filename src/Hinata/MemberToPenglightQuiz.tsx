import './Hinata.css';
import {Member} from './data';
import { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import SelectQuestions from './SelectQuestions';
import Editorial from './Editorial';
import Penlight from './svgs';
import { MiniPenlight ,Circle,Cross,Color} from './svgs';
import { BsTwitterX } from "react-icons/bs";

function MemberToPenglightQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<{member:Member,options:string[]}[]>([]);
  const [category,setCategory] =useState<string>("");
  const [inEditorial,setInEditorial] = useState(false);
  const [answers,setAnswers] =useState<{l:Color,r:Color}[]>([]);
  const [paused,setPaused]=useState(false);
  const [perfectMessage,setPerfectMessasge]=useState("");
  const questionNumber=answers.length;
  const questionSum=questionsData.length;
  let WAs:{question:{member:Member,options:string[]},answer:{l:Color,r:Color}}[]=[];
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
          <Penlight lColor={questionsData[questionNumber].member.color[0]} rColor={questionsData[questionNumber].member.color[1]}/>
          <br />  
          <div className="color-text">
            <h4>{questionsData[questionNumber].member.color[0]}</h4>
            <h4>{questionsData[questionNumber].member.color[1]}</h4>
          </div>
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