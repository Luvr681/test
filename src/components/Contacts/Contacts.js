import React from 'react'

import placeholder from '../../assets/contacts/placeholder.png'
import smartphone from '../../assets/contacts/smartphone.png'
import mail from '../../assets/contacts/mail.png'

import './Contacts.css'

export const Contacts = () => {
  return (
    <section className="section section__contacts">
      <div className="section__header white__color">
        <h2 className="section__title white__color">Обратная связь</h2>
        <p className="section__subtitle white__color">Спасибо за ваш интерес к компании «Авенир фито». Чтобы узнать больше, свяжитесь с нами. Мы всегда рады вам.</p>
      </div>	

      <div className="contacts">
        <div className="container">
          <div className="contacts__outs">

            <div className="contacts__out">
              <div className="contact__img">
                <img className="contact__icon" src={placeholder} alt="" />
              </div>
              <div className="contact__info">
                <p>Nobinagar savar,Dhaka</p>
                <p>Bangladesh</p>
              </div>
            </div>

            <div className="contacts__out">
              <div className="contact__img">
                <img className="contact__icon" src={smartphone} alt="" />
              </div>
              <div className="contact__info">
                <p>+8801743331996</p>
                <p>+8801928737807</p>
              </div>
            </div>

            <div className="contacts__out">
              <div className="contact__img">
                <img className="contact__icon" src={mail} alt="" />
              </div>
              <div className="contact__info">
                <p>quickmasud@gmail.com</p>
                <p>quickmasud@yahoo.com</p>
              </div>
            </div>

          </div>

          <form className="contacts__form">
            <div className="contacts__person">
              <input placeholder="Ваше имя" type="text" className="contact__name" />
              <input placeholder="Ваш email" type="email" className="contact__mail" />
            </div>
            <div>
              <textarea className="contacts__msg" placeholder="Напишите нам" name="" id="" />
            </div>

            <button type="submit" className="contacts__btn">SEND</button>
          </form>

        </div>
      </div>
    </section>
  )
}
