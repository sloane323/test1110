import Link from "next/link";
import { useState } from "react";
import style from '../styles/Home.module.css';

const about = () => {
    const [input, setInput] = useState("");

    return ( 
        <div className={style.main}> 
          <h2>  ABout Page 입니다 </h2>
          <p> 아래 input에 값을 넣으면 값이 바뀝니다. {input} </p>
          <input type='text' onChange ={(e)=>{setInput(e.target.value)}}/>
          <div> <Link href='/'> Main Page 로 이동하기 </Link> </div>
        </div>
     );
}
 
export default about;