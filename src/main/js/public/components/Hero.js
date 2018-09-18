// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const Hero = props =>
  <Grid>
    <Hidden only={["xs", "sm"]}>
      <div className={props.className + " " + props.classes.heroMedium}>
        {props.children}
      </div>
    </Hidden>
    <Hidden mdUp>
      <div className={props.className + " " + props.classes.heroSmall}>
        {props.children}
      </div>
    </Hidden>
  </Grid>;

const styles = {
  heroMedium: {
    padding: "50px 160px 50px 160px",
  },
  heroSmall: {
    padding: "20px 20px 20px 20px",
  },
  padding: {
    paddingTop: "125px",
    paddingBottom: "125px",
  },
};

export default withStyles(styles)(Hero);
