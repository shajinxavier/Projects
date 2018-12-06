import React from "react";
import PropTypes from "prop-types";
import { ReCaptcha } from 'react-recaptcha-google';
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      userid: ""
    },
    loading: false,
    errors: {}

  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = e => {
      e.preventDefault();
      const errors = this.validate(this.state.data);
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props
          .submit(this.state.data)
          .catch(err =>
            this.setState({ errors: err.response.data.errors, loading: false })
          );
      }
    };

    validate = data => {
      const errors = {};
      if (!Validator.isEmail(data.userid)) errors.userid = "Invalid User Id or Email-ID";
      return errors;
    };
    onLoadRecaptcha = () => {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    };
    verifyCallback=(recaptchaToken)=> {
      // Here you will get the final recaptchaToken!!!
      console.log(recaptchaToken, "<= your recaptcha token")
    };
  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}

        <Form.Field error={!!errors.userid}>
          <label htmlFor="userid">Email-ID</label>
          <input
            type="email"
            id="userid"
            name="userid"
            placeholder="example@example.com"
            value={data.userid}
            onChange={this.onChange}
          />
          {errors.userid && <InlineError text={errors.userid} />}
        </Form.Field>
        <ReCaptcha
                    ref={(el) => {this.captchaDemo = el;}}
                    size="normal"
                    render="explicit"
                    sitekey="6Lf3aX4UAAAAAIGSAq16iKW2IqPkgy7rAV-cgWbl"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}

                />
        <div id="errorMsgHolder"></div>
        <Button primary>Send Password</Button>

      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
