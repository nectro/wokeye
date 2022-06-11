import React from 'react'
import styles from "./signup.module.css"
import { Link } from "react-router-dom"

function LoginComponent() {
    return (
        <div className={styles.majorContainer}>
            <div className={styles.loginContainer}>
                <h2>Welcome to Wokeye</h2>
                <div className={styles.inpCtn}>
                    <input type="text" placeholder="name" className={styles.input}/>
                    <input type="email" placeholder="Email" className={styles.input}/>
                    <input type="password" placeholder="Password" className={styles.input}/>
                </div>
                <button className={styles.button}>Signup</button>
                <p style={{margin:"0px",fontSize:14}}>Already have account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default LoginComponent
