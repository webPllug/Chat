import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        
      </Grid>
    );
  }
}

export default Login;
