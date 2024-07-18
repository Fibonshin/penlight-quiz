import './Hinata.css';
import { IoArrowUndoSharp } from "react-icons/io5";
import {membersData,Member} from './membersData';
import { useState } from 'react';

function PenlightToMemberQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [questionsData,setQuestionsData] = useState<Member[]>([]);

  function onPlay(filters:{key:keyof Member,property:any}[]){
    const filteredMenbers=membersData.filter(function(member){
      return filters.filter(nowFilter =>{
        return member[nowFilter.key]!==nowFilter.property;
      }).length===0;
    })
    // const shuffledFilteredMembers:Member[]=[];
    // setQuestionsData(shuffledFilteredMembers);
    setQuestionsData(filteredMenbers);
  }
  
  return (
    <div className='hinata'>
      {
        questionsData.length===0 ?
        <>
          <div className="homeButton">
            <div onClick={()=>setPage(0)}>
              <IoArrowUndoSharp color='black' size='50px' />
            </div>
          </div>
          <button className='btn1' onClick={()=>onPlay([{key:"graduated",property:false}])}>全メンバー</button>
          <br />
          <button className='btn1' onClick={()=>onPlay([])}>全メンバー + 卒業メンバー</button>
          <br />
          <button className='btn1' onClick={()=>onPlay([{key:"term",property:4},{key:"graduated",property:false}])}>「４期生ライブ」メンバー</button>
        </>
        :
        <ol>
          {
            questionsData.map((question,idx)=> <li key={idx}>{question.name}</li>)
          }
        </ol>
      }
    </div>
  );
  // onClickで開始、メンバーの絞り込み、シャッフルをする。
  // 絞り込みの指定➔ [{"term",4},{"graduated",false}]
}

export default PenlightToMemberQuiz;