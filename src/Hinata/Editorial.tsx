import { Member } from "./data"
import Penlight from './Penlight';

function Editorial(
    {member,idx,total,toNext}
    :{member:Member,idx:number,total:number,toNext:()=>void}
  ) {
  return (
    <>
      <div className="question" id="editorial">
        <div>{idx}／{total}</div>
        <h1 id="hoge1">{member.name}</h1>
        <Penlight lColor={member.color[0]} rColor={member.color[1]} borderColor="ホワイト" size={107} />
        <h2 id="hoge2"><span>{member.color[0]}</span><span> ✕ {member.color[1]}</span></h2>
        <div className="lb-headline lb2">答え</div>
      </div>
      <button id="goto-next" onClick={toNext}>次に進む</button>
    </>
  )
}

export default Editorial