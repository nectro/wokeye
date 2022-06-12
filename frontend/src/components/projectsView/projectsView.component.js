import React from 'react'
import styles from './projectView.module.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function ProjectsViewComponent() {
    return (
        <div className={styles.majorContainer}>
            <div className={styles.header}>
                <img src={Logo} />
                <div className={styles.accDetails}>
                    <div className={styles.invite}>
                        Invite
                    </div>
                    <div className={styles.account}>
                        <div className={styles.miniAvatar}></div>
                        Welcome Samaresh Samanta
                    </div>
                </div>
            </div>
            <div className={styles.projectHolder}>
                <Link to="/projects/wokeye"  style={{ textDecoration: 'none' }}>
                    <div className={styles.card}>
                        <h2>Project Name</h2>
                        <h3>Members: 10</h3>
                        <h3>Tasks: 10</h3>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default ProjectsViewComponent
