import React, { useEffect } from 'react';

function Create() {
    useEffect(() => {
        document.title = 'Creating Event'
    });

    return (
        <div>
            <h1>heyCreate</h1>
        </div>
    );
}

export default Create;