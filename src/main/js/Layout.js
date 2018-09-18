// react imports
import React from 'react';
import PropTypes from 'prop-types';

// react router imports
import { Route } from 'react-router-dom'

// material-ui imports
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// deepgreen imports
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './public/HomePage';
import ProjectPage from './public/ProjectPage';
import ContactPage from './public/ContactPage';

class Layout extends React.Component {

  render() {
    return (
      <Grid>
    		<Nav/>
        <div className={this.props.classes.main}>
          <Route exact path="/" component={HomePage}/>
          <Route path="/projects" component={ProjectPage}/>
          <Route path="/contact" component={ContactPage}/>
        </div>
      </Grid>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {};

export default withStyles(styles)(Layout);
