import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/button/button.component';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor() {
      super();
  
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { displayName, email, password, confirmPassword } = this.state;
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
  
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserProfileDocument(user, { displayName });
  
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    handleChange = event => {
      const { name, value } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
        <div className='sign-up'>
          <span className='title'>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              placeholder='Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              placeholder='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              placeholder='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder='Confirm Password'
              required
            />
            <div className="btn-container" >
                <CustomButton type='submit'>Sign Up</CustomButton>
                <Link to='/signin' className='signin-to'><span>Sign In</span></Link>
            </div>
            
          </form>
        </div>
      );
    }
  }
  
  export default SignUp;