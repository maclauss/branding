// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// deepgreen imports

const ContactPage = props =>
  <div className={props.classes.heroUnit}>
    <div className={props.classes.heroContent}>
      <Typography variant="display2" align="center" color="textPrimary" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" paragraph>
        Want to get in touch? Send me an email!
      </Typography>
      <div className={props.classes.heroButtons}>
        <TextField
          label="First Name"
          className={props.classes.firstNameField}
          type="text"
          name="firstName"
          autoComplete="given-name"
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Last Name"
          className={props.classes.lastNameField}
          type="text"
          name="lastName"
          autoComplete="family-name"
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
          fullWidth
        />
        <TextField
          label="Subject"
          type="text"
          name="subject"
          margin="normal"
          variant="filled"
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          margin="normal"
          variant="filled"
          fullWidth
          multiline={true}
          rows={4}
          rowsMax={16}
        />
        <Button variant="contained" color="primary" disabled>
          Coming Soon
        </Button>
      </div>
    </div>
  </div>;

ContactPage.propTypes = {
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
  firstNameField: {
    marginRight: "5%",
    width: "45%"
  },
  lastNameField: {
    marginLeft: "5%",
    width: "45%"
  },
});

export default withStyles(styles)(ContactPage);
