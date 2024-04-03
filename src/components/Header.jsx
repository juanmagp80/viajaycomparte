import React from 'react';


function dividirTexto(texto, longitudMaxima) {
    const palabras = texto.split(' ');
    let lineaActual = palabras[0];
    let lineas = [];

    for (let i = 1; i < palabras.length; i++) {
        if (lineaActual.length + palabras[i].length + 1 > longitudMaxima) {
            lineas.push(lineaActual);
            lineaActual = palabras[i];
        } else {
            lineaActual += ' ' + palabras[i];
        }
    }

    lineas.push(lineaActual);
    return lineas.join('\n');
}
const Header = () => {
    const Imagen1 = './Imagen1.avif';
    const Imagen2 = './Imagen2.avif';
    const Imagen3 = './Imagen3.avif';
    const textosOriginales = ["Descubre más de Irlanda en bici", "9 cosas del parque nacional gran cañón que no conoces", "13 cosas que debes conocer antes de viajar a París"];
    const textos = textosOriginales.map(texto => dividirTexto(texto, 20));
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
                            className="arrow absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                        >
                            <img src="./flecha.png" alt="Arrow" className=" mr-6" />
                        </div>
                        <div className="bottom-8 font-noto text-4xl absolute text-white text-left left-0 ml-6 font-bold whitespace-pre-wrap overflow-visible">

                            {textos[index]} {/* Renderizar el texto aquí */}

                        </div>
                    </div>
                ))}
            </div>
            {/* Eliminado aquí */}
            <div className="absolute top-1/2 font-noto font-bold text-8xl text-white w-full text-center mt-5">
                Descubre tu próximo destino
            </div>
        </div>
    );
};

export default Header;
