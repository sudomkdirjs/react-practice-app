import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../../recoil/counterState';

const Counter = () => {

    const [count, setCount ] = useRecoilState(counterState);
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    return (
        <div>
            <button disabled={count === 0} onClick={decreaseCount}>_</button>
            {count}
            <button onClick={increaseCount}>+</button>
        </div>
    );
}

export default Counter;