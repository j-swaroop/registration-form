// Write your JS code here
import "./index.css"
import {Component} from "react"

class RegistrationForm extends Component{
    state = {
        firstNameInput: "",
        lastNameInput: "",
        showFirstNameError: false,
        showLastNameError: false,
        isSubmitted: false
    }

    onBlurFirstName = () => {
        const {firstNameInput} = this.state
        
        const isValidName = firstNameInput === ""
        this.setState({showFirstNameError: isValidName})
    }

    onBlurLastName = () => {
        const {lastNameInput} = this.state
        
        const isValidName = lastNameInput === ""
        this.setState({showLastNameError: isValidName})
    }

    submitForm = event => {
        event.preventDefault()

        const {firstNameInput, lastNameInput, isSubmitted} = this.state
        
        if(firstNameInput === "" && lastNameInput === "") {
            this.setState({showFirstNameError: true, showLastNameError: true})
        }
        else if(firstNameInput === ""){
            this.setState({showFirstNameError: true})
        }
        else if(lastNameInput === ""){
            this.setState({showLastNameError: true})
        }else{
            this.setState({isSubmitted: true})
        }

    }

    onChangeFirstNameInput = event => {
        this.setState({firstNameInput: event.target.value})
    }

     onChangeLastNameInput = event => {
        this.setState({lastNameInput: event.target.value})
    }
    

    renderFirstNameFeild = () => {
        const {firstNameInput, showFirstNameError} = this.state
        const requiredClassName = showFirstNameError? "required-style": ""
        const requiredMsg = showFirstNameError? "Required": "" 

        return(
            <>
            <label className="label" htmlFor="firstName"> FIRST NAME </label>
            <input className={`input ${requiredClassName}`} onBlur={this.onBlurFirstName} 
                onChange={this.onChangeFirstNameInput} value={firstNameInput} id="firstName" 
                type="text" placeholder="First name" 
            />
            <p className="error-msg"> {requiredMsg} </p>
            </>
        )
    }

    renderLastNameFeild = () => {
        const {lastNameInput, showLastNameError} = this.state
        const requiredClassName = showLastNameError? "required-style": ""
        const requiredMsg = showLastNameError? "Required": ""

        return(
            <>
            <label className="label" htmlFor="lastName"> LAST NAME </label>
            <input className={`input ${requiredClassName}`} onBlur={this.onBlurLastName} 
                onChange={this.onChangeLastNameInput} value={lastNameInput} id="lastName" 
                type="text" placeholder="Last name" 
            />
            <p className="error-msg"> {requiredMsg} </p>
            </>
        )
    }

    renderFormContainer = () => {
        return(
            <form className="form-container" onSubmit={this.submitForm}>
                <div className="input-container"> {this.renderFirstNameFeild()} </div>
                <div className="input-container"> {this.renderLastNameFeild()} </div>
                <button type="submit" className="submit-btn"> Submit </button>
            </form>
        )
    }

    renderSuccessContainer = () => {
        return(
            <>
                <img className="success-img" src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                    alt="success"/>
                <p className="submitted-success-text"> Submitted Successfully </p>
                <button onClick={this.submitAnotherResponse} className="submit-btn submit-another-response"> Submit Another Response </button>
            </>
        )
    }

    submitAnotherResponse = () => {
        this.setState({isSubmitted: false, firstNameInput: "", lastNameInput: ""})
    }

    render(){
        const {isSubmitted} = this.state

        return(
            <div className="bg-container">
                <h1 className="heading"> Registration </h1>
                <div className="responsive-container">
                    {isSubmitted? this.renderSuccessContainer(): this.renderFormContainer()}
                </div>
            </div>
        )
    }
}

export default RegistrationForm