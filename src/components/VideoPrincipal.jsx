import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
const VideoPrincipal = () => {
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('black');

    const handleMouseOver = () => { setColor('blue'); setTextColor('white') };
    const handleMouseOut = () => { setColor('white'); setTextColor('black') }
    return (


        <div className="relative w-full h-screen overflow-hidden">
            <video autoPlay loop muted className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-[-100]">
                <source src="./campaign.mp4" type="video/mp4" />
            </video>
            <div className="absolute font-tusker top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl text-center">Ultimos vídeos de 2024</div>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-28">
                <Button size="large" variant="contained" style={{ backgroundColor: color, color: textColor, borderRadius: '20px', padding: '10px 20px' }}
                    className="mb-4 shadow-2xl"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    Descúbrelos
                </Button>
            </div>
        </div>
    );
};

export default VideoPrincipal;