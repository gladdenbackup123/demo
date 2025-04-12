function Fruits({fruits}){

    return (
        <ul>
            {fruits.map((fruit)=> (
                <li>{fruit}</li>
            ))}
        </ul>
    )
}

export default Fruits;