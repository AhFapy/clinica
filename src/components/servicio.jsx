import React from 'react'

const Servicio = (props) => {
  const styles = {
    width: '50rem',
    height: '30rem',
    marginTop: '5vh',
    backgroundColor: 'aqua',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    fontSize: "2rem",
 }

  return (
    <div>
        <div className={props.clase} style={styles}>
          </div>
    </div>
  )
}

export default Servicio
