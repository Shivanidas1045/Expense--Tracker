import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Signup = () => {
  const [formData,setFormData]=useState({email:"",password:"",confrmPswrd:""})
  const [error,setError]=useState('')

  const navigate=useNavigate()


  const handleChange=(e)=>{
    const updatedData={...formData}
    updatedData[e.target.name]=e.target.value
    setFormData(updatedData)
    
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  const { email, password, confrmPswrd } = formData;

  // Email validation
  if (!email.includes('@') || !email.includes('gmail') || !email.includes('.')) {
    setError('Please enter a valid email address!');
    return; // stop further execution
  } else {
    setError(''); // clear error
  }

  // Check for empty fields
  if (!email || !password || !confrmPswrd) {
    alert("Please fill out the required fields!");
    return;
  }

  // Check password length
  if (password.length < 8) {
    setError("Password should have at least 8 characters");
    return;
  }

  // Check password match
  if (password !== confrmPswrd) {
    setError("Passwords don't match ❌");
    return;
  }

  localStorage.setItem('user', JSON.stringify({ email, password }));

  alert("You are successfully registered! ✅");
  navigate('/login')

  // Reset form data - assuming frmData is an object
  setFormData({ email: '', password: '', confrmPswrd: '' });
};


  return (
    <div>
<h1 className='columns-1 font-sans text-center font-medium lg:text-4xl md:text-base 
sm:text-sm pt-10 pb-10 text-[#008080]'>Sign Up to Track your Expense 📝</h1>

<form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-full max-w-md mx-auto p-5'>

<input   className='p-3 rounded bg-white text-black border border-gray-600'
 type="email"  name="email" placeholder="Enter your email.."
  onChange={handleChange} value={formData.email} required/>

<input className= {`p-3 rounded bg-white text-black border border-gray-600 p-2 rounded border 
   ${formData.password.length === 0  ? 'border-gray-300' : formData.password.length < 8  ? 'border-red-500'  : 'border-green-500'}`} 

    type="password" name="password" placeholder="Enter your password.." onChange={handleChange}
     value={formData.password} required/>

<input className='p-3 rounded bg-white text-black  border border-gray-600'
  type="password" name="confrmPswrd" placeholder="Re-type your password.."
   onChange={handleChange} value={formData.confrmPswrd} required/>

        {error && <p className='text-red-500 text-sm'>{error}</p>}


<button className='bg-[#008080] hover:bg-[#006666] transition text-white px-4 py-2 mt-4 rounded' type='submit'>Sign up</button>

</form>

    </div>
  )
}

export default Signup;