import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from 'fontawesome';

const sliderElements = (props) => {

    const spanStyle = {
        width: '2rem',
        paddingLeft: "1rem",
        height: "35vh",
        fontSize: '1.5rem' ,
        color: 'slate',
        background: 'transparent',
        paddingTop: "1.5rem",
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundColor: "transparent",
        height: '55rem',
      }
      const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          username: "John",
          caption: 'Médica Orb es un lugar increíble para hacer diferentes análisis y mantener una buena salud.'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          username: "Elizabeth",
          caption: 'La mejor clínica de Madrid sin ningún tipo de duda y posiblemente de España.'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          username: "Pedro",
          caption: 'Es la clínica donde me curaron del tumor que tuve, super agradecido con todos.'
        },
      ];
      
      


  return (
          <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="resenyas-main" style={{...divStyle}} key={index}>
              <div className='resenya'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="resenya-svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p style={spanStyle}>{slideImage.username}</p>

              <div className="caption-center">
                <p><b>{slideImage.caption}</b></p>
              </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>

  )
}

export default sliderElements
