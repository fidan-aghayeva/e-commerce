/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 26/12/2021 - 00:23:10
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
