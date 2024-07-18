import { Member } from "./data"

function Editorial(
    {member,idx,total,toNext}
    :{member:Member,idx:number,total:number,toNext:()=>void}
  ) {
  return (
    <>
      <div className="question" id="editorial">
        <div>{idx}／{total}</div>
        <h1>{member.name}</h1>
        ここにペンライトのイラストを挿入
        <h2><span>{member.color[0]}</span><span> ✕ {member.color[1]}</span></h2>
        <div className="lb-headline lb2">答え</div>
      </div>
      <button id="goto-next" onClick={toNext}>次に進む</button>
    </>
  )
}

export default Editorial