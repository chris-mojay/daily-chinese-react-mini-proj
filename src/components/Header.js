import React from 'react'
import { ReactComponent as Logo } from '../assets/daily_chinese_horizontal.svg'
import Switch from '@material-ui/core/Switch'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import { useStyles } from '../themes.js'

function SwitchIcon(props) {
  const classes = useStyles()

  return (
    <div className='switch-icon-container'>
      {props.icon === 'light'
        ? <WbSunnyIcon fontSize="large" />
        : <NightsStayIcon className={classes.darkModeIcon} fontSize="large" />
      }
    </div>
  )
}

const Header = (props) => {
  const classes = useStyles()

  return (
    <header>
      <Logo className='logo' />
      <div className='switch-wrapper'>
        <SwitchIcon
          icon={props.isToggleOn}
        />
        {props.isToggleOn === 'light' ?
          <Switch
            onChange={props.handleToggle}
            classes={{ colorSecondary: classes.colorSecondary, checked: classes.checked }} />
          : <Switch
            onChange={props.handleToggle}
            classes={{ colorSecondary: classes.colorSecondary, checked: classes.checked, track: classes.track }} />
        }
      </div>
    </header>
  );
}

export { Header }