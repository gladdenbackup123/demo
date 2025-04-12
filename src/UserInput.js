import { useState } from "react";

function UserInput(){
    const [text,setText] = useState(''); // text="hell"
    return (
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>

            <p>You typed : {text}</p>
        </div>
    )
}

export default UserInput;