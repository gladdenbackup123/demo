function UserCard({name,age,city}){
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Age : {age}</p>
            <p>City : {city}</p>
        </div>
    )
}

export default UserCard;

// props = {name,age,city}