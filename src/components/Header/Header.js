import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.jpg'

import './Header.css'

export const Header = () => {
  const [burgerShow, setBurgerShow] = React.useState(false)
  const showBurgerMenu = () => {
    setBurgerShow(prev => !prev)
  }

  return (
    <>
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to='/' className="header__logo__title">Авенир-фито</Link>        
            {/*<img className="header__logo__title" src={logo} alt="" />   */}       
          </div>

          <nav className="nav">
            <ul className="menu">

              <li className="menu__item"><Link to='/' className="menu__link">Главная</Link>
              </li>
              <li className="menu__item">
                <Link to='/about-us' className="menu__link">О нас</Link>
              </li>
              <li className="menu__item"><Link to='/catalog' className="menu__link">Каталог</Link>
                <ul className="menu__next__level catalog">
                  <li className="menu__next__level__item"><Link to='/garden__inside' className="menu__next__level__link">Внешнее озеленение</Link></li>
                  <li className="menu__next__level__item"><Link to='/green__walls' className="menu__next__level__link">Зелёные стены</Link></li>
                  <li className="menu__next__level__item"><Link to='/flower__pot' className="menu__next__level__link">Кашпо и горшки</Link></li>
                  <li className="menu__next__level__item"><Link to='/supply__flowers' className="menu__next__level__link">Поставка растений</Link></li>
                  <li className="menu__next__level__item"><Link to='/plant__care' className="menu__next__level__link">Уход за растениями</Link></li>
                </ul>
              </li>
              <li className="menu__item"><Link to='/contacts' className="menu__link">Контакты</Link></li>
              <li className="menu__item"><button className="menu__link">Ещё</button>
                <ul className="menu__next__level">
                  <li className="menu__next__level__item"><Link to='/politics' className="menu__next__level__link">Политика</Link></li>
                  <li className="menu__next__level__item"><Link to='/cooperation' className="menu__next__level__link">Сотрудничество</Link></li>
                </ul>
              </li>

            </ul>
          </nav>

        </div>
      </div>
    </header>

    <nav className={ burgerShow ? "nav burger" :  "nav burger hide" } >
      <ul className="menu">

        <li className="menu__item"><Link to='/' className="menu__link">Главная</Link>
        </li>
        <li className="menu__item">
          <Link to='/about-us' className="menu__link">О нас</Link>
        </li>
        <li className="menu__item"><Link to='/catalog' className="menu__link">Каталог</Link>
          <ul className="menu__next__level catalog">
            <li className="menu__next__level__item"><Link to='/garden__inside' className="menu__next__level__link">Внешнее озеленение</Link></li>
            <li className="menu__next__level__item"><Link to='/green__walls' className="menu__next__level__link">Зелёные стены</Link></li>
            <li className="menu__next__level__item"><Link to='/flower__pot' className="menu__next__level__link">Кашпо и горшки</Link></li>
            <li className="menu__next__level__item"><Link to='/supply__flowers' className="menu__next__level__link">Поставка растений</Link></li>
            <li className="menu__next__level__item"><Link to='/plant__care' className="menu__next__level__link">Уход за растениями</Link></li>
          </ul>
        </li>
        <li className="menu__item"><Link to='/contacts' className="menu__link">Контакты</Link></li>
        <li className="menu__item"><button className="menu__link">Ещё</button>
          <ul className="menu__next__level">
            <li className="menu__next__level__item"><Link to='/politics' className="menu__next__level__link">Политика</Link></li>
            <li className="menu__next__level__item"><Link to='/cooperation' className="menu__next__level__link">Сотрудничество</Link></li>
          </ul>
        </li>

      </ul>
    </nav>

    <button onClick={() => showBurgerMenu()} id="navToggle" className="burger" type="button">
      <span className="burger__item">Menu</span>
    </button>
    </>
  )
}
