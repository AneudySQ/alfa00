import React from 'react'
import BuscadorHome from './BuscadorHome';

function HeroSection() {
    return (
        <div className='hero-container sub_content'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />           
            <div className='hero-btns'>
                <BuscadorHome />
            </div>
        </div>
    );
}

export default HeroSection;