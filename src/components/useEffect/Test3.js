import { useEffect, useState } from "react"
// USEEFFECT EXERCISE 3 
// MODIFY THE PAGE SUCH THAT  
// THE LAST UPDATED AT TIMESTAMPS ARE INDIVIDUALLY
// UPDATED
const Test3 = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [time, setTime] = useState(new Date());
    const [time2, setTime2] = useState(new Date());
    // TIME TO COUNTING WILL BE CHANGED 
    useEffect(() => {
        setTime(new Date())
    }, [count])
    useEffect(() => {
        setTime2(new Date())
    }, [count2])
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>First-{count}</button>
            <br />
            <button onClick={() => setCount2((count2) => count2 + 1)}>Second-{count2}</button>
            <p>{time.toLocaleString()}</p>
            <br />
            <p>{time2.toLocaleString()}</p>
        </div>
    )
}

export default Test3