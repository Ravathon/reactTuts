import React from 'react';

// Class component
class About extends React.Component{


    constructor(props){
        console.warn('Constructor is called when component is not created.')
        super(props);


        this.state = {
            name: 'ravi',
            age: 26
        }
    }

    componentDidMount(){
        console.warn('Component did mount.')
    }

    componentWillUnmount(){
        console.warn('Component will unmount.')
    }

    // on setState() - componentDidUpdate() is called
    componentDidUpdate(){
        console.warn('Component did update.')

        alert("Name is updated")
    }


    render(){
        return(
            <div>
                <h1>About us component</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>

                <button onClick={() => {this.setState({name: 'ravi rocks'})}}>Update State</button>
            </div>
        )
    }
}




export default About;