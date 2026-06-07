import { useState, useEffect } from 'react';

export default function DateTime() {
    const [date, setDate] = useState<Date>(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    const firstLine = `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${time}`;
    const secondLine = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return(
        <div className="absolute top-4 left-4">
            <h1 className="text-black text-4xl font-cinzel font-bold"
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)' }}>
                    {firstLine}
            </h1>
            <h1 className="text-black text-4xl font-cinzel font-bold"
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)' }}>
                    {secondLine}
            </h1>
        </div>
    )
}