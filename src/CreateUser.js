import React, {useState} from 'react';

function CreateUser(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    function makeUser(){
        let data = {name,age,address};
        // use , so that will print value of object
        // if we use + data ==== then output will be object object not the data present inside the object
        console.warn('MAke User fucntion', data);
    }

    return(
        <div>
            <h1>Make a new user</h1>
            {/* We Can create <form> but in react its good not to do using form tag and follow the below given
            standard */}
            {/* onchange we are reading value from event setting in state so that we can render that value */} 
            <input type="text" onChange={(e) => setName(e.target.value)} name= "username" value = {name}></input> <br/>
            <input type="text" onChange={(e) => setAge(e.target.value)} name= "age" value ={age}></input> <br/>
            <input type="text" onChange={(e) => setAddress(e.target.value)} name= "address" value ={address}></input> <br/>

            <button onClick={makeUser}>Create User</button>
        </div>
    )
}


export default CreateUser;