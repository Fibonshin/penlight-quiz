import './Hinata.css';
import { IoArrowUndoSharp } from "react-icons/io5";
import { useState } from 'react';
import { Member } from './data';
import { MiniPenlight } from './svgs';
import SelectQuestions from './SelectQuestions';


function PenlightColorList({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<{member:Member,options:string[]}[]>([]);
  const [category,setCategory] =useState<string>("");


  return (
    <>
      {
        questionsData.length===0?
        <SelectQuestions setQuestionsData={setQuestionsData} setPage={setPage} setCategory={setCategory}/>
        :
        <>
          <div className="home-button">
            <div onClick={()=>setQuestionsData([])}>
              <IoArrowUndoSharp color='#363636' size='50px' />
            </div>
            
          </div>
          <div className="show-category">{category}</div>
          <table className='list-table'>
            <thead>
              <tr>
                <td>名前</td>
                <td>ペンライトカラー</td>
              </tr>
            </thead>
            <tbody>
              {
                questionsData.map((question,idx)=> (
                  <tr key={idx}>
                    <td>{question.member.name}</td>
                    <td id='penpen'>
                      <MiniPenlight lColor={question.member.color[0]} rColor={question.member.color[1]} borderColor="ホワイト"/>
                      {question.member.color[0]}<br/>✕ {question.member.color[1]}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <br />
        </>
      }
    </>
  );
}

export default PenlightColorList;
