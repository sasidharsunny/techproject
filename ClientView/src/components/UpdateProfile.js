import React, { Component } from 'react';
import './registform.css'
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from '../components/header';
import {  authenticate} from './auth';
import { isAuthenticated } from "../components/auth";
import { withRouter } from 'react-router'; 


const data = {
    "Student": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Projects', text: 'Projects' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' }
    ],
    "Organization": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Technical Support', text: 'Technical Support' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' },
      { id: 'JobPosting', text: 'JobPosting' }
    ],
    "Individual": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Technical Support', text: 'Technical Support' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' }
    ]
  }




class UpdateProfile extends Component {

    constructor(props){
        super(props)

        this.state = {
            showField: false,
            showField1:false,
            showField2:false,
            dataValue: this.state,
            firstname:"",
            lastname:"",
          //  email:"",
            phone:"",
            role:"",
            interest:"",
           // password:"",
       // confirm_password:"",
        qualification:"",
        skills:"",
        university:"",
        location:"",
       
        redirectToReferrer : false,
        formErrors: {}   
        
          }
          this.handleSubmit=this.handleSubmit.bind(this)
       }


       handleFormValidation() {    
        const { firstname, email, phone,password, confirm_password,lastname,interest,skills,qualification} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!firstname) {    
            formIsValid = false;    
            formErrors["firstNameErr"] = "Name is required.";    
        }    
       

      if (!lastname) {    
        formIsValid = false;    
        formErrors["lastnameErr"] = " Last Name is required.";    
    }   

    if (!interest) {    
      formIsValid = false;    
      formErrors["interestErr"] = " Please select your interest";    
  }  


        // //Email    
        // if (!email) {    
        //     formIsValid = false;    
        //     formErrors["emailIdErr"] = "Email id is required.";    
        // }    
        // else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
        //     formIsValid = false;    
        //     formErrors["emailIdErr"] = "Invalid email id.";    
        // }    
    
        //DOB    
       
    
 
    
        //Phone number    
        if (!phone) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phone)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //City    
  
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    

   
    handleChange = (e) => {    
      const { name, value } = e.target;    
      this.setState({ [name]: value });    
  }  

       
  Onchange=({ target: { value} }) => {    
    console.log("change",value)       
     this.setState({ 
       showField1: value === "Organization",
       showField: value === "Student",
       showField2: value === "Individual",
       dataValue: value
      });
   this.rolehandler(value);
 
   }



          firsthandler = (event) => {
            this.setState({
                firstname: event.target.value
            })
        }
        lasthandler = (event) => {
            this.setState({
                lastname: event.target.value
            })
        }
    
        phonehandler =(event)=>{
            this.setState({
                phone: event.target.value
    
            })
        }
    
        // emailhandler=(event)=>{
        //     this.setState({
        //         email:event.target.value
        //     })
        // }
    
    
        qualificationhandler = (event) => {
            this.setState({
              qualification : event.target.value
            })
        }

        skillshandler = (event) => {
            this.setState({
              skills : event.target.value
            })
        }

        universityhandler = (event) => {
            this.setState({
              university : event.target.value
            })
        }

        locationhandler = (event) => {
            this.setState({
              location : event.target.value
            })
        }

        rolehandler = (value) => {
        //  console.log("role",value)
            this.setState({
              role : value
            })
        }

        interesthandler = (event) => {
            this.setState({
              interest : event.target.value
            })
        }
    
//validation 

    handleSubmit = (event) => {

      
      if (this.handleFormValidation()) {    
        alert("Successfully updated your profile")   
        this.setState(this.initialState)    
    }  
event.preventDefault()
const { firstname,
    lastname,
   email,
    phone,
   // password, 
   // confirm_password,
   qualification,
    skills,
    university,
    location,
  role,
  interest
    
}=this.state

const data= {
    firstname,
    lastname,
    email,
    phone,
   // password, 
    //confirm_password,
    qualification,
    skills,
    university,
    location,
  role,
  interest
    }

console.log("data is",this.state)
const id = this.props.match.params.id;
//console.log("google id",id)
axios.put(`http://localhost:5000/update-profile/${id}`,data).then((response) => {
  console.log("update",response);
if(response.status === 400){
  alert("email already exists");
}
 else{   
  authenticate(response.data, () => {
   
    this.setState({
        redirectToReferrer: true
    });
    if(role === 'Student'){
      this.props.history.push("/StudentDashboard")
    }
  else if(role === 'Organization'){
    this.props.history.push("/CompanyDashboard")
  }
  
  }); 
 
}

});  

}  
 

render() {
  const { firstNameErr,lastnameErr, emailIdErr,qualificationErr, passwordErr,confirm_passwordErr,phoneNumberErr,skillsErr,interestErr} = this.state.formErrors;    

//console.log(this.state)
        const { dataValue,showField, showField1,showField2} = this.state;
        const options = data[dataValue];
 return (
            <div>
<Header/>
<div>
  <div class="register">
<div class="container">

<div class="row">
<div class="col-md-12 ml-auto mr-auto">
<h2 class="text-center mb-4"><div class="border-style"></div>Update Your <span class="text-blue">Profile </span>  </h2>
</div>
</div>
<form onSubmit={this.handleSubmit}>
<div class="row">
<div class="col-md-6 col-md-offset-6 ml-auto mr-auto"  id="login-box">
<div class="row">
<div class="col-md-12">
<div class="form-group">
<label>First Name</label>
<input type="text" name="firstNameErr"  value={this.state.value}  onChange={this.firsthandler} class="form-control"  placeholder="First Name"className={firstNameErr ? ' showError' : ''} />
<div style={{ color: "red", paddingBottom: 10 }}>{firstNameErr}</div>    
</div>

</div>
<div class="col-md-12">
<div class="form-group">
<label>Last Name</label>
<input type="text" name="lastnameErr" value={this.state.value} onChange={this.lasthandler} class="form-control" id="exampleInputPassword1" placeholder="Lastname"className={lastnameErr ? ' showError' : ''} />
<div style={{ color: "red", paddingBottom: 10 }}>{lastnameErr}</div>   

</div>
<div class="form-group">
<label>Phone Number</label>
<input type="number" name="phoneNumberErr" value={this.state.value} onChange={this.phonehandler} class="form-control" id="exampleInputEmail1" aria-describedby="Phone Number" placeholder="phone number" className={phoneNumberErr ? ' showError' : ''} />
{phoneNumberErr &&  <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>}  

</div>

</div>
</div>

<div class="row">
    <div class="col-md-12"> 


    <div>
    <label>Are You:</label>
        <select name="roleErr" onChange= {this.Onchange} value={this.state.value}>
          <option  value ="" >--Select--</option>
          <option  value="Student">student</option>
          <option  value="Organization">Organization</option>
          <option  value="Individual" >Individual</option>
      
        </select>
     
        { showField ? (
      
      <div> 
   
      <label>Looking For:</label>
  
     <select  value={this.state.value} onChange={this.interesthandler} className={interestErr ? ' showError' : ''}   >
     {options && options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
 </select>
 <div style={{ color: "red", paddingBottom: 10 }}>{interestErr}</div> 
 
       <label>Qualification</label>
       <select name="qualificationErr" value={this.state.value} onChange={this.qualificationhandler} >
       <option value="">select</option>
             <option value="BSC">BSC</option>
             <option value="BTech">BTech</option>
             <option value="MTech">MTech</option>
             <option value="Degree">Degree</option>
             <option value="MSC">MSC</option>
       </select>
       <div style={{ color: "red", paddingBottom: 10 }}>{qualificationErr}</div> 
      
       <div class="row">
         <div class="col-12">
           <label>University</label>
     <input type ="text" name="University" value={this.state.value} onChange={this.universityhandler} id="University"placeholder="University" />
       
             
            
    
    
     </div>

     <div class="col-12">
     <label>Hyderabad</label>
     <input type ="text" name="Location" value={this.state.value} onChange={this.locationhandler} id="Location"placeholder="Location" />
     </div>
     </div>
     </div>
) : null }
       <br/>
       { showField1 ? (
         
         <div> 
 <label>Looking For:</label>

         <select name="interest"  value={this.state.value} onChange={this.interesthandler}className={interestErr ? ' showError' : ''} >
          {options && options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
        </select>

        <div style={{ color: "red", paddingBottom: 10 }}>{interestErr}</div> 
  <input type ="text" name="Location" value={this.state.value} onChange={this.locationhandler} id="Location" placeholder="Location" />
   </div>
          ) : null } 
          
          { showField2 ? (
          <div> 
             <label >Looking For:</label>
              <select  value={this.state.value} onChange={this.interesthandler} className={interestErr ? ' showError' : ''}>
  
       {options && options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
  
    </select>
    <div style={{ color: "red", paddingBottom: 10 }}>{interestErr}</div> 
        <br/>
        <br/>
               <div class="row">
                 <div class="col-12">
              <input type ="text" name="Skills" value={this.state.skills} onChange={this.skillshandler} id="Skills"placeholder="Skill Set"className={skillsErr ? ' showError' : ''}  />
             
              <div style={{ color: "red", paddingBottom: 10 }}>{skillsErr}</div>    
             
              </div>

              <div class="col-12">
          
          <input type ="text" name="Location" value={this.state.location} onChange={this.locationhandler} id="Location"placeholder="Location" style={{width:'200px'}}/>
          </div>
            </div>
            </div>
          ) : null }

        </div>
<br/>

</div>


</div>


<div class="form-group">
<input type="submit" value="Submit" id="submit" class="btn btn-primary btn-lg" style={{ backgroundColor: '#2D4988', color: 'white',}} /><br/>
    
</div>
</div>
</div>
</form>
</div>
</div>


</div>

<div class="bg-light ">
         <div class= "text-center">
             <p class="mb-0 py-2" style={{textAlign:"center",color:"white",backgroundColor:"#0e425f"}}>Copyright © 2021 Albenus All Rights Reserved.</p>
         </div>
     </div>





            </div>

         
        );

    }
}

export default withRouter (UpdateProfile);