import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState, counterSquareSelector } from '../../recoil/counterState';

const CountDisplay = () => {

    const count = useRecoilValue(counterState);
    const countSquare = useRecoilValue(counterSquareSelector);

    return (
        <div>
            <div>
                Count: <bold>{count}</bold>
            </div>
            <div>
                Count Square: <bold>{countSquare}</bold>
            </div>
        </div>
    );
}

export default CountDisplay;