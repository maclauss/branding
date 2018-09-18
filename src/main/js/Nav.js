// react imports
import React from 'react';
import PropTypes from 'prop-types';

// react router imports
import { Link } from 'react-router-dom'

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ToolbarGroup from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// deepgreen imports
import { commonResources } from './resources/CommonResources';

const Nav = props => {
  const { classes, logout } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Logo/>
          <Link to="/">
            <Button>About</Button>
          </Link>
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
          <div className={props.classes.flex}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    display: "block",
  },
});

export default withStyles(styles)(Nav);

const Logo = props =>
  <a href="/">
    <img src="https://storage.googleapis.com/prod_website/img/logo_website.png" width="50"/>
  </a>;
