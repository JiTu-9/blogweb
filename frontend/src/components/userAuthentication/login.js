import React from 'react'
import { Link } from 'react-router-dom'
import InputBox from './input'
const Login = () => {

    const handleSubmit =() =>{
        console.log("handle");
    }

    return (
        <section className=' flex items-center justify-center '>

            <form className='border w-[80%] max-w-[400px] p-4'>
                <h1 className='text-4xl font-gelasio capitalize text-center mt-5 mb-12 '>
                    Welcome Back
                </h1>
                <InputBox
                    name="email"
                    type="email"
                    placeholder="Email"
                    icon="fi-rr-envelope" />
                <InputBox
                    name="password"
                    type="password"
                    placeholder="Password"
                    icon="fi-rr-key" />

                <button className='border mt-5 w-full p-5'
                    type='submit'
                    onClick={handleSubmit}>
                    Login

                </button>
                <div className='relative w-full flex items-center gap-2 my-10 opacity-10 text-black font-bold'>
                    <hr className='w-1/2 border-black' />
                    <p>or </p>
                    <hr className='w-1/2 border-black' />

                </div>

                <button 
                    className='flex items-center justify-center gap-4 w-[90%] center'>
                    <img  className='w-5' />
                    Continue with google
                </button>

                
                    
                        <p className='mt-4 mb-4 text-dark-grey text-xl text-center'>Don't have an account ?
                            <Link to="/signup" className="underline text-black text-xl ml-1">
                                Join us today
                            </Link>
                        </p>
                        
                

            </form>
        </section>
    )
}

export default Login