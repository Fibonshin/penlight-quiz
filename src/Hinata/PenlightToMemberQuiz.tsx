import './Hinata.css';
import {Member} from './membersData';
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
import SelectQuestions from './SelectQuestions';

function PenlightToMemberQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<Member[]>([]);
  
  return (
    <div className='hinata'>
      {
        questionsData.length===0 ?
        <SelectQuestions setQuestionsData={setQuestionsData} setPage={setPage} />
        :
        <>
          <div className="homeButton">
            <div onClick={()=>setPage(0)}>
              <IoIosMenu color='black' size='50px' />
            </div>
          </div>
          <table>
            {
              questionsData.map((question,idx)=> 
              <tr key={idx}>
                <td>{idx}</td>
                <td>{question.name}</td>
                <td>{question.color[0]}</td>
                <td>{question.color[1]}</td>
              </tr>)
            }
          </table>
        </>
      }
    </div>
  );
}

export default PenlightToMemberQuiz;