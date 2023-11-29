import {useState, useEffect } from 'react'
import { validateEmail, validateLength } from '../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputEmail, setInputEmail] = useState(false);
  const [inputName, setInputName] = useState(false);
  const [inputMessage, setInputMessage] = useState(false);


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);

    } else if (inputType === 'name') {
      setName(inputValue);

    } else {
      setMessage(inputValue);
    }
  };

  const blurredEmail = () => {
    setInputEmail(true)
  }

  const focusedEmail = () => {
    setInputEmail(false)
  }

  const blurredName = () => {
    setInputName(true)
  }

  const focusedName = () => {
    setInputName(false)
  }

  const blurredMessage = () => {
    setInputMessage(true)
  }

  const focusedMessage = () => {
    setInputMessage(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid')
      return;
    }
    setEmail('');
    setInputEmail(false);
    setName('');
    setInputName(false);
    setMessage('');
    setInputMessage(false);
    alert(`Thank you for the message ${name}`)
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have questions? Feel free to reach out!
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20 form" onSubmit={handleFormSubmit}>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
              onFocus={focusedEmail}
              onBlur={blurredEmail}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              />
              {!email && inputEmail &&  (
                <div>
                  <p>This field is required</p>
                </div>
              )}
            </div>
          </div>
        <div className="sm:col-span-2 my-5">
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                onFocus={focusedName}
                onBlur={blurredName}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                />
                {!name && inputName &&  (
                <div>
                  <p>This field is required</p>
                </div>
              )}
              </div>
          </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              value={message}
              name="message"
              id="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Leave a message..."
              rows={6}
              onFocus={focusedMessage}
              onBlur={blurredMessage}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              />
                {!message && inputMessage &&  (
                <div>
                  <p>This field is required</p>
                </div>
              )}
            </div>
          </div>
        <button 
        type="submit"
        className="block w-full rounded-md bg-regal-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
        >
          Submit</button>

      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
  );
 
}
