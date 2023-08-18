import React, { useEffect, useRef } from 'react'
import './Card.scss'; 
import VanillaTilt from 'vanilla-tilt';

const options = {
  scale: 1.1,
  speed: 1500,
  max: 20,
  axis: "Y"
}

const Card = ({data, index}) => {
  const sub_title = data.title.split(',');
  const tilt = useRef(null);

  console.log({index});
  console.log(data);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [])

  return (
    <div className='card' ref={tilt}>
      <div className="content">
        <h1>0{index}</h1>
        <h3><span>{sub_title[0]}</span>,{sub_title[1]}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default Card