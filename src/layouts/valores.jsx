import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


const Valores = () => {

    const [content, setContent] = useState([]);
    const [author, setAuthor] = useState([]);

    function getApi() {
        fetch('https://api.quotable.io/quotes/random')
        .then((response) => {
            return response.json();
        }).then((response) => {
            setContent(response[0].content);
            setAuthor(response[0].author);
        })
    }
    const rellenoAutor = "Autor"

    let objauth = "Click to generate a quote";
    let objcont = "Click to generate a quote";

    if(JSON.stringify(author, null, 2) !== "[]"){
        objauth = JSON.stringify(author, null, 2);
    }

    if(JSON.stringify(content, null, 2) !== "[]"){
        objcont = JSON.stringify(content, null, 2);
    }



    return (
    <div>
        <Navbar></Navbar>

        <div className='api-container'>
            <h1 className='valores-header'>Clica al botón para ver una cita</h1>
            <br/>
            <button className='boton-valores' onClick={getApi}>Genera Una Cita</button>
            <br />
            <br />
            <h2 className='autor'>{ objauth }</h2>
            <br/>
            <p><b>{ objcont }</b></p>

        </div>

        <Footer></Footer>
      
    </div>
  )
}

export default Valores
 