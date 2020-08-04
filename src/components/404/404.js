import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';

const NoMatch = () => {

    useEffect(() => {
        document.title = 'RetroShark | 404';
    }, []);

    return (
        <div className='container'>
            <FadeIn>
                <div className='page-title'>404</div>
                <div className='box-container'>
                    <p>Oh no!</p>
                    <p>The game you're trying to play is not compartible with this console!</p>
                    <p>... meaning the page you're looking for couldn't be found</p>
                </div>
            </FadeIn>
        </div>
    );
}

export default NoMatch;
