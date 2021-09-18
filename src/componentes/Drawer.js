//https://material-ui.com/components/drawers/#temporary-drawer
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import urlCategorias from './../data/Categorias';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import IMG from './../img/NOTI.gif';
import ico from './../img/favicon.ico';
import './Drawer.css';
//import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  list: {
    width: 180,
    paddingRight:10,
    paddingLeft:5,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({SetCategoria}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
   // top: false,
  // left: false,
   // bottom: false,
   right: false,
  });
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      
          <ListItem>
           Categorias
          </ListItem>
        
      </List>
      <Divider />
      <List>
        {urlCategorias.map((text, index) => (
          <ListItem 
          style={{heigth:40, borderRadius:3}}
          button key={text} 
          onClick={()=>SetCategoria(text)}>
            
            <ListItemIcon>{index % 2 === 0 ? <img className="ico" src={ico} alt="ico" />: <img className="ico" src={ico} alt="ico" />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
     
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}> <img  style={{ cursor: "pointer" }}src={IMG} height="40px" alt='logo' />   CATEGORIAS</Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
    
    </div>
  );
}
