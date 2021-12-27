/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 27/12/2021 - 23:28:05
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 27/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import React from 'react'
import './collection-item.styles.scss'

export default function CollectionItem ({ id, name, imageUrl, price }) {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}
