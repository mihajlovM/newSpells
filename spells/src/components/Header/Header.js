import React from 'react';
import { AppBar, Toolbar, Typography,Button,Grid   } from '@material-ui/core';
import './Header.css'; // Import the CSS file
import { BrowserRouter as Router,  Link } from 'react-router-dom';


 
function Header() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
          <Link to="/spells">Spells</Link>
          </Typography>
          <Grid container justifyContent="flex-end">
          <Button color="inherit" className="loginButton">Login</Button>
        </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  