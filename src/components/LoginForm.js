import React from "react";
import LoginModal from "./LoginModal";

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        submitAttempted: false,
        showModal: false,
      };
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };

      validatePassword = (password) => {
        return password.length >= 6;
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitAttempted: true });
      };
    
      componentDidUpdate(prevProps, prevState) {
        let emailError = '';
        let passwordError = '';
        if (prevState.submitAttempted !== this.state.submitAttempted) {
          
            
    
            if (!this.state.email) {
                emailError = 'Please fill in the email field.';
            } else if (!this.validateEmail(this.state.email)) {
                emailError = 'Please enter a valid email.'
            }
    
            if (!this.state.password) {
                passwordError = 'Please fill in the password field.';
            } else if (!this.validatePassword(this.state.password)) {
                passwordError = 'Please enter a password longer than 6 characters.';
            }
    
            this.setState({
                emailError,
                passwordError,
                submitAttempted: false,
            });

            if (!emailError && !passwordError) {
                this.setState({ showModal: true });
            }
          
        } else if (prevState.email !== this.state.email) {
            if (!this.validateEmail(this.state.email)) {

                emailError = 'Please enter a valid email.'
            }
            this.setState({
                emailError
            });
        } else if (prevState.password !== this.state.password) {
            if (!this.validatePassword(this.state.password)) {
                passwordError = 'Please enter a password longer than 6 characters.';
            }
            this.setState({
                passwordError

            });
        }


      }

    render() {
        return (
            <div className="w-1/2 m-auto">
            <form onSubmit={this.handleSubmit}>
                <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                    type="text"
                    name="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                    id="emailField"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email" />
                    <label
                    for="emailField"
                    className="absolute left-0 -top-5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-base"
                    >Email
                    </label>
                    {this.state.emailError && (
                        <p className="text-red-500 text-sm mt-1">{this.state.emailError}</p>
                    )}
                </div>

                <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                    id="passwordField"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password" />
                    <label
                    for="passwordField"
                    className="absolute left-0 -top-5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-base"
                    >Password
                    </label>
                    {this.state.passwordError && (
                        <p className="text-red-500 text-sm mt-1">{this.state.passwordError}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="inline-block w-full rounded bg-green-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Sign in
                </button>

        
            </form>

            {this.state.showModal && (
                <LoginModal email={this.state.email} />
                )}
            </div>
        );
    }
}

export default LoginForm;