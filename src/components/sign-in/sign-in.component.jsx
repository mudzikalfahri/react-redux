import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';

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
            </form>

            <div className="button-container">
                <CustomButton type='submit'>Login</CustomButton>
                <CustomButton>Sign Up</CustomButton>
            </div>
          </div>
        );
      }
}
