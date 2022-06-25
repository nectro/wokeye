import React, {useEffect, useState} from 'react'
import styles from './taskView.module.css'
import { AiFillEdit } from 'react-icons/ai'
import { MdAddTask, MdMail } from 'react-icons/md'
import { SiGooglemeet } from 'react-icons/si'
import { AiFillCheckSquare } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'

import { useSelector } from 'react-redux'

import ModalComponent from '../modal/modal.component'
import axios from 'axios'
import { API_URI } from '../../constants/config.constant'

function TaskViewComponent({ fetchProjectData }) {
    const tasksList = useSelector(state=>state.taskList)
    const userId = useSelector(state=>state.user.data._id)
    const projId = useSelector(state=>state.project._id)
    const [modal, setModal] = useState(false)
    const [taskName, setTaskName] = useState()

    // useEffect(() => {
    //     console.log(tasksList)
    // }, [tasksList])

    const createTask = ()=>{
        if(!taskName){
            alert('enter the name of the task!')
        }else{
            const data = {
                taskName,
                userId
            }
            axios.post(`${API_URI}task/createTask/${projId}`, data)
                .then(res=>{
                    alert(res.data.msg)
                    fetchProjectData()
                }
                )
            setModal(!modal)
        }
    }
    return (
        <div>
            {
                modal &&
                <ModalComponent>
                    <div className={styles.projectForm}>
                        <h2>Create Project</h2>
                        <div className={styles.inpCtn}>
                            <input type="text" placeholder="Project Name" className={styles.input} onChange={(e)=>{setTaskName(e.target.value)}} />
                        </div>
                        <div>
                            <button className={styles.button} onClick={()=>{setModal(!modal)}}>Cancel</button>
                            <button className={styles.button} onClick={()=>{createTask()}}>Create</button>
                        </div>
                    </div>
                </ModalComponent>
            }
            <div className={styles.taskHolder}>
                {
                    tasksList &&
                    tasksList.map((task,index)=>
                            <div className={styles.card} key={index}>
                                <div className={styles.headerCtn}>
                                    <h3>{task.name}</h3>
                                    <AiFillEdit />
                                </div>
                                <div className={styles.detailsCtn}>
                                    <p>
                                        Study the design of the website and code it from scratch to full..
                                    </p>
                                </div>
                                <div className={styles.actionCtn}>
                                    <AiFillCheckSquare style={{color:'#2684FC'}}/>
                                    <SiGooglemeet style={{color:'blue'}}/>
                                    <MdMail style={{color:'#00AC47'}}/>
                                </div>
                                <h5>Members:</h5>
                                <div className={styles.membersCtn}>
                                    <div>
                                        <p>Samaresh Samanta</p>
                                    </div>

                                    <div>
                                        <p>Anubhav Bajpai</p>
                                    </div>

                                    <div>
                                        <p>Ankan Kundu</p>
                                    </div>

                                    <div>
                                        <p>Ankit</p>
                                    </div>

                                    <div>
                                        <p>Sahil</p>
                                    </div>
                                </div>
                            </div>
                        )
                }
                    <div className={styles.createCard} onClick={()=>{setModal(!modal)}}>
                        <AiFillPlusCircle />
                        Create Task
                    </div>
                </div>
        </div>
    )
}

export default TaskViewComponent
