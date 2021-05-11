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


    // useEffect(() => {
    //     console.warn('Hellow from hooks')
    // },[])


    // useEffect(() => {
    //     console.warn('Check props for update hooks', props.name)
    // },[props.name])

    const [val, setVal] = useState("ravi");

    function test(e){
        console.warn('we', e.target.value);
        setVal(e.target.value);
    }
    
    // // or
    //  const test = () => {
    //     console.warn('we');
    //  }



    let data = "contact us component"
    return (
        <div>
            <h1>{data}</h1>
            {/* Arrow function binds it (console.warn or our logic) with onClick() 
            if we dont use arrow function then it will execute logic before the button is clicked or
            event has triggered ... so arrow functions binds it make sure that it will execute only if event
             is triggered.... output = We if we click on button but if we remove arrowFunction
             then output = we even without clicking on button ... so either use arrow function or function name(){
                 console.warn('we')
             } , we can also call a function in onClick but for that we have to use bind()            
             
             <button onClick={console.warn('we')}>Click me</button> - without click we'll get output
            <button onClick={() => {console.warn('we')}}>Click me</button> - after click output will come
             <button onClick={function ab(){console.warn('we')}}>Click me</button>  - after click output will come
              <button onClick={test}>Click me</button> - output will come after click
              we didnt use like test() coz for binding it with event we write only test
              if we use test() then it will give output before button clicked 
             */}

             <input tyep ="text" value = {val} onChange={test}></input>
             <button onClick={() => alert(val)}>Click me</button>
            






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