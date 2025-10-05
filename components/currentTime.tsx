"use client"
import React, { useState, useEffect } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");

            setTime(`${hours}:${minutes}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <span className="font-bold ml-2">{time}</span>
    )
}

export default CurrentTime