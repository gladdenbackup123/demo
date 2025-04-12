function BadCounter() {
    let count = 0;

    const increment =()=>{
        count++;
        console.log(count);
    }

    return (
        <div>
            <h2>Bad Count : {count}</h2>
            <button onClick={increment}>Increase Count</button>
        </div>
    )
}

export default BadCounter;