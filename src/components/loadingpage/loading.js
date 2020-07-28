import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Loading = () => {

    let history = useHistory();

    const [dot, setDot] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setDot(dot + '.');
        }, 500);
    }, [dot]);

   useEffect(() => {
        setTimeout(() => {
            history.push('/home');
        }, 2000);
    }, []);

    return (
        <div className='loading'>
            <div className='loading__title'>Loading{dot}</div>
        </div>
    );
}

export default Loading;
