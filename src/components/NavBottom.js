import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EditIcon from '@material-ui/icons/EditTwoTone';
import FolderIcon from '@material-ui/icons/FolderOpenTwoTone';

const NavBottom = (props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="実戦データ" icon={<EditIcon />} onClick={props.handleToHome} style={{ marginTop: '10px' }} />
      <BottomNavigationAction label="各種統計" icon={<FolderIcon />} onClick={props.handleToResult} style={{ marginTop: '10px' }} />
    </BottomNavigation>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    left: '0',
    borderTop: '2px solid rgba(0, 0, 0, 0.5)',
    // background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
    paddingBottom: '30px',
  },
  selected: {
    color: '#0033CC',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    left: '0',
    borderTop: '3px solid rgba(0, 0, 0, 0.5)',
  },

});

export default NavBottom;