/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 27/12/2021 - 23:00:16
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 27/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

export default function CollectionPreview ({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          ?.filter((item, idx) => idx < 4)
          ?.map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  )
}
