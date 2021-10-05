import axios from "axios";
import React,{useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, isLoggedIn, setIsLoggedIn, ...props }) => {
    console.log(props)
    // debugger

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
       if(!isLoggedIn){
             axios.get("http://localhost:5000/api/users/isLoggedIn")
            .then(res =>{
                console.log(res)
                setIsLoggedIn(true)

                return <Route {...props} render={(props) => (
          
                <Component {...props} />

        )} />
            }).catch(err =>{
                return err
            })
       }

       else {
        return <Route {...props} render={(props) => (
     <Component {...props} />

        )} />
       }
    },[])
   
    
}

export default GuardedRoute;