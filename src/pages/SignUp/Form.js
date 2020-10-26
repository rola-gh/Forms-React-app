import React, { Component } from "react";
//
import Grid from 'react-css-grid'
// import { faGoogle , faTwitter , faLinkedIn , faGithub} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vector from '../../img/Vector.svg';
import eyeSlash from '../../img/eyeSlash.svg';

class Form extends Component{
    state = {
        isAgree: true,
        isInformed:false,
        email: "",
        password: "",
        isPassShow:false,
    };

    handleInputChange = e => {
        // const target = e.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const email = target.email;
        //
        // this.setState({
        //     [email]: value
        // });
    };


    handleSubmit = event => {
        alert('Welcome');
        event.preventDefault();
    };

    passwordVisibility =()=>{
        const {isPassShow} = this.state;
        this.setState({isPassShow : !isPassShow})
    };

    render() {
        const {isPassShow} = this.state;
        return (
        <>
            <h2>Join the game!</h2>
            <p>Go inside the best gamers social network!</p>
            <Grid width={20}>
                <FontAwesomeIcon icon={['fab', 'google']} />
                <FontAwesomeIcon icon={['fab', 'twitter']} />
                <FontAwesomeIcon icon={['fab', 'linkedIn']} />
                <FontAwesomeIcon icon={['fab', 'github']} />
            </Grid>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Your email
                    <input
                        placeholder={'Write your email'}
                        type="email"
                        name={'email'}
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </label>

                <label>
                    Choose a password
                    <input
                        placeholder={'•••••••••'}
                        type={(isPassShow) ? "text" : "password"}
                        name={'password'}
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                </label>
                <img src={`${isPassShow ? {eyeSlash} : {Vector}}`} alt=" " onClick={this.passwordVisibility} />

                <label>
                    <input
                        name="isAgree"
                        type="checkbox"
                        checked={this.state.isAgree}
                        onChange={this.handleInputChange} />
                    I agree to <span>terms & conditions</span>

                </label>
                <label>
                    <input
                        name="isInformed"
                        type="checkbox"
                        checked={this.state.isInformed}
                        onChange={this.handleInputChange} />
                    I’d like being informed about latest news and tips

                </label>
                <input type="submit" value="Sign up for free" />
                <p>Do you already have an account? <span>Log in </span></p>
            </form>
        </>
    )}
}

export default Form;

