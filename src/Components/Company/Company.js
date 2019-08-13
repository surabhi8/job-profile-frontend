import React from 'react';
import  './Company.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import axios from 'axios';
class Company extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        companyObject:{}
    }
  }
  componentDidMount(){
      const apiBaseUrl = "http://localhost:3000/";
      const companyId = this.props.loction?this.props.location.aboutProps.companyId:1;
      axios.get(apiBaseUrl+`company-profile?companyId=${companyId}`).then((response)=>{
        if(response.status===200){
          this.setState({companyObject:response.data.result})
        }
      })
    }
  render(){
    if(Object.keys(this.state.companyObject).length>0) {return (
      <div>
      <MuiThemeProvider>
          <AppBar
             title="Company Details"
           />
         </MuiThemeProvider>
         <div className="company-wrapper">
         <div className="company-attribute">Name:{this.state.companyObject.name}</div>
         <div className="company-attribute">Logo: "Hello"</div>
          <div className="company-attribute">Address: {this.state.companyObject.address}</div>
          <div className="company-attribute">UniqueUsers: {this.state.companyObject.uniqueUsers}</div>
          <div className="company-attribute">TotalViews: {this.state.companyObject.totalViews}</div>
          </div>
          </div>)}
          else return null};
}
export default Company;

Company.propTypes = {
  location: PropTypes.object,
}
Company.defaultProps =  {
  location: {
    aboutProps: { companyId:1 }
  },
}
