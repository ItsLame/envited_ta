import React, { useEffect } from 'react';

import './styles/event.css'
import cakePNG from '../assets/cake.png';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function Event() {
    useEffect(() => {
        document.title = 'Birthday Bash'
    });

    return (
        <div className='event-container'>

            <div id='event-info-container'>
                <h1>Birthday Bash</h1>
                <p>Hosted by <span id='bold'>Elysia</span></p>
                <div className='card-group'>
                    
                    <div id='card'>
                        <div id='card-icon'>
                            <FaRegCalendarAlt />
                        </div>

                        <div id='card-info'>
                            <span id='card-info-top'>18 August 6:00PM</span>
                            <span id='card-info-bottom'>to <span id='bold'>19 August 1:00PM</span> UTC +10</span>
                        </div>

                        <div id='card-button'>
                            <span>❯</span>
                        </div>
                    </div>

                    <div id='card'>
                        <div id='card-icon'>
                            <HiOutlineLocationMarker />
                        </div>

                        <div id='card-info'>
                            <span id='card-info-top'>Street Name</span>
                            <span id='card-info-bottom'>Suburb, State, Postcode</span>
                        </div>

                        <div id='card-button'>
                            <span>❯</span>
                        </div>

                    </div>

                </div>
            </div>

            <div id='event-image-container'>
                <img src={cakePNG} alt='cake' />
            </div>
            
        </div>
    );
}

export default Event;