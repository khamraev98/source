import { useState } from 'react';
import data from '../../mook/data.js';

export default function Cart(props) {
  const consoleValue=()=>{
    console.log(props);
    props.propsHandlerChild({
      src: props.url,
      title: props.title,
      price: props.price,

    });
  };
  
  return (
    <div className="container" onClick={consoleValue} style={{ border: '1px solid red' }}>
      <div className="row">
        
            <div className="col-md-4" >
              <img src={props.src} width="80%" alt="" />
              <h4>{props.title}</h4>
              <p>{props.price}</p>
            </div>
         
      </div>
    </div>
  );
}
