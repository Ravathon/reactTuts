// useEffect is used for hooks which are used to get function lifeCycle.
import React,{useEffect, useState} from 'react';

// Function component
// to get props in function we have to pass it in parameter
function Contact(props){


    // STATES
    // useState is used to set the state ---- name = var and setName = method to update it
//    const [name, setName]= useState("rav");
//    const [age, setAge]= useState(26);
    // whenever our function is made or rendered into screen this method will be called
    // things we are not able to use in function but able to use in class can be used in fucntion using
    // hooks like - state or lifecycle
    // we passed [] so that this will not called on every button clicked
    // this will be called only once
    // now if we want this method to be called only if age is changed then we can pass [age]
    useEffect(() => {
        console.warn('Hellow from hooks')
    },[])


    useEffect(() => {
        console.warn('Check props for update hooks', props.name)
    },[props.name])
    let data = "contact us component"
    return (
        <div>
            <h1>{data}</h1>
            <h2>{props.name}</h2>

            {/* // STATE */}
            {/* <h1>{data}</h1>
            <h2>Hellow {name}</h2>
            <button onClick={() => setName("ravian")}>Update Name</button>
            <h2>{age}</h2>
            <button onClick={() => setAge(30)}>Update Age</button> */}
        </div>
    )
}


export default Contact;