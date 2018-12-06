import React from "react";
import PropTypes from "prop-types";
import { ReCaptcha } from 'react-recaptcha-google';
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class ResetPasswordForm extends React.Component {
  state = {
    data: {
      userid: "",
      oldpassword: "",
      newpassword: "",
      confirmpassword: ""
          },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
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
    if (!Validator.isEmail(data.emailid)) errors.userid = "Invalid User ID or email-Id";
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
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.userid}>
          <label htmlFor="userid">UserID</label>
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
        <Form.Field error={!!errors.oldpassword}>
          <label htmlFor="oldpassword">Old Password</label>
          <input
            type="password"
            id="oldpassword"
            name="oldpassword"
            placeholder="Old Password"
            value={data.oldpassword}
            onChange={this.onChange}
          />
          {errors.oldpassword && <InlineError text={errors.oldpassword} />}
        </Form.Field>
        <Form.Field error={!!errors.newpassword}>
          <label htmlFor="newpassword">New Password</label>
          <input
            type="password"
            id="newpassword"
            name="newpassword"
            placeholder="New Password"
            value={data.newpassword}
            onChange={this.onChange}
          />
          {errors.newpassword && <InlineError text={errors.newpassword} />}
        </Form.Field>
        <Form.Field error={!!errors.confirmpassword}>
          <label htmlFor="email">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={data.confirmpassword}
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
        <Button primary>Generate Password</Button>

      </Form>
    );
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ResetPasswordForm;
