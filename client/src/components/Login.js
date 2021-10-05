import React,{ Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

export default class Login extends Component{
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      password: ''
    }}

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // console.log(user)
    axios.get("http://localhost:3000/api/users/login", { username:user.username, password:user.password },{
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then(res =>{
      // console.log(res.data)
      // debugger
      // console.log("data:", res.data)
    
      // this.props.history.push('/')
      
    }).catch(err =>{
      console.log("user and password combination is wrong")
      console.log(err)
    })


    // window.location = "/home"
  }
  
 render() {
    return (
        <div>

  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={6} md={4}>
      <div></div>
    </Col>
    <Col xs={6} md={4}>
        <h1>SBSCRPTNS</h1>
        <p>Track it, Don't Forget about it</p>
    </Col>
    <Col xl={10} md={4}>
    <div></div>
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4}>
    <div></div>
    </Col>
    <Col xs={6} md={4}>
    <div></div>
    </Col>
    <Col xs={6} md={4}>
    <div></div>
    </Col>
  </Row>
<div></div>
  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6} md={4}>
    <div></div>
    </Col>
    <Col xs={6} md={4}>
    <Form onSubmit={this.onSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="username" placeholder="Enter email" value={this.state.username} onChange={this.onChangeUsername}/>  
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
    </Form.Group>
  
    <Button variant="primary" onClick={this.onSubmit}>
      Submit
    </Button>
</Form>
    </Col>
    <Col xs={6} md={4}>
    <div></div>
    </Col>
  </Row>

        </div>
    )
}
}
