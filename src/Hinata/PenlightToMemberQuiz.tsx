import './Hinata.css';
import {Member} from './membersData';
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
import SelectQuestions from './SelectQuestions';

function PenlightToMemberQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<Member[]>([]);
  const [results,setResults] =useState<boolean[]>([]);
  const questionNumber=results.length;
  return (
    <div className='hinata'>
      {
        questionsData.length===0 ?
        <SelectQuestions setQuestionsData={setQuestionsData} setPage={setPage} />
        :
        <>
          <div className="home-button">
            <div onClick={()=>setPage(0)}>
              <IoIosMenu color='black' size='50px' />
            </div>
          </div>
          <div className="question">
            <div>{questionNumber+1}／{questionsData.length}</div>
            ここにペンライトのイラストを挿入
            <h2><span>{questionsData[questionNumber].color[0]}</span><span> ✕ {questionsData[questionNumber].color[1]}</span></h2>
          </div>
          
        </>
      }
    </div>
  );
}

export default PenlightToMemberQuiz;