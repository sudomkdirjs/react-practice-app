import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../../recoil/counterState';

const CountDisplay = () => {

    const [ count ] = useRecoilState(counterState);
    
    return (
        <div>
            <bold>{count}</bold>
        </div>
    );
}

export default CountDisplay;