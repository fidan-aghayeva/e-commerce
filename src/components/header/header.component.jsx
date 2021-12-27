/**
 * @description      :
 * @author           : hp
 * @group            :
 * @created          : 27/12/2021 - 23:49:41
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 27/12/2021
 * - Author          : hp
 * - Modification    :
 **/
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

export default function Header () {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
      </div>
    </div>
  )
}
