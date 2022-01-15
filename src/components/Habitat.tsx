import CellField from "components/CellField";
import {HabitatState} from "types";

import styles from './Habitat.module.css';


type HabitatProps = {
    data: HabitatState
    onCellClick: (x: number, y: number) => void
}

export default function Habitat(
    {data, onCellClick}: HabitatProps
) {
    return <div className={styles.root}>
        {data.map((row, y) => {
            return <div key={y} className={styles.row}>
                {row.map((cell, x) => {
                    return <CellField
                        key={x}
                        alive={cell == 1}
                        onClick={()=> onCellClick(x,y)}
                    />
                })}
            </div>;
        })}
    </div>
}