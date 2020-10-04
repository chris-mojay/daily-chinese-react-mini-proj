import React from 'react'
import Header from './Header'
import Review from './Review'
import { lightTheme, darkTheme } from '../themes'
import img from '../assets/char_bg.png'

export default function App () {
  const [theme, setTheme] = React.useState('light')

  const handleToggle = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }

  React.useEffect(() => {
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    Object.keys(currentTheme).map(key => {
      const value = currentTheme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }, [theme])

  return (
    <React.Fragment>
      <Header handleToggle={handleToggle} isToggleOn={theme} />
      <Review />
       <img src={img} alt={'chinese script background decoration'} style={theme === 'dark' ? {opacity: 1} : {opacity: 0}} className='char-bg' />
    </React.Fragment>
  )
}
