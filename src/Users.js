import React,{useState, Fragment} from 'react';


function Users(){
    
    const [user, setUser] = useState([
        {name : 'ravi', age: '26', address: 'Canada'},
        {name : 'John', age: '16', address: 'Bhay'},
        {name : 'Peter', age: '20', address: 'Mira'},
        {name : 'Goku', age: '40', address: 'Goa'},
        {name : 'Luffy', age: '18', address: 'USA'},
    ]);
    
    return(

        // if we want not to get div tag then we can use
        // like <> </> - this is a way of writing tag
        // this is called fragment where our extra element tag are excluded
        // another way is instrad of <> and </> we can use <Fragment></fragment> 
        // this will also not show our tag in element section of inspect
        // we will have outp like 
        // <h1> not <div> <h1>
        // we remove extra div or element using fragment
        // ex now in inspect ==> element section under html tags
        // our extra div tag will be removed only 1 main div of app will come
        // not div of this component as we replaced it using fragment
        // so fragment is used to remove extra tags or elements
        // either use fragment or empty <>
        <Fragment>
            <h1>
                User Listing is here
            </h1>


            {
                user.length===5?<div>Yes, this is right </div>:<div>No, this is wrong</div> 
            }



            {/* {
                user.map((item, i) => 
                // key is for uniqueness
                    <div key={i}>
                        <span>{item.name}</span>, 
                        <span>{item.age}</span> , 
                        <span>{item.address}</span>
                    </div>
                )
            } */}
        </Fragment>
    )
}


export default Users;