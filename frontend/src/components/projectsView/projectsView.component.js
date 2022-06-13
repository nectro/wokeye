import React, { useState } from 'react'
import styles from './projectView.module.css'
import Logo from '../../assets/logo.svg'
import ModalComponent from '../modal/modal.component'

import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'

function ProjectsViewComponent() {
    const [modal, setModal] = useState(false)

    const createProject = ()=>{
        console.log("created!")
        setModal(false)
    }


    return (
        <div className={styles.majorContainer}>
            {
                modal &&
                <ModalComponent>
                    <div className={styles.projectForm}>
                        <h2>Create Project</h2>
                        <div className={styles.inpCtn}>
                            <input type="text" placeholder="Project Name" className={styles.input}/>
                        </div>
                        <button className={styles.button} onClick={()=>{createProject()}}>Create</button>
                    </div>
                </ModalComponent>
            }
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
                <div className={styles.addCard} onClick={()=>{setModal(true)}}>
                    <AiFillPlusCircle />
                    <h3>Create Project</h3>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectsViewComponent
