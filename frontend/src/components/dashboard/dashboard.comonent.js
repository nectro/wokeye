import React, { useEffect } from 'react'
import styles from './dashboard.module.css'
import Logo from "../../assets/logo.svg"
import { AiFillEdit } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { SiGooglemeet } from 'react-icons/si'
import { AiFillCheckSquare } from 'react-icons/ai'
import { useParams } from "react-router-dom"

function DashboardComponent() {
    let params = useParams()

    useEffect(()=>console.log(params.projId),[])
    
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
                            Samaresh Sama..
                        </div>
                    </div>
                </div>
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
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent
