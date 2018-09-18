// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// deepgreen imports

const HomePage = props =>
  <div className={props.classes.heroUnit}>
    <div className={props.classes.heroContent}>
      <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
        Who am I?
      </Typography>
      <Typography variant="title" align="center" color="textSecondary" paragraph>
        My name is Maxime Clauss, I am a Software & Machine Learning Engineer and a Technology Enthusiast, currently the CTO of deepgreen, a Colorado-based Computer Vision company detecting pests and pathogens to optimize crop production, reduce pesticide use, and enhance food quality.
        <br/><br/>
        I am a jack of all trades of software engineering and problem solving, particularly good at designing, overseeing, and building very large and complex systems that require a broad range of skills and expertise to coordinate. I use Python and Java everyday, know another ~10 languages including modeling ones, can design complex and optimized database models, know and care about the asymptotic complexities of all modern data structure operations, can design deep neural networks, can setup a CI/CD pipeline and an efficient Devops process. I also build teams, I am very good at assessing and attracting talent, I talk to investors and shareholders, build strategies around technology, and can easily hold product demos.
        <br/><br/>
        This page is meant to be a portal for users of my projects, as well as a portfolio / resume and a way for people to get in touch with me.
      </Typography>
      <div className={props.classes.heroButtons}>
        <Grid container spacing={16} justify="center">
          <Grid item>
            <Button variant="contained" color="primary" href="/contact">
              Get in touch
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="/projects">
              Discover my work
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  </div>;

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

export default withStyles(styles)(HomePage);
