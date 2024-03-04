'use client'
import { useState } from "react";
export default function Btnclick() {
    let [time, setTime] = useState(0);
    const onclick = () => {
        setTime(++time);
    }
    return (
        <button onClick={() => onclick()}>กด {time}</button>
    );
}