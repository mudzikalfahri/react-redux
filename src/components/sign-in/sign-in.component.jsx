import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
import { Link } from 'react-router-dom';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {email , password} = this.state;
        try {
          auth.signInWithEmailAndPassword(email, password);
          this.setState({
            email:'',
            password:''
          })
        } catch(error){
          console.log(error)
        }
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
              <p className="or">or</p>
              <div className="googlesign">
                <Link to='#' onClick={signInWithGoogle}><span>Sign In with Google</span></Link>
              </div> 
            </form>

            
          </div>
        );
      }
}
