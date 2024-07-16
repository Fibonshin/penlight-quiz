import './Hinata.css';
import {Link, useNavigate} from 'react-router-dom';
import { IoArrowUndoSharp } from "react-icons/io5";


function PenlightColorList({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const navigate=useNavigate();
  return (
    <div className='hinata'>
      <div className="homeButton">
        <div onClick={()=>setPage(0)}>
          <IoArrowUndoSharp color='black' size='50px' />
        </div>
      </div>
      <button className='btn1' onClick={()=> navigate('/')}>ペンライトカラー<br />一覧表示</button>
    </div>
  );
}

export default PenlightColorList;
