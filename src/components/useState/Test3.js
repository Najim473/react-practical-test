import { useState } from "react";

const computeExpensiveValue = () => {
    console.log("Expensive computation");
    return "BigBinary"
}
const Test3 = () => {
    // const [v, setV] = useState(computeExpensiveValue());
    const [v, setV] = useState(() => computeExpensiveValue());
    const [key, setKey] = useState(0);
    return (
        <div>
            <input value={v} onChange={(e) => setV(e.target.value)} />
            <p>Hi {v} !</p>
            <button onClick={() => setKey(key + 1)}>Click test 3</button>
        </div>
    )
}

export default Test3