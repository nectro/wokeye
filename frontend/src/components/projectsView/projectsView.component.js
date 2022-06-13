import React, { useState, useEffect } from 'react'
import styles from './projectView.module.css'
import Logo from '../../assets/logo.svg'
import ModalComponent from '../modal/modal.component'

import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { API_URI } from '../../constants/config.constant'

function ProjectsViewComponent() {
    const [modal, setModal] = useState(false)
    const [projName, setProjName] = useState(null)
    const [projects, setProjects] = useState([])
    const userId = useSelector(state=>state.user.data._id)
    const userProjs = useSelector(state=>state.user.data.projects)

    // useEffect(()=>{
    //     console.log(projects)
    // },[projects])

    useEffect(()=>{
        axios.post(`${API_URI}project/fetchall/`, {projIds:userProjs})
            .then(res=>{
                setProjects(res.data.data)
            })
    },[userProjs]) 

    const createProject = ()=>{
        // console.log(`${projName}`)

        const data = {
            projectName:projName,
        }

        axios.post(`${API_URI}project/createProject/${userId}`, data)
            .then((res)=>{
                alert(res.data.msg)
                setProjects([...projects, res.data.data])
            })

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
                            <input type="text" placeholder="Project Name" className={styles.input} onChange={(e)=>{setProjName(e.target.value)}} />
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
                {
                    projects.map(proj=>(
                            <Link to={`/projects/${proj._id}`}  style={{ textDecoration: 'none' }} key={proj._id}>
                                <div className={styles.card}>
                                    <h2>{proj.name}</h2>
                                    <h3>Members: {proj.members.length}</h3>
                                    <h3>Tasks: {proj.tasks.length}</h3>
                                </div>
                            </Link>)
                        )
                }
                <div className={styles.addCard} onClick={()=>{setModal(true)}}>
                    <AiFillPlusCircle />
                    <h3>Create Project</h3>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectsViewComponent
