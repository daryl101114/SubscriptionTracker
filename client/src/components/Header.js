import React,{ Component } from 'react'
import "./Header.css"
import logo from '../assets/mySub.png';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this)
    }

    onClick(e){
        e.preventDefault();

        axios.get("http://localhost:5000/api/users/logout",{
            headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
        }).then(res =>{
            this.props.history.push('/login')
            
          }).catch(err =>{
            console.log("Something went wrong!")
            console.log(err)
          })
    }

    render(){
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
            {/* <Container>  */}
            <Navbar.Brand href="/login">
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            SBSCRPTNS
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link onClick={this.onClick}>Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
            
        </div>
    )
}
}


