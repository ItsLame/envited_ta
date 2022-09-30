import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css';
import landingSVG from '../assets/landing.svg';
import PurpleButton from '../components/button';

// class Home extends Component {
function Home() {
    useEffect(() => {
        document.title = 'Envited'
    });

    return (
        <div>
            <div className='landing-container'>
                
                <div id='landing-image-container'>
                    <img src={landingSVG} alt='landingSVG' />
                </div>

                <div id='landing-title-container'>
                    <h1>Imagine if <span className='text-gradient'>Snapchat</span><br/> had events.</h1>
                    <p>Easily host and share events with your friends across any social media.</p>
                    <Link to='/create'>
                        <PurpleButton customText='🎉 Create my event' />
                    </Link>
                </div>

            </div>
        </div>
    ); 
}

export default Home;