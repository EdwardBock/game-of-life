
import styles from './CellField.module.css';

type CellFieldProps = {
    alive: boolean
    onClick: () => void
}

export default function CellField({alive, onClick}:CellFieldProps){
    return <div
        onClick={onClick}
        className={`${styles.cell} ${alive ? styles.life : styles.dead}`}
    />
}