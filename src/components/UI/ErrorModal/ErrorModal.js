import React from 'react'
import Card from '../Card/Card'
import Button from '../Button/Button'
import styles from './ErrorModal.module.css'

function ErrorModal(props) {
    const closeHandler=()=>{
        props.onClose()
    }
    return (
        <div className={styles.backdrop} onClick={closeHandler}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
              <Button onClick={closeHandler}>Okay</Button>
            </footer>
        </Card>
        </div>
    )
}

export default ErrorModal;
