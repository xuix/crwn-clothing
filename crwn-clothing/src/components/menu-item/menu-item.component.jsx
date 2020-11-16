import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title,id,imageUrl,size}) => (

    <div className={`${size} menu-item`}>
      <div className="background-image"
      style={{backgroundImage:`url(${imageUrl})`}}></div>
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>shop now</span>
    </div>
  </div>




)

export default MenuItem;
