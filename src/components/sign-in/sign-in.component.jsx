import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
    
      render() {
        return (
          <div className='sign-in'>
            <h2 className='title-signin'>Sign In</h2>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                placeholder='Email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                placeholder='Password'
                required
              />
              <div className="button-container">
                <CustomButton type='submit'>Log In</CustomButton>
                <Link to='/signup' className='signup-to'><span>Sign Up</span></Link>
              </div>
              <div className="googlesign">
                <Link to='#' onClick={signInWithGoogle}><span>Sign In with Google</span></Link>
              </div> 
            </form>

            
          </div>
        );
      }
}
