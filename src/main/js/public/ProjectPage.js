// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

// deepgreen imports

const ProjectPage = props =>
  <div>
    <div className={props.classes.heroUnit}>
      <div className={props.classes.heroContent}>
        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="title" align="center" color="textSecondary" paragraph>
          You will find below some of the projects I have been working on in the last few years. This list is non-exhaustive and I will add more as I find their source code.
          <br/><br/>
          If you are interested in one of these, feel free to check the code and contact me to know more!
        </Typography>
      </div>
    </div>
    <div className={props.classes.content}>
      <Grid container spacing={16}
        alignItems="stretch"
        direction="row"
        justify="center">
        <Project photo="https://storage.googleapis.com/branding-public-assets/deepgreen_camera_center_pivot.jpg"
          name="deepgreen"
          description="An entire company. deepgreen (DGAI, Inc.) is a Computer Vision company leveraging Artificial Intelligence and Deep Neural Networks to detect pests and pathogens on plants. A couple hundred thousand lines of code for IoT and Machine Learning, using Microservices and state of the art deep learning technologies. Code (Java, Python, Bash, Javascript) obviously not available."
          classes={props.classes}
          keywords={"Java, Python, Bash, react, MySQL, Google Cloud, Enterprise Architecture, Algorithms, Tensorflow, Machine Learning, Internet of Things"}
          website="https://www.deepgreen.ai"/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/raytracer.png"
          name="Ray Tracer"
          description="A simple Ray Tracer in Java, implementing very simple shapes as well as ambient, diffuse, specular shading, and anti-aliasing."
          classes={props.classes}
          keywords={"Java, Rendering"}
          github="https://github.com/maclauss/raytracer"/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/home_api.png"
          name="Home Automation API"
          description="Simple secured API server to run on a raspberry pi at Home, to integrate Google Home voice controls with Command Fusion type devices."
          classes={props.classes}
          keywords={"Python, Internet of Things"}
          github="https://github.com/maclauss/home-api"/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/branding_website.png"
          name="Personal Website"
          description="The website you are looking at, built with react and Java."
          classes={props.classes}
          keywords={"Java, react, Google Cloud"}
          github="https://github.com/maclauss/branding"/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/chess.jpeg"
          name="Chess"
          description="A game I first built when I started getting really excited about algorithmic, using an alpha-beta pruning enabled min-max AI. I am looking for the code, stay tuned."
          classes={props.classes}
          keywords={"Java, Algorithms, Gaming"}/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/reversi.jpg"
          name="Reversi"
          description="A simple version of reversi, built with the same alpha-beta pruning enabled min-max as the chess game. I am looking for the code, stay tuned."
          classes={props.classes}
          keywords={"Java, Algorithms, Gaming"}/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/minesweeper.png"
          name="Minesweeper"
          description="A very simple minesweeper I built for a friend who wanted more customization over the legendary game! I am looking for the code, stay tuned."
          classes={props.classes}
          keywords={"Java, Algorithms, Gaming"}/>
        <Project photo="https://storage.googleapis.com/branding-public-assets/algorithms.jpg"
          name="Countless Algorithms for Fun"
          description="I will try to regroup some of them, non-exhaustive list includes Dijkstra, Hierarchical A*, Alpha-Beta, Resnet, Retinanet, and many, many others..."
          classes={props.classes}
          keywords={"Java, Python, C, Algorithms"}/>
      </Grid>
    </div>
  </div>;

  const Project = props =>
    <Grid item xs={12} sm={6} lg={4}>
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.media}
          image={props.photo}
          title={props.name + " Picture"}/>
        <CardContent>
          <Typography variant="headline">
            {props.name}
          </Typography>
          <br/>
          <Typography variant="body1">
            {props.description}
          </Typography>
          <br/>
          <Typography variant="caption">
            {props.keywords}
          </Typography>
        </CardContent>
        <CardActions className={props.classes.action}>
          { !!props.website &&
            <Button color="primary" href={props.website} target="_blank" disabled={!props.website}>
              Website
            </Button>
          }
          { !!props.github &&
            <Button color="primary" href={props.github} target="_blank" disabled={!props.github}>
              GitHub
            </Button>
          }
          { !!props.demo &&
            <Button color="primary" href={props.demo} target="_blank" disabled={!props.demo}>
              Demo
            </Button>
          }
        </CardActions>
      </Card>
    </Grid>;

ProjectPage.propTypes = {
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
  content: {
    padding: "50px 160px 50px 160px",
  },
  card: {
    height: '100%',
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 300,
  },
  action: {
    marginTop: "auto",
  },
});

export default withStyles(styles)(ProjectPage);
