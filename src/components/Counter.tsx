import { useState } from "react";
import classes from './Counter.module.scss';

const Counter = () => {

    const [count, setcount] = useState(0);

    return (<div>
        <span>{count}</span>
        <button className={classes.aqua} onClick={() => setcount(count + 1)}>Add</button>
    </div>);
}

export default Counter;