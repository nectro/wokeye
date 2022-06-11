import React from 'react'
import styles from './dashboard.module.css'
import Logo from "../../assets/logo.svg"

function DashboardComponent() {
    return (
        <div className={styles.majorContainer}>
            <div className={styles.sidebar}>
                <div className={styles.Ctn}>
                    <img src={Logo} />
                </div>
                <div className={styles.Ctn}>
                    <div className={styles.projectSelector}>
                        <div className={styles.signalHolder}>
                            <div style={{borderRadius:"100%",height:10,width:10,backgroundColor:"green"}}></div>
                        </div>
                        <select>
                            <option>Project Name</option>
                            <option>Project Name</option>
                            <option>Project Name</option>
                            <option>Project Name</option>
                            <option>Project Name</option>
                        </select>
                    </div>
                    <h2>Members</h2>
                    <div className={styles.membersContainer}>
                        <div className={styles.memberCard}>
                            <div className={styles.details}>
                                <div className={styles.imgCtn}>
                                    <div className={styles.avatar}>

                                    </div>
                                </div>
                                <div className={styles.memberDetails}>
                                    <h4>Samaresh Samanta</h4>
                                    <div>
                                        <p>Skills:</p>
                                        <p className={styles.box}>Html</p>
                                        <p className={styles.box}>Html</p>
                                        <p className={styles.box}>Html</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.status}>
                                <h5 style={{color:"green"}}>Assigned</h5>
                            </div>
                        </div>
                        <div className={styles.memberCard}>
                            <div className={styles.details}>
                                <div className={styles.imgCtn}>
                                    <div className={styles.avatar}>

                                    </div>
                                </div>
                                <div className={styles.memberDetails}>
                                    <h4>Samaresh Samanta</h4>
                                    <div>
                                        <p>Skills:</p>
                                        <p className={styles.box}>Html</p>
                                        <p className={styles.box}>Html</p>
                                        <p className={styles.box}>Html</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.status}>
                                <h5 style={{color:"green"}}>Assigned</h5>
                            </div>
                        </div>
                        <div className={styles.memberCard}>
                            <div className={styles.details}>
                                <div className={styles.imgCtn}>
                                    <div className={styles.avatar}>

                                    </div>
                                </div>
                                <div className={styles.memberDetails}>
                                    <h4>Samaresh Samanta</h4>
                                    <div>
                                        <p>Skills:</p>
                                        <p className={styles.box}>Html</p>
                                        <p className={styles.box}>Html</p>
                                        <p className={styles.box}>Html</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.status}>
                                <h5 style={{color:"red"}}>Not Assigned</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default DashboardComponent