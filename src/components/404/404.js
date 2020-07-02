import React, { useEffect } from 'react';

const NoMatch = () => {

    useEffect(() => {
        document.title = 'RetroShark | 404';
      }, []);

    return (
        <div>
            <h2>404</h2>
        </div>
    );
}

export default NoMatch;
