import {Cell} from "types";
import CellField from "components/CellField";

import styles from './Habitat.module.css';


type HabitatProps = {
    data: Cell[][]
    onCellClick: (x: number, y: number) => void
}

export default function Habitat(
    {data, onCellClick}: HabitatProps
) {
    return <div className={styles.root}>
        {data.map((row, y) => {
            return <div className={styles.row}>
                {row.map((cell, x) => {
                    return <CellField
                        alive={cell.alive}
                        onClick={()=> onCellClick(x,y)}
                    />
                })}
            </div>;
        })}
    </div>
}