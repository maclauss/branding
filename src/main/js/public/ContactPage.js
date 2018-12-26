import React from 'react';

import ContactForm from './ContactForm';

class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sending: false,
      sent: false,
      firstName: { "value": "", "hasError": false },
      lastName: { "value": "", "hasError": false },
      email: { "value": "", "hasError": false },
      subject: { "value": "", "hasError": false },
      message: { "value": "", "hasError": false },
    };
  }

  change(stateKey, stateValue, error=false){
    let { email, subject, message } = this.state;
    this.setState({
                    [stateKey]: { "value": stateValue, "hasError": error },
                    sent: false
                  });
  }

  submit(){
    let { sending, sent, firstName, lastName, email, subject, message } = this.state;
    if ( sending || sent ) return;
    let re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    if ( !re.test(email.value) ){
      email = { value: email.value, hasError: true }
      this.setState({ email: email });
    }
    if ( !subject.value ){
      subject = { value: subject.value, hasError: true }
      this.setState({ subject: subject });
    }
    if ( !message.value ){
      message = { value: message.value, hasError: true }
      this.setState({ message: message });
    }
    if ( !email.hasError && !subject.hasError && !message.hasError ){
      this.setState({ sending: true });
      $.ajax({
          url: '/contact',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            subject: subject.value,
            message: message.value
          }),
          success: (response) => {
              this.setState({ sent: true, sending: false });
          },
          error: (jqXHR, errorStatus) => this.setState({ sending: false })
      });
    }
  }

  render(){
    const { sending, sent, firstName, lastName, email, subject, message } = this.state
    return (
      <ContactForm firstName={firstName}
                   lastName={lastName}
                   email={email}
                   subject={subject}
                   message={message}
                   sending={sending}
                   sent={sent}
                   onChange={this.change.bind(this)}
                   onSubmit={this.submit.bind(this)}/>
    )
  }
}

ContactPage.propTypes = {};

export default ContactPage;
