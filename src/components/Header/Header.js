import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <h1 className="header__logo__title">Your Logo</h1>
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
  )
}
