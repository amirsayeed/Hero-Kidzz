"use client";
import Link from 'next/link';
import React from 'react';
import SocialButton from './SocialButton';

const RegisterForm = () => {
    const handleSubmit = async(e) =>{
        e.preventDefault();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Create Account</h2>
  
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                required
              />
  
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
  
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
  
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </form>
  
            <SocialButton/>
  
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link href={"/login"} className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default RegisterForm;