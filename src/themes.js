import { makeStyles } from '@material-ui/core/styles';

const lightTheme = {
  '--logo-color': '#1A1A1A',
  '--icon-color': '#1A1A1A',
  '--main-bg-color': '#F8F6F3',
  '--card-bg-color': '#FFFFFF',
  '--card-border-color': '#EAEAEA',
  '--text-color': '#1A1A1A',
  '--button-text-color': '#1A1A1A',
  '--button-background-color': '#F8F6F3',
  '--button-border-color': '#1A1A1A',
  '--button-incorrect-hover-color': '#E57C7C',
  '--button-correct-hover-color': '#00D2B4'
}

const darkTheme = {
  '--logo-color': '#FFFFFF',
  '--icon-color': '#28D5BD',
  '--main-bg-color': '#000C18',
  '--card-bg-color': '#0A1126',
  '--card-border-color': '#408CFF',
  '--text-color': '#408CFF',
  '--button-text-color': '#FFFFFF',
  '--button-background-color': 'rgba(255, 255, 255, .08)',
  '--button-border-color': 'rgba(255, 255, 255, .9)',
  '--button-incorrect-hover-color': '#FFD99A',
  '--button-correct-hover-color': '#28D5BD'
}

const useStyles = makeStyles({
  darkModeIcon: {
    fill: '#28D5BD'
  },
  colorSecondary: {
    '&$checked': {
      color: '#28D5BD',
    },
  },
  track: {
    backgroundColor: '#28D5BD !important',
    opacity: '0.7 !important'
  },
  checked: {}
})

export { lightTheme, darkTheme, useStyles }