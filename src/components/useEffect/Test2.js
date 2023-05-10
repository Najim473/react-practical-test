import { useEffect, useState } from "react"

const Test2 = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    // TIME TO COUNTING WILL BE CHANGED 
    useEffect(() => {
        setTime(new Date())
    }, [count])
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>Count-{count}</button>
            <p>{time.toLocaleString()}</p>
        </div>
    )
}

export default Test2