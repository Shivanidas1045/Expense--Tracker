import React,{useState} from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const updated = { ...formData };
    updated[e.target.name] = e.target.value;
    setFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

  const {email,password}=formData;

  const storedData=JSON.parse(localStorage.getItem('user'))

  if(!email || !password){
    alert('Please fill out the required fields!');
    return;
  }

if(!storedData){
  setError('No user found, Please sign up first!')
  return;
}

if(storedData.email === email && storedData.password === password){
  alert('Enjoy the music!🎶')
  navigate('/')
}else{
  setError("Email or password doesn't match ❌")
}
  };

  return (
    <div>

    <h1 className='text-[#008080] text-center font-medium lg:text-4xl md:text-base sm:text-sm pt-10 pb-10'>
        Login to your Account💵📝💰
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-full max-w-md mx-auto p-5'>
        <input
          className='p-3 rounded border border-gray-600'
          type='email'
          name='email'
          placeholder='Enter your email..'
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          className='p-3 rounded bg-white  border border-gray-600'
          type='password'
          name='password'
          placeholder='Enter your password..'
          onChange={handleChange}
          value={formData.password}
          required
        />

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button
          className='bg-[#008080] hover:bg-[#006666] transition text-white px-4 py-2 mt-4 rounded'
          type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};


export default Login;