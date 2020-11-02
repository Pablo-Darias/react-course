import React, { useState } from 'react'
import './SignIn.scss'

import { FormInput } from '../FormInput'
import { CustomButton } from '../CustomButton'

const initialState = {
  email: '',
  password: ''
}

const SignIn: React.FunctionComponent = () => {
  const [targets, setTargets] = useState(initialState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setTargets({...targets, [`${name}`]: value})
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={targets.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={targets.password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <CustomButton type="submit">
          SIGN IN
        </CustomButton>
      </form>
    </div>
  )
}

export default SignIn
