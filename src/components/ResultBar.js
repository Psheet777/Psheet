import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import allClear from '../func/AllClear';
import Popover from '@material-ui/core/Popover';

const ResultBar = () => {
  const classes = useStyles();
  const popClasses = popStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // ポップアップ関数
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ position: 'fixed', top: '0', left: '0' }}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon onClick={handleClick} />
          {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick} size={'small'}>Open Modal</Button> */}
        </IconButton>
        <Typography variant="h5" className={classes.title}>Psheet</Typography>
        {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick} size={'small'}>Open Modal</Button> */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={popClasses.typography}>
            <Button color="inherit" onClick={allClear} style={clearStyles} size={'small'}>ALL CLEAR</Button>
          </Typography>
        </Popover>
      </Toolbar>
    </AppBar>
  )
}
// Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const popStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const clearStyles = {
  fontSize: '10px',
  marginRight: '10px',
}

export default ResultBar;