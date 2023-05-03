import React from 'react'
import { SelectorIdioma } from '../SelectorIdioma/SelectorIdioma'
import './Footer.css'

/* HOOK: USE TRANSLATION */
import { useTranslation } from 'react-i18next'


export const Footer = ({idioma, setIdioma}) => {

  const {t} = useTranslation()

  return (
    <footer className='footer'>

      <img className='imagen-footer' src='https://lh3.googleusercontent.com/9FHOk79iiGEisBJxkU9smRi8CUKagEkt_yl7T7z9mEBHypSg5sblsGkv1YOxj-4vCpVbYUeo7dC6q2rxiHn9fNlcBxXGabLd7RpsNC6MHrwCRw=rw-e365-w1440' alt='imagen de pikachu y sus amigos'></img>
      <p>{t('derechos')} <a href='https://github.com/Ramos241' target='_blank' rel="noreferrer">Gabriel Ramos</a> &copy; 2023</p>

      <SelectorIdioma idioma={idioma} setIdioma ={setIdioma}/>
    </footer>
  )
}
