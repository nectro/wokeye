import React from 'react'
import styles from './modal.module.css'

function ModalComponent(props) {
    return (
        <div className={styles.majorContainer}>
            {props.children}
        </div>
    )
}

export default ModalComponent
