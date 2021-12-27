/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 27/12/2021 - 22:53:05
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 27/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

export default class ShopPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }
  render () {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections
          ?.filter((item, idx) => idx < 4)
          ?.map(({ id, ...otherItemProps }) => (
            <CollectionPreview key={id} {...otherItemProps} />
          ))}
      </div>
    )
  }
}
