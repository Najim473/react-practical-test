import { useEffect, useState } from "react"

const Test = () => {
    const [time, setTime] = useState(new Date());
    // TIME WILL CHANGED AUTOMATICALLY 
    useEffect(() => {
        setTime(new Date())
    })
    return (
        <div>
            <p>{time.toLocaleString()}</p>
        </div>
    )
}

export default Test