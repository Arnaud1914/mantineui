import {PinInput} from "@mantine/core";
import {useState} from "react";
import {MainPage} from "./Page/MainPage";

export function LoggedIn(){
    const [pinComplete, setPinComplete] = useState(false);
    const onComplete = () => {setPinComplete(true)}

    return(
        <div>
            <h1>Pin:</h1>
            {pinComplete ? (<MainPage/>) : (<PinInput type={/^[0-9]*$/} inputType="tel" inputMode="numeric" onComplete={onComplete} />)}
        </div>
    )
}