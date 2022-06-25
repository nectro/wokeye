import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import Logo from "../../assets/logo.svg"
import Loader from "../../assets/loader.gif"
import { useParams, Routes, Route, useNavigate } from "react-router-dom"

import axios from 'axios'
import { API_URI } from '../../constants/config.constant'

import TaskViewComponent from '../taskView/taskView.component'

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import ModalComponent from '../modal/modal.component'

function DashboardComponent() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const projectList = useSelector(state=>state.projectList)
    const userName = useSelector(state=>state.user.data.name)

    const { setProject, setTaskList } = bindActionCreators(actionCreators, dispatch)
    const [loader, setLoader] = useState(false)

    const fetchProjectData = async ()=>{
        setLoader(true)
        await axios.get(`${API_URI}project/fetch/${params.projId}`)
            .then(res=>
                {
                    setProject(res.data.data)
                    const tasksReq = {
                        taskIds:res.data.data.tasks,
                    }
                    axios.post(`${API_URI}task/fetchAll/`, tasksReq)
                        .then(response=>{
                            setTaskList(response.data.data)
                            setLoader(false)}
                        )
                }
            )
    }

    useEffect(()=>{
        fetchProjectData()
    },[params.projId])

    const navigateProjects = (index) => {
            const projectId = projectList[index]._id
            navigate(`/projects/${projectId}`)
    } 
    
    return (
        <div className={styles.majorContainer}>
            {
                loader &&
                <ModalComponent>
                    <img src={Loader} className={styles.loader} />
                </ModalComponent>
            }
            <div className={styles.sidebar}>
                <div className={styles.Ctn}>
                    <img src={Logo} />
                </div>
                <div className={styles.Ctn}>
                    <div className={styles.projectSelector}>
                        <div className={styles.signalHolder}>
                            <div style={{borderRadius:"100%",height:10,width:10,backgroundColor:"green"}}></div>
                        </div>
                        <select onChange={(e)=>{navigateProjects(e.target.options.selectedIndex)}}>
                            {
                                projectList &&
                                projectList.map(proj=>
                                    <option key={proj._id}>{proj.name}</option>
                                    )
                            }
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
                                    <h5>Samaresh Samanta</h5>
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
                                    <h5>Samaresh Samanta</h5>
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
                                    <h5>Samaresh Samanta</h5>
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
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.pageSelector}>
                        <div className={styles.signalHolder}>
                            <div style={{borderRadius:"100%",height:10,width:10,backgroundColor:"green"}}></div>
                        </div>
                        <select>
                            <option>Dashboard</option>
                            <option>Documents</option>\
                        </select>
                    </div>
                    <div className={styles.accDetails}>
                        <div className={styles.invite}>
                            Invite
                        </div>
                        <div className={styles.account}>
                            <div className={styles.miniAvatar}></div>
                            Hello! {userName}
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<TaskViewComponent fetchProjectData={fetchProjectData}/>} />
                    <Route path="/document" element={<TaskViewComponent />} />
                </Routes>
            </div>
        </div>
    )
}

export default DashboardComponent
