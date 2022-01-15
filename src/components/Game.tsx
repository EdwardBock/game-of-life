import Habitat from "./Habitat";
import {useTimer} from "../hooks/use-timer";
import {useHabitatState} from "../hooks/use-habitat-state";

import styles from './Game.module.css';
import {buildHabitat} from "utils/habitat";
import Button from "components/Button";
import {useEffect, useState} from "react";
import SpeedSelection from "./SpeedSelection";
import {useMyPatternIds} from "../hooks/use-patterns";
import {patternLibrary} from "../model/patterms";
import {detectPattern} from "../utils/pattern";

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

    const [speed, setSpeed] = useState(300);

    const {
        isRunning,
        resume,
        pause,
    } = useTimer(()=>{
        evolve()
    }, speed);

    const {
        patternIds,
        addPatternId,
    } = useMyPatternIds();

    useEffect(()=> {
        const candidates = patternLibrary.filter(pattern => !patternIds.includes(pattern.id));
        const found = candidates.filter(pattern => {
            const isInState = detectPattern(habitatState, pattern);
            return isInState;
        });
        for (const pattern of found) {
            addPatternId(pattern.id);
        }
    }, [JSON.stringify(habitatState)]);

    return <div className={styles.root}>

        <div className={styles.controls}>
            <label>
                Evolution speed<br/>
                <SpeedSelection value={speed} onChange={setSpeed} />
            </label>
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

        <div>
            Explored patterns: {patternIds.length}
        </div>

    </div>
}