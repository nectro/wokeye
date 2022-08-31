import React, { useState, useEffect } from 'react'
import styles from './projectView.module.css'
import Logo from '../../assets/logo.svg'
import Loader from '../../assets/loader.gif'
import ModalComponent from '../modal/modal.component'

import { Link } from 'react-router-dom'
import { AiFillPlusCircle,AiFillCloseCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { API_URI } from '../../constants/config.constant'

import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

function ProjectsViewComponent() {
    const dispatch = useDispatch()

    const { setProjectList } = bindActionCreators(actionCreators, dispatch)
    
    const [modal, setModal] = useState(false)
    const [loader, setLoader] = useState(false)
    const [projName, setProjName] = useState(null)
    const [members, setMembers] = useState([])
    const [memberInp, setMemberInp] = useState("")
    const [projects, setProjects] = useState([])
    const userId = useSelector(state=>state.user.data._id)
    const userName = useSelector(state=>state.user.data.name)
    const userProjs = useSelector(state=>state.user.data.projects)

    // useEffect(()=>{
    //     console.log(projects)
    // },[projects])

    useEffect(()=>{
        setLoader(true)
        fetchProject(userProjs)
    },[userProjs])
    
    const fetchProject = (Ids)=>{
        axios.post(`${API_URI}project/fetchall/`, {projIds:Ids})
            .then(res=>{
                setProjects(res.data.data)
                setProjectList(res.data.data)
                setLoader(false)
            })
    }

    const createProject = ()=>{
        // console.log(`${projName}`)

        const data = {
            projectName:projName,
            members
        }

        console.log(data)

        axios.post(`${API_URI}project/createProject/${userId}`, data)
            .then((res)=>{
                alert(res.data.msg)
                fetchProject(userProjs)
            })

        setModal(false)
    }

    const deleteMember = (member)=>{
        let temp = []
        members.forEach(m => {
            if(m != member){
                temp.push(m)
            }
        })
        setMembers(temp)
    }


    return (
        <div className={styles.majorContainer}>
            {
                loader &&
                <ModalComponent>
                    <img src={Loader} className={styles.loader} />
                </ModalComponent>
            }
            {
                modal &&
                <ModalComponent>
                    <div className={styles.projectForm}>
                        <h2>Create Project</h2>
                        <div className={styles.inpCtn}>
                            <input type="text" placeholder="Project Name" className={styles.input} onChange={(e)=>{setProjName(e.target.value)}} />
                            <p>Add Members :</p>
                            <div className={styles.box}>
                                <div className={styles.nameHolder} style={{'borderBottom':'1px dashed #FFB830'}}>
                                    <input type="text" placeholder="Member Email" className={styles.innerInput} value={memberInp} onChange={(e)=>setMemberInp(e.target.value)}/>
                                    <button onClick={()=>{setMembers([...members, memberInp]);setMemberInp("")}}><b>+</b></button>
                                </div>
                                <div className={`${styles.nameHolder} ${styles.flexPropsC}`}>
                                    {
                                        members &&
                                        members.map(m=>
                                            <div className={styles.flexPropsH}>
                                                <p>
                                                    {m}
                                                </p>
                                                <AiFillCloseCircle onClick={()=>deleteMember(m)}/>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
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
                        Welcome {userName}
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
