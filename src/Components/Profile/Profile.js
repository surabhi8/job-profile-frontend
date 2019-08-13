import React from 'react';
import  './Profile.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Profile.css';
class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    isLogggedIn:false,
    companyObject:{},
    isCompanyExist:false,
    }
   }
  render(){
    const {profileObject} = this.props;
    return (
      <div>
      <MuiThemeProvider>
          <AppBar
             title="Profile"
           />
         </MuiThemeProvider>
         <div className="profile-wrapper">
         <div className="profile-attribute">{profileObject.name}
         <span className="profile-image"> <img className="company-logo" alt="company" src={`/Images/${profileObject.image}`}></img></span>
         </div>
         Company Name:
         <Link 
         to={{pathname:'/company-profile',aboutProps: {companyId:profileObject.companyId}}} 
         className="nav-link">{profileObject.Company?profileObject.Company.name:null} </Link>
          <div className="profile-attribute"> {profileObject.jobRole}</div>
          </div>
          </div>
  );
  }
}

export default Profile;

Profile.propTypes = {
  profileObject: PropTypes.object
}