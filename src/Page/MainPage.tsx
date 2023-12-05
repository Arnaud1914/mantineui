import {Menu, Rating, Skeleton} from "@mantine/core";
import {useState} from "react";
import {Button, Popover, Text} from "@mantine/core";

export function MainPage() {

    const [loading, setLoading] = useState(true);
    return (
        <div>

            <h1>Welcome</h1>

            <h2>Rating of our website</h2>
            <Rating defaultValue={3.75} fractions={4} readOnly/>

            <h2>Your Rating</h2>
            <Rating defaultValue={2.5} fractions={4}/>
        </div>
    )
}