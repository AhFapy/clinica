import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const sliderElements = (props) => {

    const spanStyle = {
        padding: '20px',
        width: '30vw',
        height: "35vh",
        fontSize: '2vw' ,
        color: 'slate',
        background: 'transparent',
        paddingTop: "5.5vw",
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '95vh',
        paddingLeft: '2vw',
      }
      const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          username: "John - 5 Estrellas. ",
          caption: 'Médica Orb es un lugar increíble para hacer diferentes análisis y mantener una buena salud.'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          username: "Elizabeth - 4,5 estrellas.",
          caption: 'La mejor clínica de Madrid sin ningún tipo de duda y posiblemente de España.'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          username: "Pedro - 5 Estrellas.",
          caption: 'Es la clínica donde me curaron del tumor que tuve, super agradecido con todos.'
        },
      ];
      
      


  return (
          <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='clase' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.username}</span>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>

  )
}

export default sliderElements
