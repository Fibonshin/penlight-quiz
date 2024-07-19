import {membersData,Member} from './data';
import { IoArrowUndoSharp } from "react-icons/io5";
import { perfectMessages } from './data';

function SelectQuestions({setQuestionsData,setPage,setCategory,setPerfectMessasge}:{
  setQuestionsData:React.Dispatch<React.SetStateAction<{member:Member,options:string[]}[]>>,
  setPage:React.Dispatch<React.SetStateAction<number>>,
  setCategory:React.Dispatch<React.SetStateAction<string>>,
  setPerfectMessasge:React.Dispatch<React.SetStateAction<string>>,
  }) {
    
  function onPlay({filters,category}:{filters:{key:keyof Member,property:any}[],category:string}){
    setCategory(category);
    setPerfectMessasge(perfectMessages[Math.floor(Math.random()*perfectMessages.length)]);
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
          <IoArrowUndoSharp color='#363636' size='50px' />
        </div>
      </div>
      <div className="category">ピックアップ</div>
      <button className='btn1' onClick={()=>onPlay({filters:[{key:"graduated",property:false}],category:"全メンバー"})}>全メンバー<br/>(28名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay({filters:[],category:"全メンバー + 卒業メンバー"})}>全メンバー + 卒業メンバー<br/>(36名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay({filters:[{key:"term",property:4},{key:"graduated",property:false}],category:"「４期生ライブ」メンバー"})}>「４期生ライブ」メンバー<br/>(11名)</button>
      <div className="category">期別</div>
      <button className='btn1' onClick={()=>onPlay({filters:[{key:"term",property:1}],category:"１期生メンバー"})}>１期生メンバー<br/>(11名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay({filters:[{key:"term",property:2}],category:"２期生メンバー"})}>２期生メンバー<br/>(9名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay({filters:[{key:"term",property:3}],category:"３期生メンバー"})}>３期生メンバー<br/>(4名)</button>
      <br />
      <button className='btn1' onClick={()=>onPlay({filters:[{key:"term",property:4}],category:"４期生メンバー"})}>４期生メンバー<br/>(12名)</button>      
    </>
  )
}

export default SelectQuestions