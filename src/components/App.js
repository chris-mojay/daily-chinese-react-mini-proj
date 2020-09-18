import React from 'react'
import { Header } from './Header'
import Review from './Review'
import { lightTheme, darkTheme } from '../themes'
import img from '../assets/char_bg.png'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'light'
    }

    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
    this.setState(prevState => ({ mode: prevState.mode === 'light' ? 'dark' : 'light' }), () => this.swapTheme())
  }
  swapTheme() {
    const theme = this.state.mode === 'light' ? lightTheme : darkTheme
    Object.keys(theme).map(key => {
      const value = theme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }
  render() {
    return (
      <React.Fragment>
        <Header handleToggle={this.handleToggle} isToggleOn={this.state.mode} />
        <Review />
         <img src={img} style={this.state.mode === 'dark' ? {opacity: 1} : {opacity: 0}} className='char-bg' />
      </React.Fragment>
    )
  }
}

export default App;
