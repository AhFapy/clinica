import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Servicio from '../components/servicio'
import { Typewriter } from 'react-simple-typewriter'

const Servicios = () => {
  return (
    <>
    
    <Navbar></Navbar>
    <div className='servicios-container'>

      <div className='servicio'>
        <h1 className='servicio-h1'>Tenemos Instalaciones <span> </span> 
          <Typewriter
            words={['perfectas', 'modernas', "minimalistas"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
        <Servicio className="styles" img="https://clinicagirona.cat/wp-content/uploads/2022/08/clinica-girona-personal0118.jpg"></Servicio>
      </div>

      <div className='servicio'>
      <h1 className='servicio-h1'>Hacemos análisis <span> </span> 
          <Typewriter
            words={['a tu medida', 'precisos', "con las últimas tecnologias"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
        
      <Servicio className="styles" img='https://www.clinicaroiz.es/wp-content/uploads/2019/09/ANALISISCLINICOS.jpg'></Servicio>
      </div>

      <div className='servicio'>
      <h1 className='servicio-h1'>Ofrecemos un seguimiento <span> </span> 
          <Typewriter
            words={['gratuito', 'personal', "empático"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
      <Servicio className="styles" img='https://www.campustraining.es/wp-content/uploads/2021/10/secretaria-direccion.jpg'></Servicio>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Servicios
