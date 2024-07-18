import {membersData,Member} from './membersData';
import { IoArrowUndoSharp } from "react-icons/io5";


function SelectQuestions({setQuestionsData,setPage}:{
  setQuestionsData:React.Dispatch<React.SetStateAction<Member[]>>,
  setPage:React.Dispatch<React.SetStateAction<number>>}) {
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
    <>
      <div className="homeButton">
        <div onClick={()=>setPage(0)}>
          <IoArrowUndoSharp color='black' size='50px' />
        </div>
      </div>
      <div className="category">ピックアップ</div>
      <button className='btn1' onClick={()=>onPlay([{key:"graduated",property:false}])}>全メンバー<br/>(28名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay([])}>全メンバー + 卒業メンバー<br/>(36名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay([{key:"term",property:4},{key:"graduated",property:false}])}>「４期生ライブ」メンバー<br/>(11名)</button>
      <div className="category">期別</div>
      <button className='btn1' onClick={()=>onPlay([{key:"term",property:1}])}>１期生メンバー<br/>(11名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay([{key:"term",property:2}])}>２期生メンバー<br/>(9名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay([{key:"term",property:3}])}>３期生メンバー<br/>(4名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay([{key:"term",property:4}])}>４期生メンバー<br/>(12名)</button>      
    </>
  )
}

export default SelectQuestions