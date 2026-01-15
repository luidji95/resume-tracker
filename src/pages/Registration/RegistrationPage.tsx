import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import "../Login/loginPage.css"; 
import "./registration.css";



type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};



export const RegistrationPage = () => {
const [formData, setFormData] = useState<RegisterFormData>({
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  terms: false,
});


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;

    setFormData(prev => ({...prev, [name]: type === 'checkbox' ? checked : value}));
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('REGISTER DATA : ', formData);
}



  return (
    <AuthLayout
      title="Create account"
      subtitle="Create your account to access your dashboard."
    >
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <Input label="First name" name="firstName" placeholder="Miloš" autoComplete="given-name" onChange={handleChange} />
          <Input label="Last name" name="lastName" placeholder="Petrović" autoComplete="family-name" onChange={handleChange} />
        </div>

        <Input label="Username" name="username" placeholder="luidji95" autoComplete="username" onChange={handleChange} />

        <Input label="Email" name="email" placeholder="you@example.com" autoComplete="email" onChange={handleChange} />

        <PasswordInput name="password" placeholder="••••••••" autoComplete="new-password" onChange={handleChange} />

        {/* za sada ćemo reuse-ovati PasswordInput i kao confirm, bez toggle je isto ok */}
        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          placeholder="••••••••"
          autoComplete="new-password"
          onChange={handleChange}
        />

        <label className="checkbox">
          <input type="checkbox" name="terms" />
          <span>
            I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
          </span>
        </label>

        <div className="form-actions">
          <Button type="submit">Create account</Button>

          <p className="form-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};
