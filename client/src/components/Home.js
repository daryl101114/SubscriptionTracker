import React,{ Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import axios from 'axios'

export default class Home extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/subscriptions/", {
            headers: {
                'Content-Type': 'application/json' 
            },

            withCredentials: true

        }).then(res => {

            console.log(res.data)

        }).catch(err =>{

            console.log(err)

        })
    }

    render(){
        return(
            <div>
                <h1>User Authneticated</h1>
            </div>
            
        )
    }
}
