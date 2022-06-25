import React from 'react'
import styles from './taskView.module.css'
import { AiFillEdit } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { SiGooglemeet } from 'react-icons/si'
import { AiFillCheckSquare } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'

function TaskViewComponent() {
    return (
        <div>
            <div className={styles.taskHolder}>
                    <div className={styles.card}>
                        <div className={styles.headerCtn}>
                            <h3>Frontend Develop</h3>
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
                    <div className={styles.createCard}>
                        <AiFillPlusCircle />
                        Create Task
                    </div>
                </div>
        </div>
    )
}

export default TaskViewComponent
