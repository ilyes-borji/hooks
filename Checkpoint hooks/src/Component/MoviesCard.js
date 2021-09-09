import React from 'react'
import {Card,Form ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating'
import './Style.css'
const MoviesCard = ({film}) => {
    return (
    
 <div className="card">
  <img src={film.url} style={{ height: '18rem' ,width:'100% ',borderRadius:'10px 10px 0 0'}} />
  <div className="container">
    <h4><b>{film.name}</b></h4>
    <p> lorem iuyhifre hefrgds  io ergh fg erzh rr hoiuoier  gg zerij bgugiu iuyghi uiy ttyidrude.</p>
    <h5 style={{pointerEvents: 'none'}}>Summary : <Rating rate={film.rate}/></h5> 
  
  </div>

</div> 

        
    )
}

export default MoviesCard

