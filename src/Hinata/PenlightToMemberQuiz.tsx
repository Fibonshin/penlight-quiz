import './Hinata.css';
import {useNavigate} from 'react-router-dom';
import { IoArrowUndoSharp } from "react-icons/io5";
import TransYaml from '../TransYaml';


function PenlightToMemberQuiz({setPage}:{setPage:React.Dispatch<React.SetStateAction<number>>}) {
  const navigate=useNavigate();
  return (
    <div className='hinata'>
      <div className="homeButton">
        <div onClick={()=>setPage(0)}>
          <IoArrowUndoSharp color='black' size='50px' />
        </div>
      </div>
      <button className='btn1' onClick={()=> navigate('/')}>ペンライト➔カラーメンバー<br />4択QUIZ</button>
      <TransYaml yamlPath='Hinata/data.yml'/>
    </div>
  );
}

export default PenlightToMemberQuiz;