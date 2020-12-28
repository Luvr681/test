import React from 'react'
import axios from 'axios'

import placeholder from '../../assets/contacts/placeholder.png'
import smartphone from '../../assets/contacts/smartphone.png'
import mail from '../../assets/contacts/mail.png'

import './Contacts.css'

export const Contacts = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [data, setData] = React.useState({})

  const submitHandler = (event) => {
    event.preventDefault()
    setData({ name, email, message })
    axios.post('http://localhost:5000', data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

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
                <p>ул. Малышева 51 г.Екатеринбург</p>
                <p>Свердловская область Россия</p>
              </div>
            </div>

            <div className="contacts__out">
              <div className="contact__img">
                <img className="contact__icon" src={smartphone} alt="" />
              </div>
              <div className="contact__info">
                <p>+7 (343) 385-58-39</p>
{/*                <p>+8801928737807</p>*/}
              </div>
            </div>

            <div className="contacts__out">
              <div className="contact__img">
                <img className="contact__icon" src={mail} alt="" />
              </div>
              <div className="contact__info">
                <p>vogarus@gmail.com</p>
 {/*               <p>quickmasud@yahoo.com</p>*/}
              </div>
            </div>

          </div>

          <form onSubmit={submitHandler} className="contacts__form">
            <div className="contacts__person">
              <label htmlFor="Name"></label>
              <input 
                onChange={event => setName(event.target.value)} 
                value={name} 
                placeholder="Ваше имя" 
                name="name" 
                type="text" 
                className="contact__name" 
                required 
              />
              <label htmlFor="Email"></label>
              <input 
                onChange={event => setEmail(event.target.value)} 
                value={email} 
                placeholder="Ваш email" 
                name="email" 
                type="email" 
                className="contact__mail" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea 
                onChange={event => setMessage(event.target.value)} 
                type="text" 
                name="message" 
                value={message} 
                className="contacts__msg" 
                placeholder="Напишите нам" 
                id="" 
                required 
              />
            </div>

            <button onClick={() => setData({ name, email, message })} type="submit" className="contacts__btn">SEND</button>
          </form>

        </div>
      </div>
    </section>
  )
}
