
import React from "react";
import styles from './Button.module.css';

type ButtonProps = {
    onClick: () => void
    children: React.ReactNode
}

export default function Button({onClick,children}:ButtonProps){
    return <button
        onClick={onClick}
        className={styles.button}
    >{children}</button>
}