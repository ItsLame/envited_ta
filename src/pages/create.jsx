import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/create.css';
import PurpleButton from '../components/button';

function Create() {
    useEffect(() => {
        document.title = 'Creating Event'
    });

    return (
        <div className='create-container'>
                <h1>Creating Your Event</h1>
                {/* <p>Hosted by <span id='bold'>Elysia</span></p> */}
                <div className='form'>
                    <div id='form-row'>
                        <label for='name'>Event Name</label>
                        <input id='name' type='field'></input>
                    </div>
                    <div id='form-row'>
                        <label for='name'>Host Name</label>
                        <input id='name' type='field'></input>
                    </div>
                    <div id='form-row'>
                        <label for='name'>From</label>
                        <input id='name' type='date'></input>
                    </div>
                    <div id='form-row'>
                        <label for='name'>To</label>
                        <input id='name' type='date'></input>
                    </div>
                    <Link to='/event'>
                        <PurpleButton customText='🚀 Create' />
                    </Link>
                </div>
        </div>
    );
}

export default Create;