import { AppBar, Switch, Toolbar, Typography } from '@mui/material'

interface Props {
  darkMode: boolean
  handleThemeChange: () => void
}
export const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">CODE-COUTURE</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  )
}
