import React, { useState, Fragment, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';


function Users() {

    const [user, setUser] = useState([]


         // we will fetch actual data using API
    //     [
    //     { name: 'ravi', age: '26', address: 'Canada' },
    //     { name: 'John', age: '16', address: 'Bhay' },
    //     { name: 'Peter', age: '20', address: 'Mira' },
    //     { name: 'Goku', age: '40', address: 'Goa' },
    //     { name: 'Luffy', age: '18', address: 'USA' },
    // ]
    );



    // hook for restCall api to fetch detail as soon as our functional component load onto screen
    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((data) => {
            data.json().then((result) => {
                console.warn("result", result);
                setUser(result.data);
            })
        })
    },[])


    return (

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


            {/* <Button variant="primary">Primary</Button>{' '} */}




            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        user.map((item,i) => <tr key={i}>
                                 <td>{item.id}</td>
                                 <td>{item.employee_name}</td>
                                 <td>{item.employee_salary}</td>
                                 <td>{item.employee_age}</td>
                             </tr>)


                        // We will fetch using API
                        // user.map((item,i) => 
                        //     <tr key={i}>
                        //         <td>{i}</td>
                        //         <td>{item.name}</td>
                        //         <td>{item.age}</td>
                        //         <td>{item.address}</td>
                        //     </tr>
                        // )
                    }
                </tbody>
            </Table>

            {/* Conditions */}
            {/* {
                user.length===5?<div>Yes, this is right </div>:<div>No, this is wrong</div> 
            } */}


            {/* LIST */}
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