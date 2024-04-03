import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
const OtroComponente = () => {
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('black');

    const handleMouseOver = () => { setColor('blue'); setTextColor('white') };
    const handleMouseOut = () => { setColor('white'); setTextColor('black') }
    return (
        <div className="p-4 mt-8">
            <p className="text-2xl font-martel mb-2">Prepara tu viaje</p>
            <h2 className="text-4xl font-noto text-bold mb-4">¿A dónde vamos?</h2>
            <div className="flex mb-4 justify-end">
                <Button size="large" variant="outlined" style={{ backgroundColor: color, borderWidth: '1px', borderColor: 'black', color: textColor, borderRadius: '20px', padding: '10px 20px' }}
                    className="mb-4 shadow-2xl"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    Ver todos los destinos
                </Button>
            </div>
            <div className="flex space-x-4 justify-center">
                {[
                    { imagen: 'boston.jpg', texto: 'Boston' },
                    { imagen: 'budapest.webp', texto: 'Budapest' },
                    { imagen: 'guatemala.jpg', texto: 'Guatemala' }].map((item, index) => (
                        <div key={index} className="rounded-lg max-w-lg">
                            <img src={`/public/${item.imagen}`} alt="Imagen" className="rounded-lg w-full h-auto object-cover" />
                            <p className="mt-2 font-noto text-2xl">{item.texto}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default OtroComponente;