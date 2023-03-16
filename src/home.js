import React from 'react'
import './App.css'
import wpp from './images/whatsapp.png'
import floral  from './images/floralFunR2.png'
import floral1  from './images/floralFunR1.png'
import noivos  from './images/noivosl-removebg-preview.png'
import mps from './images/Vectorizeimages-Iconpack-Map.512.png'
import { Link } from 'react-router-dom';
function home({value}) {

  return (
    <div className="fundo-convite">
   
    <div className='fundoConvite'>
  
      <div className='container-utensilho'>
          <img alt='floral' className='floral' src={floral}/>
          <img alt='floral' className='floral1' src={floral1}/>
    </div>
    
      <h1 className='Nome text bottom'> Andre e Erica</h1>
      <img alt='noivos' className='noivos' src={ noivos }/>
      <h2 className='Nome msg'>Convidam você <h2 className='nomeCon'>{value}</h2> para o  seu chá de panela.</h2>
      <div className='date'>
      <h1 className='Nome mes'>ABRIL </h1>
      <h2 className='Nome data'>Sábado <span className='numeral'>15</span> ás 18:00</h2>
      <h2 className='Nome mes'>2023</h2>
      </div>
      <div className='listadepresente'>
      <h2 className='listadepresenteH'>Lista de presentes:</h2>
      <p className='listadepresenteH'>Fica a sua escolha</p>
      <Link className='linkss' to="https://nubank.com.br/pagar/x083r/0lqbtqTQSg" target='_blank'>
        <h3>Não tivemos ideias de presentes para sugerir e se você não for criativo que nem a gente, aqui está nosso pix 😂. Para fazer a transação, basta clicar neste texto!</h3>
      </Link>
      </div>
      <div className='links'>
      <Link className='lin' to="https://api.whatsapp.com/send?phone=5562993926390&text=Estou%20Confirmando%20minha%20presen%C3%A7a%20no%20ch%C3%A1%20de%20panela." target='_blank'>
      <img alt='whatsapp' src={wpp}/>
      <h3> Confirmar presença</h3>
     </Link>
      <Link className='lin' to="https://goo.gl/maps/3cvehJ59wbWZV4r26" target='_blank'>
      <img alt='whatsapp' src={mps}/>
      <h3>Endereço</h3></Link>
      </div>
    
    </div>
    </div>
  );
}

export default home;
