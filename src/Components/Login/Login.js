import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';
import Profile from '../Profile/Profile';
import baseURL from '../../Constants';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogggedIn: false,
      profileObject: {},
    };
  }
  handleClick(event)  {
    const apiBaseUrl = baseURL;
    const payload = {
      userName: this.state.username,
      password: this.state.password,
    };
    axios.post(`${apiBaseUrl}login`, payload,).then((response) => {
      if (response.status === 200) {
        const payload = { userName: this.state.username };
        axios.post(`${apiBaseUrl}profile`, payload).then((response) => {
          if (response.status === 200) {
            this.setState({ isLogggedIn: !this.state.isLogggedIn });
            this.setState({ profileObject: response.data.result });
          }
        });
      } else if (response.status === 204) {
        console.log('Username password do not match');
        alert('username password do not match');
      } else {
        console.log('Username does not exists');
        alert('Username does not exist');
      }
    })
      .catch((error) => {
  console.log(error);
  });
  }
  render() {
    if(!this.state.isLogggedIn){
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  } 
    return<Profile profileObject={this.state.profileObject}/>
    
}
}
export default Login;
