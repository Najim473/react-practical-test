import { useEffect, useState } from "react"

const Test = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    // TIME WILL CHANGED AUTOMATICALLY 
    // useEffect(() => {
    //     setTime(new Date())
    // })
    // TIME TO COUNTING WILL BE CHANGED 
    useEffect(() => {
        setTime(new Date())
    }, [count])
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>Count Time</button>
            <p>{time.toLocaleString()}</p>
        </div>
    )
}

export default Test