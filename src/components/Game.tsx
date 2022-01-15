import Habitat from "./Habitat";
import {useTimer} from "../hooks/use-timer";
import {useHabitatState} from "../hooks/use-habitat-state";

import styles from './Game.module.css';
import {buildHabitat} from "utils/habitat";
import Button from "components/Button";

export default function Game(){

    const {
        state: habitatState,
        toggleCell,
        evolve,
    } = useHabitatState(
        buildHabitat(
            50,20,
            [{x:1,y:2},{x:1,y:3},{x:1,y:4}]
        )
    );

    const {
        isRunning,
        resume,
        pause,
    } = useTimer(()=>{
        evolve()
    }, 300);

    return <div className={styles.root}>

        <div className={styles.controls}>
            {isRunning ?
                <Button onClick={pause}>Pause</Button>
                :
                <Button onClick={resume}>Start</Button>
            }
        </div>

        <Habitat
            data={habitatState}
            onCellClick={(x,y)=>{
                toggleCell(x,y);
            }}
        />

    </div>
}