import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import "./loginPage.css";
import { AuthLayout } from '../../layouts/AuthLayout/AuthLayout';

export const LoginPage = () => {
  return (

<AuthLayout title="Login" subtitle="Enter your credentials to access your dashboard.">
  <form className="form">
    <Input label="Email" placeholder="you@example.com" />
    <Input label="Password" type="password" placeholder="••••••••" />

    <div className="form-actions">
      <Button type="submit">Login</Button>
      <Button variant="secondary" type="button">Continue as guest</Button>
    </div>

    <p className="form-footer">
      Don't have an account? <a href="#">Create one</a>
    </p>
  </form>
</AuthLayout>


    
    

    
  )
}
