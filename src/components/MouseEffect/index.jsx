import React from 'react';
import Particles from 'react-particles-js';

class MouseEffect extends React.Component {
  render() {
    return (
      <div>
        {/* Aquí puedes agregar tu línea difuminada roja que siga al mouse */}
        <Particles
          // Configuración de los parámetros de Particles
          params={{
            particles: {
              number: {
                value: 100, // Número de partículas
                density: {
                  enable: true,
                  value_area: 800, // Área en la que se distribuirán las partículas
                },
              },
              color: {
                value: '#ffffff', // Color de las partículas
              },
              shape: {
                type: 'circle', // Forma de las partículas
              },
              opacity: {
                value: 0.5, // Opacidad de las partículas
                random: true, // Opacidad aleatoria
                anim: {
                  enable: true,
                  speed: 1, // Velocidad de la animación de opacidad
                  opacity_min: 0.1, // Opacidad mínima de las partículas
                  sync: false,
                },
              },
              size: {
                value: 3, // Tamaño de las partículas
                random: true, // Tamaño aleatorio
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false, // Desactiva las líneas entre partículas
              },
              move: {
                enable: true, // Habilita el movimiento de las partículas
                speed: 1, // Velocidad del movimiento de las partículas
                direction: 'none', // Dirección del movimiento de las partículas
                random: true, // Movimiento aleatorio
                straight: false, // Movimiento recto
                out_mode: 'out', // Comportamiento fuera del área
                bounce: false, // Rebotar al llegar al límite
                attract: {
                  enable: false, // No atraer hacia el mouse
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false, // Desactiva eventos al pasar el mouse por encima
                },
                onclick: {
                  enable: false, // Desactiva eventos al hacer clic
                },
                resize: true,
              },
            },
            retina_detect: true,
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      </div>
    );
  }
}

export default MouseEffect;
