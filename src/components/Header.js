import React from 'react'
import logo from '../assets/daily_chinese_horizontal.svg'
import Switch from '@material-ui/core/Switch'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'

function SwitchIcon(props) {
  return (
    <div className='switch-icon-container'>
      {props.icon === 'light'
        ? <WbSunnyIcon fontSize="large" />
        : <NightsStayIcon fontSize="large" />
      }
    </div>
  )
}

const Header = (props) => {
  return (
    <header>
      <img className='logo' src={logo} alt='daily chinese logo' />
      <div className='switch-wrapper'>
        <SwitchIcon
          icon={props.isToggleOn}
        />
        <Switch
          onChange={props.handleToggle}
        />
      </div>
    </header>
  );
}

export { Header }