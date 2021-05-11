import React,{useState} from 'react';


function Users(){
    
    const [user, setUser] = useState([
        {name : 'ravi', age: '26', address: 'Canada'},
        {name : 'John', age: '16', address: 'Bhay'},
        {name : 'Peter', age: '20', address: 'Mira'},
        {name : 'Goku', age: '40', address: 'Goa'},
        {name : 'Luffy', age: '18', address: 'USA'},
    ]);
    
    return(
        <div>
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
        </div>
    )
}


export default Users;