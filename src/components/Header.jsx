import React from 'react';

const Header = () => {
    const Imagen1 = './Imagen1.avif';
    const Imagen2 = './Imagen2.avif';
    const Imagen3 = './Imagen3.avif';

    return (
        <div className="flex flex-col items-stretch min-h-screen">
            <div className="flex flex-grow">
                {[Imagen1, Imagen2, Imagen3].map((imagen, index) => (
                    <div
                        key={index}
                        className="relative flex-grow cursor-pointer"
                        onMouseEnter={(e) => {
                            const arrow = e.currentTarget.getElementsByClassName('arrow')[0];
                            arrow.style.transform = 'translateX(20px)';
                        }}
                        onMouseLeave={(e) => {
                            const arrow = e.currentTarget.getElementsByClassName('arrow')[0];
                            arrow.style.transform = 'translateX(0)';
                        }}
                    >
                        <img src={imagen} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-700" />
                        <div
                            className="arrow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                        >
                            ➡️
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold">
                            Texto {index + 1}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 font-noto font-bold text-8xl text-white w-full text-center mt-5">
                Descubre tu próximo destino
            </div>
        </div>
    );
};

export default Header;