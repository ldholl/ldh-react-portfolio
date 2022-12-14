import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';


function Contact(){
    //useState hook
        //[current state, function to update state] = state that get preserved + initial state
    const[formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;
    
    function handleSubmit(e){
        console.log('submit');
        e.preventDefault();
        if(!errorMessage){
            console.log('Submit form', formState)
        }
    }

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`)
            } else {
                setErrorMessage('');
            }
        }
        
        setFormState({...formState, [e.target.name]: e.target.value})
        console.log(errorMessage)
        if(!errorMessage){
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    }
    

    return(
        <section className='page-section' id='contact-section'>
            <h2 className='section-header'>Contact Me</h2>
            <form id='contact-form' onSubmit={handleSubmit} className='z-depth-5'>
                <div>
                    <label htmlFor='name'></label>
                    <input type='text' name='name' placeholder='Name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div className='add-25-bott'>
                    <label htmlFor='email'></label>
                    <input type='email' name='email'  placeholder='Email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='add-25-bott'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' rows='10' defaultValue={message} onBlur={handleChange}></textarea>
                </div>
        {errorMessage && (
            <div>
                <p className='error-text red-text'>{errorMessage}</p>
            </div>
        )}
                <button className='btn waves-effect waves-light blue' type='submit'>Submit</button>
            </form>
        </section>

    )
}

export default Contact;