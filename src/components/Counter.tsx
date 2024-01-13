import { useState } from "react";
import './Counter.scss';

const Counter = () => {

    const [count, setcount] = useState(0);

    return (<div>
        <span>{count}</span>
        <button onClick={() => setcount(count + 1)}>Add</button>
    </div>);
}

export default Counter;