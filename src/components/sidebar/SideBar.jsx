import React from 'react'
import { anaytics, appearance, audiences, delivery, discounts, home, marketing, orders, payments, plugins, product, tools } from '../constants/constant.js'
import Header from './Header.jsx'

function SideBar() {

    const data = [
        {
            name: 'Home',
            icon: home
        },
        {
            name: 'Orders',
            icon: orders
        },
        {
            name: 'Products',
            icon: product
        },
        {
            name: 'Delivery',
            icon: delivery
        },
        {
            name: 'Marketing',
            icon: marketing
        },
        {
            name: 'Analytics',
            icon: anaytics
        },
        {
            name: 'Payments',
            icon: payments
        },
        {
            name: 'Tools',
            icon: tools
        },
        {
            name: 'Discounts',
            icon: discounts
        },
        {
            name: 'Audience',
            icon: audiences
        },
        {
            name: 'Appearance',
            icon: appearance
        },
        {
            name: 'Plugins',
            icon: plugins
        },
    ]
  return (
    <div className='side-bar'>
        <Header />
        {data.map((item, index) => {
            return (
                <div className='item' key={index}>
                    <span className='svg-icon' dangerouslySetInnerHTML={{__html: item.icon}} />
                    <span className='side-bar-item'>{item.name}</span>
                </div>
            )
        })}
    </div>
  )
}

export default SideBar