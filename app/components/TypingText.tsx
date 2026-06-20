"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text}:{ text: string }){
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayedText}</span>;
}