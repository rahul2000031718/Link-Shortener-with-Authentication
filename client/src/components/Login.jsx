import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("coming")
        Axios.post('http://localhost:3000/login', {
            
            email: email, 
            password: password
        }).then((response) => {
            if(response.data.status){
                navigate('/home')
            }
            //console.log(response.data)
            
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>

                <h2>Login</h2>
                

                <label htmlFor="email"> Email:</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='*****'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Login</button>
                <p>Don't have an account?</p> <Link to= "/login">Sign Up</Link>
            </form>
        </div>
    )
}

export default Login