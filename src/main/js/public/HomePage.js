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
      <Typography variant="display2" align="center" color="textPrimary" gutterBottom>
        Who am I?
      </Typography>
      <Typography variant="body2" align="justify" color="textSecondary" paragraph>
        My name is Maxime Clauss, I am the CTO of deepgreen, a Colorado-based Computer Vision company detecting pests and pathogens to optimize crop production, reduce pesticide use, and enhance food quality.
        <br/><br/>
        I am a Technology Enthusiast with a passion for learning, sharing, and critical thinking. As an engineer, I excel in designing and implementing efficient, modern, and scalable architectures for the business to grow without worries. As a leader, I build environments where people can grow and feel safe, where they can be aligned, work autonomously, and be more productive.
        <br/><br/>
        I have a track record of building great teams, from attracting the best talents to creating efficient development pipelines, including agile practices for better management, continuous delivery for faster time to market, code reviews and test automation for higher quality.
        I'm an Engineer at heart, and as such I'll never stop learning. Keeping my skills at the highest level allows me to earn trust from my teams, attract and retain talents, and leverage the latest technologies to best answer business requests.
        <br/><br/>
        My core expertise is in solving complex technological problems, mostly related to the system&apos;s backend and data pipeline, as well as analytics and machine learning algorithms. I use Java and Python everyday, know another ~10 languages (C, C#, JS, ...), and can learn any new language in a matter of weeks. I am also very familiar with front-end technologies such as Angular and React and particularly excel at finding performance bottlenecks in large scale deployment models.
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
