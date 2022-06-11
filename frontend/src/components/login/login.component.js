import React from 'react'
import styles from "./login.module.css"

function LoginComponent() {
    return (
        <div className={styles.majorContainer}>
            <div className={styles.loginContainer}>
                <h2>Welcome to Wokeye</h2>
                <div className={styles.inpCtn}>
                    <input type="email" placeholder="Email" className={styles.input}/>
                    <input type="email" placeholder="Password" className={styles.input}/>
                </div>
                <button className={styles.button}>Login</button>
            </div>
        </div>
    )
}

export default LoginComponent
