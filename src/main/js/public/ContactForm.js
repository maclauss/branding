// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

// deepgreen imports

const ContactForm = props =>
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
          value={props.firstName.value}
          onChange={event => props.onChange("firstName", event.target.value)}
        />
        <TextField
          label="Last Name"
          className={props.classes.lastNameField}
          type="text"
          name="lastName"
          autoComplete="family-name"
          margin="normal"
          variant="filled"
          value={props.lastName.value}
          onChange={event => props.onChange("lastName", event.target.value)}
        />
        <TextField
          required
          error={!!props.email.hasError}
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
          value={props.email.value}
          onChange={event => props.onChange("email", event.target.value)}
          fullWidth
        />
        <TextField
          required
          error={!!props.subject.hasError}
          label="Subject"
          type="text"
          name="subject"
          margin="normal"
          variant="filled"
          value={props.subject.value}
          onChange={event => props.onChange("subject", event.target.value)}
          fullWidth
        />
        <TextField
          required
          error={!!props.message.hasError}
          label="Message"
          name="message"
          margin="normal"
          variant="filled"
          value={props.message.value}
          onChange={event => props.onChange("message", event.target.value)}
          fullWidth
          multiline={true}
          rows={4}
          rowsMax={16}
        />
        <div className={props.classes.wrapper}>
          <Button variant="contained"
                  color="primary"
                  className={ props.sent ? props.classes.buttonSuccess : "" }
                  onClick={event => props.onSubmit()}
                  disabled={props.sending}>
            { props.sent ? "Sent" : "Send" }
          </Button>
          { props.sending && <CircularProgress size={24} className={props.classes.buttonProgress} /> }
        </div>
      </div>
    </div>
  </div>;

ContactForm.propTypes = {
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
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
    textAlign: 'center',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
});

export default withStyles(styles)(ContactForm);
