import React from 'react';
import  './Company.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import axios from 'axios';
import baseURL from '../../Constants';
import './Company.css';
class Company extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        companyObject:{}
    }
  }
  componentDidMount(){
      const apiBaseUrl = baseURL
      const companyId = this.props.loction?this.props.location.aboutProps.companyId:1;
      axios.get(apiBaseUrl+`company-profile?companyId=${companyId}`).then((response)=>{
        if(response.status===200){
          this.setState({companyObject:response.data.result})
        }
      })
    }
  render(){
    const {companyObject} = this.state
   console.log(companyObject.image);
    if(Object.keys(this.state.companyObject).length>0) {return (
      <div>
      <MuiThemeProvider>
          <AppBar
             title="Company Details"
           />
         </MuiThemeProvider>
         <div className="company-wrapper">
         <div className="company-attribute">
         {companyObject.name}
         <span className="company-logo"> <img className="company-logo" alt="company" src={`/Images/${companyObject.logo}`}></img></span>
         </div>
       
          <div className="company-attribute"> {companyObject.address}</div>
          <div className="company-attribute">Visted Users: {companyObject.uniqueUsers}</div>
          <div className="company-attribute">TotalViews: {companyObject.totalViews}</div>
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
