import './Hinata.css';
import { IoArrowUndoSharp } from "react-icons/io5";
import { useState } from 'react';
import { Member,membersData} from './data';
import { MiniPenlight } from './svgs';


function PenlightColorList({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const [category,setCategory] =useState<string>("");
  const [currentMembers,setCurrentMembers]=useState<Member[]>([]);

  function onPlay({filters,category}:{filters:{key:keyof Member,property:any}[],category:string}){
    setCategory(category);
    setCurrentMembers(membersData.filter(function(member){
      return filters.filter(nowFilter =>{
        return member[nowFilter.key]!==nowFilter.property;
      }).length===0;
    }));
  }

  return (
    <>
      {
        currentMembers.length===0?
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
        :
        <>
          <div className="home-button">
            <div onClick={()=>setCurrentMembers([])}>
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
                currentMembers.map((member,idx)=> (
                  <tr key={idx}>
                    <td>{member.name}</td>
                    <td id='penpen'>
                      <MiniPenlight lColor={member.color[0]} rColor={member.color[1]} height={38} borderColor="ホワイト"/>
                      {member.color[0]}<br/>✕ {member.color[1]}
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
