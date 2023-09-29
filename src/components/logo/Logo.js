import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face-recognition.png'
import "./Logo.css"

const Logo = () => {
    return (
        <div className='ma4 mt0'>
             <Tilt className="Tilt br2 shadow-2" options={{max: 35}} style={{height: 140, width: 140}}>
      <div className="Tilt-inner"><img style={{width: 140, height: 140}} alt='logo' src={face}/></div>
    </Tilt>
        </div>
    );
}

export default Logo;