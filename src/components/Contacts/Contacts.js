import React from 'react'

import placeholder from '../../assets/contacts/placeholder.png'
import smartphone from '../../assets/contacts/smartphone.png'
import mail from '../../assets/contacts/mail.png'

import './Contacts.css'

export const Contacts = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [data, setData] = React.useState({})

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }

  const submitRequest = (e) => {
    e.preventDefault()
    setData({ name, email, message })    
    postData('http://localhost:3000/contacts', data)
      .then(answer => JSON.parse(answer))
      .then(answer => console.log(answer))
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

          <form onSubmit={submitRequest} className="contacts__form">
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

            <button type="submit" className="contacts__btn">SEND</button>
          </form>

        </div>
      </div>
    </section>
  )
}
