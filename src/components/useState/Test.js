import { useState } from "react";

const Test = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        // use e.target.value 
        setName(e.target.value);
    }
    return <div>
        <input type="text" placeholder="Write something" onChange={handleChange} />
        <p>{name}</p>
    </div>;
};

export default Test;
