import React from 'react'
import { ReactComponent as Logo } from '../assets/daily_chinese_horizontal.svg'
import Switch from '@material-ui/core/Switch'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import { useStyles } from '../themes.js'

function SwitchIcon({icon}) {
  const classes = useStyles()

  return (
    <div className='switch-icon-container'>
      {icon === 'light'
        ? <WbSunnyIcon fontSize="large" />
        : <NightsStayIcon className={classes.darkModeIcon} fontSize="large" />
      }
    </div>
  )
}

export default function Header ({isToggleOn, handleToggle}) {
  const classes = useStyles()

  return (
    <header>
      <Logo className='logo' />
      <div className='switch-wrapper'>
        <SwitchIcon
          icon={isToggleOn}
        />
        {isToggleOn === 'light' ?
          <Switch
            onChange={handleToggle}
            classes={{ colorSecondary: classes.colorSecondary, checked: classes.checked }} />
          : <Switch
            onChange={handleToggle}
            classes={{ colorSecondary: classes.colorSecondary, checked: classes.checked, track: classes.track }} />
        }
      </div>
    </header>
  );
}