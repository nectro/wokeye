import React, { useState } from 'react'

import styles from "./signup.module.css"
import { actionCreators } from '../../state'
import { API_URI } from '../../constants/config.constant'


import axios from 'axios'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {
    const dispatch = useDispatch()
    const { setUser } = bindActionCreators(actionCreators, dispatch)
    const navigate = useNavigate()

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const signup = ()=>{
        const details = {
            name:name,
            email:email,
            password:password
        }
        axios.post(`${API_URI}user/signup`, details)
            .then((res)=>{
                // console.log(res.data)
                alert(res.data.msg)
                setUser(res.data.data)
                navigate('/projects')
            })
            .catch(()=>alert('Network Error!'))
    }

    return (
        <div className={styles.majorContainer}>
            <div className={styles.loginContainer}>
                <h2>Welcome to Wokeye</h2>
                <div className={styles.inpCtn}>
                    <input type="text" placeholder="name" className={styles.input} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="Email" className={styles.input} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className={styles.input} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className={styles.button} onClick={()=>{signup()}}>Signup</button>
                <p style={{margin:"0px",fontSize:14}}>Already have account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default LoginComponent
