import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleBurger = () => {
        setIsActive(!isActive);
    };

  return (
    <>
        <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <h1 className="logo">SHOP.CO</h1>

                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <a href="">Shop ↓</a>
                    <a href="">On Sale</a>
                    <a href="">New Arrivals</a>
                    <a href="">Brands</a>
                </div>

                <input className='search' type="text" placeholder='🔍  Search for products...' />


                <div className='icon'>
                    <img src="./icon-1.svg" alt="" />
                    <img src="./icon-2.svg" alt="" />
                </div>

                <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header