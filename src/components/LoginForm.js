import React from "react";

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        submitAttempted: false,
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
            } 
    
            if (!this.state.password) {
              passwordError = 'Please fill in the password field.';
            }
    
            this.setState({
              emailError,
              passwordError,
              submitAttempted: false,
            });
          
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
            <div className="w-1/2 mx-auto">
            <form onSubmit={this.handleSubmit}>
                <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                    type="text"
                    name="email"
                    className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="emailField"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email" />
                    <label
                    for="emailField"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
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
                    className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="passwordField"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password" />
                    <label
                    for="passwordField"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
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
            </div>
        );
    }
}

export default LoginForm;