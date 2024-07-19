import { Color,transColor} from "./data";
function ColorPicker({currentAnswer,setCurrentAnswer,target}:{currentAnswer:{l: Color,r: Color},setCurrentAnswer:React.Dispatch<React.SetStateAction<{l: Color,r: Color}>>,target:'r'|'l'}) {
  return (
    <div className="color-picker">
      <ul>
        {
          (Object.keys(transColor) as (Color)[]).slice(1).map((color,idx)=>(
            <li key={idx}>
              <div 
              id={`a${target+idx}`} 
              className={`color-circle ${color==='ホワイト'?'circle-border':''} ${color===currentAnswer[target]?'selected-circle':''}`} 
              style={{backgroundColor:transColor[color]}}
              onClick={()=>setCurrentAnswer((prevAnswer)=>{
                const newAnswer={...prevAnswer};
                newAnswer[target]=color;
                return newAnswer;
              })}
              ></div>
            </li>
          ))
        }
        {
          (Object.keys(transColor) as (Color)[]).map((color,idx)=>(
            <li key={idx}>
              <div 
              id={`${target+idx}`} 
              className={`color-circle ${color==='ホワイト'?'circle-border':''} ${color===currentAnswer[target]?'selected-circle':''}`} 
              style={{backgroundColor:transColor[color]}}
              onClick={()=>setCurrentAnswer((prevAnswer)=>{
                const newAnswer={...prevAnswer};
                newAnswer[target]=color;
                return newAnswer;
              })}
              ></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ColorPicker