import {membersData,Member} from './membersData';
import { IoArrowUndoSharp } from "react-icons/io5";

function SelectQuestions({setQuestionsData,setPage}:{
  setQuestionsData:React.Dispatch<React.SetStateAction<{member:Member,options:string[]}[]>>, // ←TODO こいつに選択肢もいれる [{Member,[選択肢1,選択肢2,選択肢3,選択肢4]},]
  setPage:React.Dispatch<React.SetStateAction<number>>}) {
  function onPlay(filters:{key:keyof Member,property:any}[]){
    const filteredMenbers=membersData.filter(function(member){
      return filters.filter(nowFilter =>{
        return member[nowFilter.key]!==nowFilter.property;
      }).length===0;
    })
    const nextQuestionData=filteredMenbers.map((member)=>{
      const options:string[]=[];
      const filteredMenbersCopy=filteredMenbers.slice();
      while(options.length<3){
        const i=Math.floor(Math.random()*filteredMenbersCopy.length);

        // 井口眞緒と正源司陽子など、色の組み合わせが同じメンバーを選択肢に入れない。
        if(JSON.stringify(member.color.slice().sort())!==JSON.stringify(filteredMenbersCopy[i].color.slice().sort())){
          options.push(filteredMenbersCopy[i].name);
        }
        filteredMenbersCopy.splice(i,1);
      }
      options.splice(Math.floor(Math.random()*4),0,member.name);
      return {member:member,options:options};
    });
    
    const shuffledNextQuestionData:{member:Member,options:string[]}[]=[];
    while(nextQuestionData.length > 0){
      const i=Math.floor(Math.random()*nextQuestionData.length);
      shuffledNextQuestionData.push(nextQuestionData[i]);
      nextQuestionData.splice(i,1);
    }
    setQuestionsData(shuffledNextQuestionData);
  }

  return (
    <>
      <div className="home-button">
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