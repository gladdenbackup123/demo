import { useState } from "react";

function Toggle(){
    const [visible,setVisible] = useState(true);

    return (
        <div>
            <button onClick={()=>setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
            {visible && <p>This para is visible!</p>}
        </div>
    )
}

export default Toggle;