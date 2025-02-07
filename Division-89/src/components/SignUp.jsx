import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react'; import 'mdb-react-ui-kit/dist/css/mdb.min.css'; import { MDBBtn, MDBContainer, MDBInput, MDBCheckbox, MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
function SignUp(){
     const [formValues, setFormValues] = useState({ name: '', email: '', password: '', repeatPassword: '', terms: false }); 
     const handleInputChange = (e) => 
        { const { name, value, checked, type } = e.target; 
     setFormValues({ ...formValues, [name]: type === 'checkbox' ? checked : value }); };
      const handleSubmit = (e) => { e.preventDefault(); 
       
        console.log(formValues); }; 
        return ( 
        
        <MDBContainer className="my-5 col-8"> 
        <MDBCard style={{ borderRadius: '15px' }}> <MDBCardBody className="p-5"> 
            <h2 className="text-uppercase text-center mb-5">Create an account</h2> <form onSubmit={handleSubmit}> 
                <MDBInput label="Your Name" type="text" name="name" value={formValues.name} onChange={handleInputChange} className="mb-4" />
                 <MDBInput label="Your Email" type="email" name="email" value={formValues.email} onChange={handleInputChange} className="mb-4" />
                  <MDBInput label="Password" type="password" name="password" value={formValues.password} onChange={handleInputChange} className="mb-4" /> 
                  <MDBInput label="Repeat your password" type="password" name="repeatPassword" value={formValues.repeatPassword} onChange={handleInputChange} className="mb-4" /> 
                  <MDBCheckbox label="I agree all statements in Terms of service" name="terms" checked={formValues.terms} onChange={handleInputChange} className="d-flex justify-content-center mb-5" /> 
                  <div className="d-flex justify-content-center"> <MDBBtn type="submit" className="btn-success btn-lg" > Register </MDBBtn> </div> </form>
                   </MDBCardBody> </MDBCard> </MDBContainer> );

}

export default SignUp