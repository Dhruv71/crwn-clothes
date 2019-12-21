import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { auth,signInWithGoogle } from '../../firebase/firebase.utilis';

class SignIN extends React.Component{
	constructor(props){
     super(props);

     this.state={
     	         email:'',
     	         password:''
     };

	}

handelSubmit= async event => {
	event.preventDefault();
    
    const {email,password} = this.state;
    try{
    	await auth.signInWithEmailAndPassword(email,password);
    	this.setState({email:'',
                   password:''})

    } catch(error){
    	console.log(error);
    } 
    
};

handelChange = event => {
	const {value,name} = event.target

	this.setState({[name] : value});

}
	render() {
		return (
			<div className='sign-in'>
			<h2 className='title'>I Have Already A Account</h2>
			<span>Sign in with email and password</span>

			<form onSubmit={this.handelSubmit}> 
			
			<FormInput name='email' type='email' value={this.state.email}
			       required label='email' handelChange={this.handelChange}/>
			    
			 <FormInput name='password' type='password' value={this.state.password}
			       required label='password' handelChange={this.handelChange} />
			  <div className='buttons'>    
			 <CustomButton type='submit' value='Submit Form' >SIGN IN</CustomButton>
			 <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN With Google</CustomButton>            
		      </div>  
		    </form>		
			</div>
		);
	}
}

export default SignIN; 	