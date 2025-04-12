import { useEffect, useState } from "react";

function GoodCounter() {
    const [count,setCount] = useState(0); 

    useEffect(()=>{
        alert("Your count is "+count)

    },[count]) 

    return (
        <div>
            <h2>Good Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        </div>
    )
}

export default GoodCounter;