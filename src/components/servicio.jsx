import React from 'react'

const Servicio = (props) => {
  const styles = {
    width: '60vw',
    height: '60vh',
    marginTop: '5vh',
    backgroundColor: 'aqua',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover" 
 }

  return (
    <div>
        <div className={props.clase} style={styles}>
          </div>
    </div>
  )
}

export default Servicio
