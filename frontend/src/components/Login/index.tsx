'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

const LoginForm = () => {
  const router = useRouter();
  const redirecToRegister: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    router.push('/register');
  };

  return (
    <form action='submit'>
      <div className='flex flex-col items-center justify-center text-white'>
        <label className='mb-2'>
          <span className='block mb-1'>Usuário</span>
          <input
            type='text'
            className='border border-gray-300 rounded-md px-4 py-2 w-64 text-black'
          />
        </label>
        <label className='mb-2'>
          <span className='block mb-1'>Password</span>
          <input
            type='password'
            className='border border-gray-300 rounded-md px-4 py-2 w-64 text-black'
          />
        </label>
        <div className='flex'>
          <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 w-24'>
            Login
          </button>
          <button
            type='button'
            onClick={(e) => redirecToRegister(e)}
            className='bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 w-24'
          >
            Registro
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
