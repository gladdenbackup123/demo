import { useEffect, useState } from "react";

function TitleChange(){

    const [clicks,setClicks] = useState(0);

    useEffect(()=>{
        document.title = `Clicked ${clicks} times!`;
        console.log("You have clicked.")
    },[])

    return (
        <div>
            <h2>You have clicked {clicks} times!</h2>
            <button onClick={()=>setClicks(clicks+1)}>Click Me</button>
        </div>
    )
}

export default TitleChange;