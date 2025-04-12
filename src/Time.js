import { useEffect, useState } from "react";
function Time(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])

    return (
        <h2>The current time is : {time}</h2>
    )
}

export default Time;