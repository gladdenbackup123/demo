function Time(){
    let time = new Date().toLocaleTimeString();
    return (
        <p>The current time is : {time}</p>
    )
}

export default Time;