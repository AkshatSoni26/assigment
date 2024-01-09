import React from 'react'
import { down_arr } from '../constants/constant.js'

function Header() {
  return (
    <div className='sideBar-header'>
        <div className='logo'></div>
        <div className='second-item-header'>
            <div className='header-name'>Nishyan</div>
            <div className='header-sub-name'>Visit store</div>
        </div>
        <div className='svg-icon' dangerouslySetInnerHTML={{__html:down_arr}}/>
    </div>
  )
}

export default Header